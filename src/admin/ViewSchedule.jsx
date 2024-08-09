// src/ResponsiveTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loader from "../globalcomponents/Loader";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const fetchData = async () => {
  const { data } = await axios.get(
    "https://techyjaunt-kx6a.onrender.com/get-schedule"
  );
  return data;
};

const ViewScheduler = () => {
  const [activeApplicant, setActiveApplicant] = useState([]);
  const [open, setOpen] = useState(false);
  const getApplicant = (value) => {
    let applicant = mainData.filter((el) => {
      return el.id === value;
    });
    setActiveApplicant(applicant[0])
  };
  const openModal=(value)=>{
    getApplicant(value);
    setOpen(true);
    console.log()
  }
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [pending, setPending] = useState(false);
  const navigate = useNavigate();
  const { data, error, isLoading, refetch } = useQuery("fetchData", fetchData, {
    refetchInterval: 5000, // Refetch data every 5 seconds
  });
  const scheduleData = !isLoading ? data : "";
  const mainData = scheduleData?.data?.data;

  const deleteSchedule = (id) => {
    setPending(true);
    setOpen(false);
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
        <div className="flex justify-between items-center">
          <button
            onClick={() => navigate("/admin/admin-nav")}
            className="bg-blue-500 p-3 text-white rounded-md mb-5 hover:bg-gray-500 transition-all  ease-linear duration-200"
          >
            GO BACK
          </button>
          <h2 className="text-lg font-semibold">MEETING SCHEDULE</h2>
        </div>

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
                      onClick={() => openModal(user?.id)}
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
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="rounded-lg relative">
          <button
            onClick={() => setOpen(false)}
            className="text-red-500 absolute text-3xl top-4 right-4"
          >
            <i class="ri-close-circle-line"></i>
          </button>
          <div className="flex flex-col gap-5 items-center py-5">
            <h2 className="font-bold text-xl text-center pt-3">
              Are you sure you want to proceed? <br />
              This process is irreversible!
            </h2>
            <button
              onClick={() => deleteSchedule(activeApplicant?.id)}
              className="font-bold rounded-md bg-red-600 p-2 text-white hover:bg-red-500 hover:text-gray-100 transition-all ease-linear duration-100"
            >
              PROCEED
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ViewScheduler;
