import CountdownTimer from "../../globalcomponents/Countdown";
import EventNav from "../../globalcomponents/EventNav";
import FooterSection from "../../globalcomponents/FooterSection";
import MailBtn from "../../globalcomponents/MailButton";
import { useEffect, useRef, useState } from "react";
import Partners from "../homepage/partners/Partners";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";
import EventForm from "./EventForm";
import axios from "axios";
import {
  EventSvg,
  eventImg,
  galleryImg,
  speakers,
} from "../../resources/resources";
import { Carousel } from "flowbite-react";
import { Zoom } from "react-reveal";
import LogoSrc from "../../images/techy_jaunt_logo.svg";
import CountUp from "../../globalcomponents/CountUp";
import bgSrc from "../../images/gallery/gallery4.webp";
import Speakers from "./Speakers";
import EventPartners from "./EventPartners";
import { useNavigate } from "react-router-dom";

const TechyjauntEvent = () => {
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
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
    if (formData.expectation === "") {
      errors.expectation = "please fill in your expectations";
      isValid = false;
    }

    // if (formData.knowlegeOfTechyJaunt === "") {
    //   errors.knowlegeOfTechyJaunt = "select an option";
    //   isValid = false;
    // }

    setFormErrors(errors);
    return isValid;
  };
  const aboutArray = [
    "Distribution of laptops",
    "Offering fully funded tech scholarships.",
    "Guiding participants on starting a career in tech",
    "Securing a job in the tech space",
    "Addressing the challenges of transitioning into tech",
    "Discussing strategies for balancing school and a tech career",
  ];
  const navigate = useNavigate()

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
            sessionStorage.setItem("event-registered")
            navigate('/event/thank-you')
          }
          if (res.data.status === "alreadysignedup") {
            setModalError(true);
            setOpen(true);
            setMessage("YOU HAVE ALREADY REGISTERED FOR THIS EVENT");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE TRY AGAIN");
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
    console.log(formData)
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
            stateAttendedFrom: "",
            expectation: "",
          });
          sessionStorage.removeItem("countryCode");
        }}
      />
      <EventNav
        openModal={() => setOpenModal(true)}
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
      />
      <main className="relative">
        <header className="grid place-items-center h-screen text-white bg-center bg-no-repeat bg-[url('https://th.bing.com/th/id/R.7411f67bf4151bc795c28a8eed5942eb?rik=LF0v8BLT7%2fsH8Q&pid=ImgRaw&r=0')] bg-gray-700 bg-blend-multiply bg-cover bg-fixed">
          <div className="w-[90%] sm:w-[80%] mx-auto">
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <Fade bottom>
                <h1 className="mt-10 text-xl md:text-4xl font-bold leading-tight">
                  WE'RE THE BRIDGE, GUIDING AFRICANS INTO TECH ONE PERSON AT A
                  TIME
                  <br />{" "}
                  <span className="text-base py-5 inline-block">
                    Sign up for our next event happening in your city
                  </span>
                </h1>
              </Fade>
              {/* <Fade bottom>
                <div className="py-5 flex justify-center items-center">
                  <div className="mr-3">
                    <EventSvg />
                  </div>
                  <p className="text-sm md:text-lg font-semibold text-gray-300">
                    29th February, 2024
                  </p>
                </div>
              </Fade> */}
              <Fade bottom>
                <div className="counter w-full">
                  <CountdownTimer targetDate={`February 24, 2024, 07:00:00`} />
                </div>
              </Fade>
              <Fade bottom>
                <button
                  onClick={() => setOpenModal(true)}
                  className=" bg-blue-500 w-[50%] py-4 rounded-lg eventbtn mt-10"
                >
                  REGISTER NOW
                </button>
              </Fade>
            </div>
          </div>
        </header>
        <Element name="about">
          <section className="eventAbout bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover bg-fixed">
            <div className="py-20 mx-auto w-[90%] sm:w-[80%]">
              <div className="grid grid-cols-1 gap-x-10 gap-y-5">
                <div className="aboutWriteUp p-5">
                  <Fade bottom>
                    <h2 className=" text-xl font-black text-white md:text-3xl text-left">
                      Beyond the campus walls: Building a tech career as a
                      student hosted by Techyjaunt{" "}
                    </h2>
                  </Fade>
                  <div>
                    <Fade bottom>
                      <div className="saira text-left leading-8 py-5 text-white">
                        The summit is scheduled to be held on Saturday, 24th
                        February 2024, at the University of Nigeria Enugu
                        campus, located at the premises of WTC Estate in Ogui
                        New Layout, Enugu, Nigeria. It will attract four other
                        campuses within Enugu (ESUT, IMT, Godfrey Okoye, and
                        Nsukka campus) with an expected audience of 2000+
                        participants. The primary objective of this initiative
                        is to provide students with the opportunity to delve
                        into a diverse range of technological skills and
                        Emerging technology such as AI, Crypto, NFT, Blockchain
                        etc which are increasingly crucial in today’s Rapidly
                        evolving world. Key components of the summit include:
                      </div>
                    </Fade>
                    <div className="grid grid-cols-2 gap-y-7 gap-x-2 py-5">
                      {aboutArray.map((el) => {
                        return (
                          <Zoom>
                            <div className="grid grid-cols-9">
                              <div className="">
                                <i className="ri-check-line text-xs bg-blue-500 w-5 h-5 rounded-full grid place-items-center text-white"></i>
                              </div>
                              <p className="saira ml-2 col-span-8 text-white text-base">
                                {el}
                              </p>
                            </div>
                          </Zoom>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <section className="bg-black">
          <div className="w-full py-20">
            <Fade bottom>
              <CountUp />
            </Fade>
          </div>
        </section>
        <Element name="speakers">
          <section className="speakerBg bg-center bg-cover bg-no-repeat bg-gray-900 bg-blend-multiply bg-fixed">
            <div className="w-[90%] sm:w-[80%] py-20 mx-auto">
              <h2 className="mt-2 text-3xl font-black text-white md:text-5xl text-center">
                NOTABLE SPEAKERS{" "}
              </h2>
              <Speakers />
            </div>
          </section>
        </Element>
        <section className="bg-center bg-no-repeat bg-white bg-blend-multiply bg-fixed">
          <div className="w-[90%] sm:w-[80%] py-20 mx-auto">
            <h2 className="mt-2 text-3xl font-black text-black md:text-5xl text-center">
              MEET OUR PARTENRS{" "}
            </h2>
            <div className="w-full rounded-md">
              <EventPartners />
            </div>
          </div>
        </section>
        <section className="w-[90%] sm:w-[80%] py-20 mx-auto">
          <h2 className="mt-2 text-3xl font-black text-black md:text-5xl text-center">
            PAST EVENTS{" "}
          </h2>
          <Fade bottom>
            <div>
              <Carousel
                slideInterval="5000"
                pauseOnHover
                className=" my-10 h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[550px]  rounded-xl"
                indicators={false}
              >
                {eventImg.map((el) => {
                  return (
                    <div className=" relative grid md:grid-cols-3 h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[550px]">
                      <img
                        loading="lazy"
                        key={el.id}
                        src={el.src}
                        alt=""
                        className="w-full h-full col-span-2"
                      />
                      <div className="absolute right-0 left-0 text-center p-2 text-sm md:static md:text-xl md:p-5 bg-blue-500 flex flex-col items-center justify-center">
                        <div className="w-24 h-24 rounded-full md:grid md:my-3 place-items-center bg-white hidden md:visible ">
                          <img src={LogoSrc} alt="" loading="lazy" />
                        </div>
                        <p className="saira text-white font-bold text-base md:text-xl">
                          {el.info}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Fade>
        </section>
        {/* <Element name="sponsors">
          <section className="partners py-10">
            <Partners isEvent={true} title={`MEET OUR SPONSORS`} />
          </section>
        </Element> */}
      </main>
      <Element name="contact">
        <FooterSection />
      </Element>
      <MailBtn mailLink={`mailto:George@techyjaunt.com`} />
    </>
  );
};
export default TechyjauntEvent;
