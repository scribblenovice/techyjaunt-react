import { Fade } from "react-reveal";
import Avatars from "../../globalcomponents/Avatars";
import { AvatarImg, state } from "../../resources/resources";
import TypingAnimation from "../../globalcomponents/TypingAnimation";
import Videos from "../homepage/videos/Videos";
import CommunityForm from "./Communityform";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NavLinks from "../../globalcomponents/NavLinks";
import src from "../../images/gallery/gallery4.webp";
import Carouselnew from "../../globalcomponents/Carouselnew";

const Community = () => {
  const [pending, setPending] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [shake, setShake] = useState(false);
  const countryCode = sessionStorage.getItem("countryCode");
  const [message, setMessage] = useState("");
  const [modalError, setModalError] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    skills: "",
    state: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    skills: formData.skills,
    state: formData.state,
  };
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstname = "enter your first name";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastname = "enter your first name";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }

    if (formData.phoneNumber.trim().length <= 4) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (formData.skills === "") {
      errors.skills = "select a skill";
      isValid = false;
    }
    if (formData.state === "") {
      errors.state = "select a state";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setPending(true)
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/community-register", {
          ...payload,
        })
        .then((res) => {
          if (res.data.status === "registered") {
            setPending(false)
            setModalError(false);
            setOpen(true);
            setMessage(
              "YOU HAVE SUCCESSFULLY SIGNED UP TO OUR COMMUNITY, YOU WILL BE REDIRECTED SHORTLY"
            );
            sessionStorage.setItem("isRegistered", true);
            navigate("/community/thank-you");
            // setTimeout(() => {
            //   window.location.href =
            //     "https://chat.whatsapp.com/GrWTvqGpf742giBu1BOZsE";
            // }, 1500);
          }
          if (res.data.status === "existing") {
            setPending(false)
            setModalError(true);
            setOpen(true);
            setMessage("THIS EMAIL ALREADY EXISTS!");
          }
          if (res.data.status === "failed") {
            setPending(false)
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE TRY AGAIN");
          }
        })
        .catch((error) => {
          // Handle error
          if (error.response) {
            setPending(false)
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN");
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(
            //   "Server responded with a non-2xx status code:",
            //   error.response.status
            // );
            // console.log('Data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            setPending(false)
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN");
          } else {
            setPending(false)
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN");
            // console.log("Error setting up the request:", error.message);
          }
          // console.log("Error config:", error.config);
        });
    }
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <NavLinks
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
        isLaunchPad={true}
      />
      <CommunityForm
        open={open}
        close={() => {
          setOpen(false);
        }}
        openModal={openModal}
        message={message}
        modalError={modalError}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        formData={formData}
        handleChange2={(phone, e) => {
          setPhone(phone);
          setFormData({
            ...formData,
            phoneNumber: phone,
          });
        }}
        handleSelect1={(e) => {
          setFormData({
            ...formData,
            skills: e,
          });
        }}
        handleSelect2={(e) => {
          setFormData({
            ...formData,
            state: e,
          });
        }}
        shake={shake}
        closeModal={() => {
          setOpenModal(false);
          setFormErrors({});
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          });
        }}
      />
      <header className="flex justify-center h-fit lg:h-screen py-20 launchpad-jumbo bg-center bg-cover bg-blend-multiply bg-gray-800">
        <div className="mt-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center">
          <div className="h-full md:h-[70%] flex flex-col justify-around md:justify-evenly">
            <Fade bottom>
              <h1 className="font-black text-3xl md:text-5xl tracking-widest leading-[70px] mb-5 lg:mb-0">
                TECHYJAUNT COMMUNITY
              </h1>
            </Fade>
            <Fade bottom>
              <p className="mt-5 font-medium text-white text-base md:text-lg leading-8 glow min-h-[100px] md:min-h-fit">
                Join a community of over 30,000 tech enthusiasts. As the African
                Tech space continues to grow, we ensure you stay informed
                through our vibrant community
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="py-3 my-5 px-10 bg-blue-500 rounded-md font-medium text-white hover:scale-105 transition-all duration-200 ease-in text-base lg:text-xl"
              >
                JOIN OUR TECH COMMUNITY HERE
              </button>
              <div className="flex items-center flex-wrap">
                <Avatars />
                <p className="text-white text-sm sm:text-base font-medium">
                  Over 30K+ community members
                </p>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="w-full h-full md:py-5 lg:py-0">
              <Carouselnew />
              {/* videos */}
              {/* <Videos /> */}
              {/* <img src={src} alt="" className="rounded-lg w-full h-full border-white border-4" /> */}
            </div>
          </Fade>
        </div>
      </header>
      {pending && <EmailLoading />}
    </>
  );
};
export default Community;
