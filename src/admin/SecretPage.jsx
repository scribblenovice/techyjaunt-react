import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import { Modal } from "flowbite-react";
import axios from "axios";

const SecretPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [newLink, setNewLink] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setNewLink(value);
  };
  const setLink = () => {
    axios
      .post("https://techyjaunt-kx6a.onrender.com/change-link", { newLink: newLink })
      .then((res) => {
        alert(res.data.status);
        setOpenModal(false);
        setNewLink("")
      });
  };
  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]">
          <h1 className="text-2xl font-bold text-center">
            WELCOME TECHYJAUNT ADMIN
          </h1>
          <p className="text-white text-center my-5">
            PLEASE TYPE YOUR NEW LINK
          </p>
          <GlobalText
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            labelTxt=""
            id="newLink"
            inputName="newLink"
            handleChange={handleChange}
            inputVal={newLink}
            placeTxt={`enter your new link`}
            isRequired={true}
          />
          <button
            className="mt-5 bg-white p-3 rounded-md hover:bg-black hover:text-white transition-all ease-linear duration-300"
            onClick={() => {
              if (newLink === "") {
                alert("please type your link");
              } else {
                setOpenModal(true);
              }
            }}
          >
            CHANGE LINK
          </button>
        </div>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body className="flex flex-col gap-5 items-center">
          <h2 className="font-bold text-xl">
            ARE YOU SURE YOU WANT TO PROCEED?
          </h2>
          <button
            onClick={setLink}
            className="font-bold rounded-md bg-blue-500 p-3 text-white hover:bg-blue-500 hover:text-white transition-all ease-linear duration-300"
          >
            PROCEED
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default SecretPage;
