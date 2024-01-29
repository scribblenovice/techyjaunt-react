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
import { eventImg, galleryImg } from "../../resources/resources";
import { Carousel } from "flowbite-react";
import { Zoom } from "react-reveal";
import LogoSrc from "../../images/techy_jaunt_logo.svg";

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
    "Fully funded tech scholarships",
    "Launching a career in tech",
    "Securing a job in the tech space",
    "Transitioning into tech",
    "Hackathon participation",
    "Balancing school and a tech career",
  ];

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
        <header className="grid place-items-center h-screen text-white bg-center bg-no-repeat bg-[url('https://th.bing.com/th/id/R.7411f67bf4151bc795c28a8eed5942eb?rik=LF0v8BLT7%2fsH8Q&pid=ImgRaw&r=0')] bg-gray-700 bg-blend-multiply bg-cover">
          <div className="w-[90%] sm:w-[80%] mx-auto">
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
              <Fade bottom>
                <h1 className=" text-3xl md:text-5xl font-bold leading-tight">
                  COMING TO A CITY NEAR YOU!
                </h1>
              </Fade>
              <Fade bottom>
                <div className="py-5 flex justify-center items-center">
                  <div className="mr-3">
                    <svg
                      version="1.1"
                      id="Capa_1"
                      width={`16`}
                      height={`16`}
                      fill="rgb(63, 131, 248)"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 452.986 452.986"
                      xmlSpace="preserve"
                      className="bi bi-file-earmark-text w-10 h-10"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              fill="#fff"
                              d="M404.344,0H48.642C21.894,0,0,21.873,0,48.664v355.681c0,26.726,21.894,48.642,48.642,48.642
				h355.702c26.726,0,48.642-21.916,48.642-48.642V48.664C452.986,21.873,431.07,0,404.344,0z M148.429,33.629h156.043v40.337
				H148.429V33.629z M410.902,406.372H42.041v-293.88h368.86V406.372z"
                            />
                            <rect
                              x="79.273"
                              y="246.23"
                              fill="#fff"
                              width="48.642"
                              height="48.664"
                            />
                            <rect
                              x="79.273"
                              y="323.26"
                              fill="#fff"
                              width="48.642"
                              height="48.642"
                            />
                            <rect
                              x="160.853"
                              y="169.223"
                              fill="#fff"
                              width="48.621"
                              height="48.642"
                            />
                            <rect
                              x="160.853"
                              y="246.23"
                              fill="#fff"
                              width="48.621"
                              height="48.664"
                            />
                            <rect
                              x="160.853"
                              y="323.26"
                              fill="#fff"
                              width="48.621"
                              height="48.642"
                            />
                            <rect
                              x="242.369"
                              y="169.223"
                              fill="#fff"
                              width="48.664"
                              height="48.642"
                            />
                            <rect
                              x="242.369"
                              y="246.23"
                              fill="#fff"
                              width="48.664"
                              height="48.664"
                            />
                            <rect
                              x="242.369"
                              y="323.26"
                              fill="#fff"
                              width="48.664"
                              height="48.642"
                            />
                            <rect
                              x="323.907"
                              y="169.223"
                              fill="#fff"
                              width="48.664"
                              height="48.642"
                            />
                            <rect
                              x="323.907"
                              y="246.23"
                              fill="#fff"
                              width="48.664"
                              height="48.664"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </g>
                    </svg>
                  </div>
                  <p className="text-sm md:text-lg font-semibold text-gray-300">
                    29th February, 2024
                  </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="counter w-full">
                  <CountdownTimer targetDate={`February 29, 2024, 07:00:00`} />
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
        <section className="past-events my-32 mx-auto w-[90%] sm:w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            <div className="h-full rounded-md move">
              <img
                className="rounded-lg h-full"
                src={galleryImg[0].src}
                alt=""
              />
            </div>
            <div>
              <Fade bottom>
                <h2 className=" text-xl font-black text-gray-700 md:text-3xl text-left">
                  ABOUT THE CONFERENCE{" "}
                </h2>
              </Fade>
              <Fade bottom>
                <div className=" text-left leading-8 my-5 text-gray-600">
                  The primary goal of this event is to provide young people with
                  an opportunity to delve into a diverse range of technological
                  skills and knowledge, focusing on emerging technologies such
                  as crypto, AI, Blockchain, etc., which are increasingly
                  crucial in today's rapidly evolving world. We aim to be the
                  bridge that guides Africans into the tech industry
                </div>
              </Fade>
              <div className="grid grid-cols-2 gap-y-7 gap-x-2 mt-3">
                {aboutArray.map((el) => {
                  return (
                    <Zoom>
                      <div className="grid grid-cols-9">
                        <div className="">
                          <i class="ri-check-line text-xs bg-blue-500 w-5 h-5 rounded-full grid place-items-center text-white"></i>
                        </div>
                        <p className="ml-2 col-span-8 text-gray-600 text-sm">
                          {el}
                        </p>
                      </div>
                    </Zoom>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="w-[90%] sm:w-[80%] my-36 mx-auto">
          <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl text-center">
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
                    <div className="relative grid md:grid-cols-3 h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[550px]">
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
                        <p className="text-white font-bold">{el.info}</p>
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