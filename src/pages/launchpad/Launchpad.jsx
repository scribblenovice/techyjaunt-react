"use client";
import NavLinks from "../../globalcomponents/NavLinks";
import vidSrc from "../../images/launchpad/launchpadvid.mp4";
import { useState, useRef, useEffect } from "react";
import FormModal from "../../globalcomponents/FormModal";
import Testimonial from "../../globalcomponents/Testimonial";
import FooterSection from "../../globalcomponents/FooterSection";
import Avatars from "../../globalcomponents/Avatars";
import TypingAnimation from "../../globalcomponents/TypingAnimation";
import MailBtn from "../../globalcomponents/MailButton";
import { Fade } from "react-reveal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LaunchPad = () => {
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
  // FORM
  const navigate = useNavigate();
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
    selectedCourse: "",
    knowlegeOfTechyJaunt: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    selectedCourse: formData.selectedCourse,
    knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
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
            sessionStorage.setItem("isRegistered", true);
            navigate("/launchpad/thank-you");
          }
          if (res.data.status === "alreadysignedup") {
            setModalError(true);
            setOpen(true);
            setMessage("YOU HAVE ALREADY SIGNED UP FOR THE COHORT!");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED, PLEASE TRY AGAIN!");
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
    console.log(formData);
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
              <h1 className=" font-black text-3xl md:text-5xl tracking-widest leading-[70px] mb-5">
                Welcome to {""}
                <span className="text-blue-500 techy font-black">
                  TechyJaunt
                </span>
                {""} Launchpad
              </h1>
            </Fade>
            <Fade bottom>
              <p className="font-medium text-white text-base md:text-lg leading-8 glow">
              Start an exciting tech journey with help  and mentorship from industry experts. Learn important tech skills from anywhere in the world. Begin your adventure into tech today!
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="scale my-5 mx-auto flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-200 ease-linear hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                APPLY NOW
              </button>
              <div className="flex items-center flex-wrap">
                <Avatars />
                <p className="mt-5 lg:mt-0 text-white text-sm sm:text-base font-medium">
                  Over 5K+ professionals onboarded and trained
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
              <div className="playbtn rounded-full absolute bottom-10 left-0 right-0 mx-auto text-center">
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
                  <TypingAnimation
                    sequenceArray={[
                      "DATA ANALYSIS",
                      2000,
                      "UI/UX DESIGN",
                      2000,
                      "PRODUCT MANAGEMENT",
                      2000,
                      "FRONTEND DEVELOPMENT",
                      2000,
                      "BACKEND DEVELOPMENT",
                      2000,
                      "CYBER SECURITY",
                      2000,
                    ]}
                    repeat={Infinity}
                    typingClass="text-blue-500 text-2xl sm:text-3xl md:text-5xl lg:text-7xl "
                  />
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
                Join us for a fun tech experience where you can learn important
                tech skills with the help of expert mentors. Our students come
                from many different places, all wanting to succeed in tech.
                You’re just one click away from starting your journey in
                exciting tech fields. Take the first step towards your
                tech future today!
              </p>
              <button
                onClick={() => setOpenModal(true)}
                className="scale mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition-all duration-200 ease-linear md:py-4 md:text-lg md:px-10"
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
