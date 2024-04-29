import CountdownTimer from "../../globalcomponents/Countdown";
import FooterSection from "../../globalcomponents/FooterSection";
import src from "../../images/crypto-bootcamp/trader.jpg";
import Fade from "react-reveal";
import CryptoForm from "./CryptoForm";
import { useState } from "react";
import EmailLoading from "../../globalcomponents/EmailLoading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { gender } from "../../resources/resources";

const CryptoBootCamp = () => {
  const [pending, setPending] = useState(false);
  // reg modal
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
    country: "",
    gender: "",
    email: "",
    phoneNumber: "",
    cryptoCourse: "",
    cryptoKnowledge: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    country: formData.country,
    gender: formData.gender,
    phoneNumber: formData.phoneNumber.trim(),
    cryptoKnowledge: formData.cryptoKnowledge,
    cryptoCourse: formData.cryptoCourse,
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
    if (formData.cryptoCourse === "") {
      errors.cryptoCourse = "choose a course of interest";
      isValid = false;
    }
    if (formData.cryptoKnowledge === "") {
      errors.cryptoKnowledge = "select an option";
      isValid = false;
    }
    if (formData.country === "") {
      errors.country = "select your country";
      isValid = false;
    }
    if (formData.gender === "") {
      errors.gender = "select your gender";
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
        .post("https://techyjaunt-kx6a.onrender.com/crypto-bootcamp-reg", {
          ...payload,
        })
        .then((res) => {
          if (res.data.status === "registered") {
            setPending(false);
            setModalError(false);
            setOpen(true);
            setMessage(
              "YOU HAVE SUCCESSFULLY SIGNED UP TO OUR COMMUNITY, YOU WILL BE REDIRECTED SHORTLY"
            );
            // sessionStorage.setItem("isRegistered", true);
            // navigate("/community/thank-you");
            // // setTimeout(() => {
            // //   window.location.href =
            // //     "https://chat.whatsapp.com/GrWTvqGpf742giBu1BOZsE";
            // // }, 1500);
          }
          if (res.data.status === "existing") {
            setPending(false);
            setModalError(true);
            setOpen(true);
            setMessage("THIS EMAIL ALREADY EXISTS!");
          }
          if (res.data.status === "failed") {
            setPending(false);
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE TRY AGAIN");
          }
        })
        .catch((error) => {
          // Handle error
          if (error.response) {
            setPending(false);
            setModalError(true);
            setOpen(true);
            setMessage(
              "REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN"
            );
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(
            //   "Server responded with a non-2xx status code:",
            //   error.response.status
            // );
            // console.log('Data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            setPending(false);
            setModalError(true);
            setOpen(true);
            setMessage(
              "REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN"
            );
          } else {
            setPending(false);
            setModalError(true);
            setOpen(true);
            setMessage(
              "REGISTRATION FAILED! PLEASE CHECK YOUR INTERNET CONNECTION TRY AGAIN"
            );
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
      <CryptoForm
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
            cryptoKnowledge: e,
          });
        }}
        handleSelect2={(e) => {
          setFormData({
            ...formData,
            cryptoCourse: e,
          });
        }}
        handleSelect3={(e) => {
          setFormData({
            ...formData,
            country: e,
          });
        }}
        handleSelect4={(e) => {
          setFormData({
            ...formData,
            gender: e,
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
      <section class="bg-center bg-no-repeat crypto-bg bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 md:py-32">
          <h1 class="mb-5 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl">
            Crypto Scholarship Opportunity!
          </h1>
          <p class="mb-5 text-base font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Techyjaunt is offering a 100% funded scholarship for you to learn
            how to trade like a pro or start your crypto journey alongside
            thousands of beneficiaries across Africa.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="mb-5 bg-white font-bold hover:bg-blue-500 hover:text-white transition-all ease-linear duration-200 text-blue-500 rounded-md py-4 px-2"
          >
            Apply here for free
          </button>
          <div className="counter w-full text-white">
            <CountdownTimer targetDate={`June 4, 2024, 07:00:00`} />
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-4 py-16 mx-auto max-w-screen-xl text-center">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-y-5">
            <div className=" grid place-content-center">
              <Fade></Fade>
              <h2 className="py-5 text-2xl sm:text-3xl font-bold tracking-tight leading-none md:text-4xl">
                CURIOUS ABOUT CRYPTO?
              </h2>
              <p className="text-left">
                Here's your chance to become a Crypto Expert and learn from the
                best industry leaders across the world. This programme offers
                much benefits to attendees such as: $60,000 worth of Crypto
                Giveaway for all awardees, Trading Mentorship, Understanding
                DeFi, Getting a job in the crypto space and so much more.
              </p>
            </div>
            <div className="rounded-lg md:px-3">
              <img src={src} alt="" className="rounded-lg w-full h-full" />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <FooterSection />
      {pending && <EmailLoading />}
    </>
  );
};
export default CryptoBootCamp;
