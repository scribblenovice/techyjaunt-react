import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import axios from "axios";
import { useSnackbar } from "notistack";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Loader from "../globalcomponents/Loader";
import { useNavigate } from "react-router-dom";

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

const SecretPage = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [openModal, setOpenModal] = useState(false);
  const [newLink, setNewLink] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setNewLink(value);
  };
  const setLink = () => {
    setPending(true);
    setOpenModal(false);
    axios
      .post("https://techyjaunt-react.onrender.com/change-link", {
        newLink: newLink,
      })
      .then((res) => {
        setPending(false);
        handleSnackbar(res.data.status, "success");
        setOpenModal(false);
        setNewLink("");
      })
      .catch((error) => {
        setPending(false);
        handleSnackbar("an error occured", "error");
      });
  };
  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <button
          onClick={() => navigate("/admin/admin-nav")}
          className="bg-white p-3 text-blue rounded-md m-5 absolute top-5 left-5 hover:bg-gray-500 hover:text-white transition-all  ease-linear duration-200"
        >
          GO BACK
        </button>
        <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]">
          <h1 className="text-2xl font-bold text-center">
            WELCOME TECHYJAUNT ADMIN
          </h1>
          <p className="text-white text-center my-5">
            PLEASE TYPE YOUR NEW LINK
          </p>
          <input
            className="p-2 text-lg w-full"
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            placeholder="enter your new link"
            id="newLink"
            name="newLink"
            onChange={handleChange}
            value={newLink}
            required={true}
          />
          <button
            className="mt-5 bg-white p-3 rounded-md hover:bg-black hover:text-white transition-all ease-linear duration-300"
            onClick={() => {
              if (newLink === "") {
                handleSnackbar("link cannot be empty", "error");
              } else {
                setOpenModal(true);
              }
            }}
          >
            CHANGE LINK
          </button>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="rounded-lg relative">
          <button
            onClick={() => setOpenModal(false)}
            className="text-red-500 absolute text-3xl top-4 right-4"
          >
            <i class="ri-close-circle-line"></i>
          </button>
          <div className="flex flex-col gap-5 items-center py-5">
            <h2 className="font-bold text-xl text-center">
              ARE YOU SURE YOU WANT TO PROCEED?
            </h2>
            <button
              onClick={setLink}
              className="font-bold rounded-md bg-blue-500 p-3 text-white hover:bg-blue-500 hover:text-white transition-all ease-linear duration-300"
            >
              PROCEED
            </button>
          </div>
        </Box>
      </Modal>
      {pending && <Loader />}
    </>
  );
};
export default SecretPage;
