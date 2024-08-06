// src/ResponsiveTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../globalcomponents/Loader";
import { useSnackbar } from "notistack";

const fetchData = async () => {
  const { data } = await axios.get(
    "https://techyjaunt-kx6a.onrender.com/get-schedule"
  );
  return data;
};

const ViewScheduler = () => {
    const { enqueueSnackbar } = useSnackbar();
    const handleSnackbar = (message, variant) => {
      enqueueSnackbar(message, { variant });
    };
  
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { data, error, isLoading, refetch } = useQuery("fetchData", fetchData, {
    refetchInterval: 5000, // Refetch data every 5 seconds
  });
  const scheduleData = !isLoading ? data : "";
  const parseDateTime = (dateStr, timeStr) => {
    const formattedTimeStr = timeStr
      .replace(/\s*(am|pm)/i, " $1")
      .toUpperCase();
    const [day, month, year] = dateStr.split("-");
    return new Date(`${year}-${month}-${day}T${formattedTimeStr}`);
  };

  // Sort the array
  const mainData = scheduleData?.data?.data.sort((a, b) => {
    const dateTimeA = parseDateTime(a.fields.MeetingDate, a.fields.MeetingTime);
    const dateTimeB = parseDateTime(b.fields.MeetingDate, b.fields.MeetingTime);
    return dateTimeA - dateTimeB;
  });

  console.log(scheduleData?.data?.data);
  console.log(mainData);

  const deletSchedule = (id) => {
    console.log(id);
    setPending(true);
    axios
      .post("https://techyjaunt-kx6a.onrender.com/delete-schedule", {
        userId: id,
      })
      .then((res) => {
        setPending(false);
        handleSnackbar("deleted successfully", "success");
      })
      .catch((error) => {
        setPending(false);
        handleSnackbar("failed", "error");
      });
  };
  return (
    <>
      {pending && <Loader />}
      <div className="container mx-auto p-4">
        <button
          onClick={goBack}
          className="bg-blue-500 p-3 text-white rounded-md mb-5"
        >
          GO BACK
        </button>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="p-2 text-left">Action</th>
                <th className="p-2 text-left">S/N</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Company</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Website</th>
                <th className="py-3 px-6 text-left">Meeting Date</th>
                <th className="py-3 px-6 text-left">Meeting Time</th>
                <th className="py-3 px-6 text-left">Extra Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {mainData?.map((user, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="p-2 text-center">
                    <button
                      onClick={() => deletSchedule(user?.id)}
                      className="text-red-500 text-lg"
                    >
                      <i class="ri-delete-bin-6-line"></i>
                    </button>
                  </td>
                  <td className="p-2 text-left">{index}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user?.fields?.FirstName + " " + user?.fields?.LastName}
                  </td>
                  <td className="py-3 px-6 text-left">{user?.email_address}</td>
                  <td className="py-3 px-6 text-left">
                    {user?.fields?.PhoneNumber}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user?.fields?.CompanyName}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user?.fields?.CompanyPosition}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user?.fields?.CompanyWebsite}
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {user?.fields?.MeetingDate}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user?.fields?.MeetingTime}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {user?.fields?.ExtraDetails}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewScheduler;
