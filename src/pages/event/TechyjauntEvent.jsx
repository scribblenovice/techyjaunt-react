import CountdownTimer from "../../globalcomponents/Countdown";
import EventNav from "../../globalcomponents/EventNav";
import FooterSection from "../../globalcomponents/FooterSection";
import MailBtn from "../../globalcomponents/MailButton";
import { useState } from "react";
import Partners from "../homepage/partners/Partners";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import EventForm from "./EventForm";
import axios from "axios";

const TechyjauntEvent = () => {
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const THREE_DAYS_IN_MS = 24 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTime = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [shake, setShake] = useState(false);
  const countryCode = sessionStorage.getItem("countryCode");
  const [message, setMessage] = useState("");
  const [modalError, setModalError] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    stateAttendedFrom: "",
    knowlegeOfTechyJaunt: "",
    expectation: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    stateAttendedFrom: formData.stateAttendedFrom,
    // knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
    expectation: formData.expectation,
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
    if (formData.stateAttendedFrom === "") {
      errors.stateAttendedFrom = "select an option";
      isValid = false;
    }

    // if (formData.knowlegeOfTechyJaunt === "") {
    //   errors.knowlegeOfTechyJaunt = "select an option";
    //   isValid = false;
    // }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log(payload);
    if (isValid) {
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/event-register", {
          ...payload,
        })
        .then((res) => {
          if (res.data.status === "registered") {
            setOpenModal(false);
            setModalError(false);
            setOpen(true);
            setMessage(
              "YOU HAVE SUCCESSFULLY REGISTERED FOR THE UPCOMING EVENT! YOU WILL BE REDIRECTED TO OUR WHATSAPP COMMUNITY SHORTLY"
            );

            setTimeout(() => {
              window.location.href = "";
            }, 3000);
          }
          if (res.data.status === "alreadysignedup") {
            setModalError(true);
            setOpen(true);
            setMessage("YOU HAVE ALREADY REGISTERED FOR THIS EVENT");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("PLEASE FILL THE FORM CORRECTLY!");
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
      <EventForm
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
        handleSelect1={(e) => {
          setFormData({
            ...formData,
            stateAttendedFrom: e,
          });
        }}
        // handleSelect2={(e) => {
        //   setFormData({
        //     ...formData,
        //     knowlegeOfTechyJaunt: e,
        //   });
        // }}
        handleChange2={(phone, e) => {
          setPhone(phone);
          setFormData({
            ...formData,
            phoneNumber: phone,
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
            selectedCourse: "",
            knowlegeOfTechyJaunt: "",
            expectation: "",
          });
          sessionStorage.removeItem("countryCode");
        }}
      />
      <EventNav
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
      />
      <main className="relative">
        <header className="grid place-items-center h-screen text-white bg-center bg-no-repeat bg-[url('https://th.bing.com/th/id/R.7411f67bf4151bc795c28a8eed5942eb?rik=LF0v8BLT7%2fsH8Q&pid=ImgRaw&r=0')] bg-gray-700 bg-blend-multiply bg-cover">
          <div className="w-[90%] sm:w-[80%] mx-auto">
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <Fade bottom>
                <h1 className=" text-3xl md:text-5xl font-bold leading-tight mb-4">
                  COMING TO A CITY NEAR YOU!
                </h1>
              </Fade>
              {/* <p className="text-lg text-gray-300 mb-8">
              Anticipate 24th February, 2024
            </p> */}
              <Fade bottom>
                <div className="counter">
                  <CountdownTimer targetDate={dateTime} />
                </div>
              </Fade>
              <Fade bottom>
                <button
                  onClick={() => setOpenModal(true)}
                  className="hover:scale-105 transition-all ease-in duration-300 bg-blue-500 w-[50%] py-4 rounded-lg eventbtn mt-10"
                >
                  REGISTER NOW
                </button>
              </Fade>
            </div>
          </div>
        </header>
        <Element name="sponsors">
          <section className="partners py-10">
            <Partners isEvent={true} title={`MEET OUR SPONSORS`} />
          </section>
        </Element>
        <section className="past-events"></section>
      </main>
      <Element name="contact">
        <FooterSection />
      </Element>
      <MailBtn mailLink={`mailto:George@techyjaunt.com`} />
    </>
  );
};
export default TechyjauntEvent;
