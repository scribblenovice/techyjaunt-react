"use client";
import NavLinks from "../globalcomponents/NavLinks";
import vidSrc from "../images/launchpad/launchpadvid.mp4";
import LogoSrc from "../images/techy_jaunt_logo.svg";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import FormModal from "../globalcomponents/FormModal";

import Testimonial from "../globalcomponents/Testimonial";
import FooterSection from "../globalcomponents/FooterSection";
import Avatars from "../globalcomponents/Avatars";
import TypingAnimation from "../globalcomponents/TypingAnimation";
import MailBtn from "../globalcomponents/MailButton";
import { Fade } from "react-reveal";
import axios from "axios";

const LaunchPad = () => {
  useLayoutEffect(() => {
    function addMetaCode() {
      var metaNoscript = document.createElement("noscript");
      var metaScript = document.createElement("script");
      metaNoscript.innerHTML = `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=219032204013009&ev=PageView&noscript=1"
/>`;
      metaScript.text =
        "!function(f,b,e,v,n,t,s)\r\n{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\r\nn.callMethod.apply(n,arguments):n.queue.push(arguments)};\r\nif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\r\nn.queue=[];t=b.createElement(e);t.async=!0;\r\nt.src=v;s=b.getElementsByTagName(e)[0];\r\ns.parentNode.insertBefore(t,s)}(window, document,'script',\r\n'https://connect.facebook.net/en_US/fbevents.js');\r\nfbq('init', '219032204013009');\r\nfbq('track', 'PageView');";
      document.head.appendChild(metaScript);
      document.head.appendChild(metaNoscript);
      console.log("hello");
    }
    addMetaCode();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]); // current time of the video in array. The first value represents the minute and the second represents seconds.
  const [currentTimeSec, setCurrentTimeSec] = useState(); //current time of the video in seconds
  const [duration, setDuration] = useState([0, 0]); // // total duration of the video in the array. The first value represents the minute and the second represents seconds.
  const [durationSec, setDurationSec] = useState(); // // current duration of the video in seconds
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });

  const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };
  useEffect(() => {
    const { min, sec } = sec2Min(videoRef.current.duration);
    setDurationSec(videoRef.current.duration);
    setDuration([min, sec]);
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTimeSec(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);
  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
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
    selectedCourse: "",
    knowlegeOfTechyJaunt: "",
    expectation: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    selectedCourse: formData.selectedCourse,
    knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
    expectation: formData.expectation,
  };
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstname = "enter your name";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastname = "enter your name";
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
    if (formData.selectedCourse === "") {
      errors.selectedCourse = "select an option";
      isValid = false;
    }

    if (formData.knowlegeOfTechyJaunt === "") {
      errors.knowlegeOfTechyJaunt = "select an option";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/signup", { ...payload })
        .then((res) => {
          if (res.data.status === "registered") {
            setOpenModal(false);
            setModalError(false);
            setOpen(true);
            setMessage(
              "YOU HAVE SUCCESSFULLY REGISTERED FOR COHORT 3! YOU WILL BE REDIRECTED TO OUR WHATSAPP COMMUNITY SHORTLY"
            );

            setTimeout(() => {
              window.location.href =
                "https://chat.whatsapp.com/EYUmLA5lrDB0KrWAFuH5Hm";
            }, 3000);
          }
          if (res.data.status === "alreadysignedup") {
            setModalError(true);
            setOpen(true);
            setMessage("YOU HAVE ALREADY SIGNED UP FOR THE COHORT!");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("PLEASE FILL IN THE CORRECT PARAMETERS!");
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
    <div className="bg-stone-100">
      <NavLinks
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
        isLaunchPad={true}
      />
      <FormModal
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
            selectedCourse: e,
          });
        }}
        handleSelect2={(e) => {
          setFormData({
            ...formData,
            knowlegeOfTechyJaunt: e,
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
            selectedCourse: "",
            knowlegeOfTechyJaunt: "",
            expectation: "",
          });
          sessionStorage.removeItem("countryCode");
        }}
      />

      <section className="flex justify-center h-fit py-20 lg:h-[100vh] launchpad-jumbo bg-gray-800 bg-blend-multiply">
        <div className="mt-12 lg:mt-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center">
          <div className="h-full lg:h-[70%] flex flex-col justify-around md:justify-evenly">
            <Fade bottom>
              <h1 className="text-2xl lg:text-2xl text-center lg:text-left my-10 font-bold leading-10 tracking-wider">
                Welcome to {""}
                <span className="text-blue-500 techy font-black">
                  TechyJaunt
                </span>
                {""} Launchpad
              </h1>
            </Fade>
            <Fade bottom>
              <p className="font-medium text-white text-base md:text-lg leading-8 glow">
                Embark on a transformative tech journey guided by industry
                experts. Unlock the power of in-demand tech skills, accessible
                from anywhere on the globe. Start your adventure into the world
                of technology today!
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="scale my-5 mx-auto flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-linear hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                APPLY NOW
              </button>
              <div className="flex items-center flex-wrap">
                <Avatars />
                <p className="mt-5 lg:mt-0 text-white text-sm sm:text-base font-medium">
                  Over 1K+ professionals onboarded and trained
                </p>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="testvid w-full sm:w-[80%] mx-auto overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] box bg-black rounded-lg lg:w-[40vw] py-10 relative">
              {/* videos */}
              <video
                className="w-full h-[85%] mx-auto relative -top-8 z-10"
                // autoPlay
                ref={videoRef}
                src={vidSrc}
                loop
                // autoPlay
              ></video>
              <div className="playbtn absolute bottom-10 left-0 right-0 mx-auto text-center">
                <button
                  onClick={handlePlay}
                  className="relative z-20 w-16 h-16 rounded-full bg-white focus:outline-none"
                >
                  <i
                    className={`${
                      isPlaying && durationSec != currentTimeSec
                        ? "ri-pause-line"
                        : "ri-play-fill"
                    } text-blue-500 text-4xl`}
                  ></i>
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <section className="my-20">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div>
            <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
              WHAT DO WE OFFER YOU?
            </h2>
            <Fade bottom>
              <p className="py-10 sm:py-16 lg:py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center text-lg leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
                We offer a wide variety of courses for people who want to get
                into the tech space
              </p>
              <div className="w-full grid place-items-center">
                <div className="w-fit">
                  <TypingAnimation typingClass="text-blue-500 text-2xl sm:text-3xl md:text-5xl lg:text-7xl " />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Fade bottom>
        <section className="py-10 lg:py-20 bg-gray-800 bg-blend-multiply launchpad">
          <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 place-items-center py-10">
            <div className="lg:w-[100%]">
              <h2 className=" mt-2 text-3xl text-center font-black text-white md:text-4xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
                Unlock Your Potential with TechyJaunt's 6-month Tech Program!
              </h2>
              <p className="font-normal text-white mb-5 text-base leading-8">
                Discover an immersive tech experience that empowers you with
                in-demand skills, all under the guidance of industry luminaries.
                Our students hail from diverse states and backgrounds, united by
                a singular ambition to thrive in the world of technology. You're
                just one click away from commencing your journey in any of these
                thriving tech domains. Take that pivotal step towards your tech
                destiny today!
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="scale mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
              >
                APPLY NOW
              </button>
            </div>
          </div>
        </section>
      </Fade>
      <section className="my-20">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
            TESTIMONIALS
          </h2>
          <Testimonial />
        </div>
      </section>
      <MailBtn />
      <FooterSection />
    </div>
  );
};
export default LaunchPad;
