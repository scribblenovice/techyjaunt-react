// src/ResponsiveTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const fetchData = async () => {
  const { data } = await axios.get("https://techyjaunt-kx6a.onrender.com/get-schedule");
  return data;
};

const ViewScheduler = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const { data, error, isLoading, refetch } = useQuery("fetchData", fetchData, {
    refetchInterval: 5000, // Refetch data every 5 seconds
  });
  const scheduleData = !isLoading ? data : "";
  
  return (
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
              <th className="py-3 px-6 text-left">S/N</th>
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
            {scheduleData?.data?.data.map((user, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{index}</td>
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
  );
};

export default ViewScheduler;
