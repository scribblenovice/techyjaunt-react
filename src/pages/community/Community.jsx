import { Fade } from "react-reveal";
import Avatars from "../../globalcomponents/Avatars";
import {
  AvatarImg,
  Circle,
  CurlyLine,
  FancyUnderline,
  Star,
  Star2,
  state,
} from "../../resources/resources";
import TypingAnimation from "../../globalcomponents/TypingAnimation";
import Videos from "../homepage/videos/Videos";
import CommunityForm from "./Communityform";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NavLinks from "../../globalcomponents/NavLinks";
import src from "../../images/gallery/gallery4.webp";
import Carouselnew from "../../globalcomponents/Carouselnew";
import Loader from "../../globalcomponents/Loader";
import { useSnackbar } from "notistack";

const Community = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [pending, setPending] = useState(false);
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
      setPending(true);
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/community-register", {
          ...payload,
        })
        .then((res) => {
          setPending(false);
          if (res.data.status === "registered") {
            handleSnackbar("successful", "success");
            sessionStorage.setItem("isCommunityRegistered", true);
            navigate("thank-you");
          }
          if (res.data.status === "existing") {
            handleSnackbar("this email already exists!", "error");
          }
          if (res.data.status === "failed") {
            handleSnackbar("registration failed, please try again!", "error");
          }
        })
        .catch((error) => {
          setPending(false);
          // Handle error
          if (error.response) {
            handleSnackbar("registration failed, please try again!", "error");
          } else if (error.request) {
            handleSnackbar("please check your internet connection!", "error");
            // The request was made but no response was received
          } else {
            handleSnackbar("registration failed, please try again!", "error");
          }
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
      {/* <NavLinks
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
        isLaunchPad={true}
      /> */}
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
            skills: "",
            state: "",
          });
        }}
      />
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-10 relative pb-20 py-10 lg:py-20 w-[90%] xl:w-[80%]">
        <Circle
          color="#0075FD"
          className="absolute hidden xl:block top-36 left-[25%]"
        />
        <CurlyLine className="absolute hidden xl:block right-56 top-14" />
        <Star className="absolute hidden xl:block top-28 -left-12" />
        <Star2 className="absolute hidden xl:block top-36 left-[48%]" />
        <div>
          <p className="text-tech-blue font-semibold hidden xl:block">
            START YOUR TECH JOURNEY
          </p>
          <h1 className="text-left tracking-wide lg:leading-[60px] text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-800 my-10">
            Welcome to
            <span className="text-tech-blue relative whitespace-nowrap">
              <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              Techyjaunt Community
            </span>
          </h1>
          <p className="mb-10 leading-7 text-xl text-gray-700 font-normal">
            Join a community of over 30,000 tech enthusiasts. As the African
            Tech space continues to grow, we ensure you stay informed through
            our vibrant community
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="mb-10 bg-tech-blue hover:bg-gray-500 transition-all ease-linear duration-200 text-white text-base md:text-xl py-3 px-10 rounded-lg mx-auto w-fit"
          >
            JOIN OUR TECH COMMUNITY HERE
          </button>
          <div className="flex items-center flex-wrap">
            <Avatars />
            <p className="text-xl text-gray-700  font-normal leading-7">
              Over 5K+ professionals trained.
            </p>
          </div>
        </div>
        <div className="relative grid place-items-center">
          <Circle
            color="#FFC27A"
            className="absolute hidden xl:block -top-16 left-36"
          />
          <Circle
            color="#6D39ED"
            className="absolute hidden xl:block -bottom-5 left-24"
          />
          <div className="w-full h-full md:py-5 lg:py-0">
            <Carouselnew />
          </div>
        </div>
      </div>
      {pending && <Loader />}
    </>
  );
};
export default Community;
