"use client";
import NavLinks from "../globalcomponents/NavLinks";
import vidSrc from "../images/launchpad/launchpadvid.mp4";
import LogoSrc from "../images/techy_jaunt_logo.svg";
import { useState, useRef, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { Select, Option } from "@material-tailwind/react";
import { PhoneNumber } from "../globalcomponents/PhoneNumber";
import FormModal from "../globalcomponents/FormModal";

import GlobalText from "../globalcomponents/GlobalText";
import Testimonial from "../globalcomponents/Testimonial";
import FooterSection from "../globalcomponents/FooterSection";
import Avatars from "../globalcomponents/Avatars";
import TypingAnimation from "../globalcomponents/TypingAnimation";
import MailBtn from "../globalcomponents/MailButton";

const LaunchPad = () => {
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

  return (
    <div className="bg-stone-100">
      <NavLinks
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
      />
      <FormModal
        openModal={openModal}
        closeModal={() => {
          setOpenModal(false);
          sessionStorage.removeItem("countryCode");
        }}
      />

      <section className="flex justify-center h-fit py-20 lg:h-[100vh] launchpad-jumbo bg-gray-800 bg-blend-multiply">
        <div className="mt-12 lg:mt-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center">
          <div className="h-full lg:h-[70%] flex flex-col justify-around md:justify-evenly">
            <h1 className="text-xl lg:text-2xl md:text-center lg:text-left my-10 font-bold leading-10 tracking-widest">
              Welcome&nbsp;to {""}
              <span className="text-blue-500 techy font-black">TechyJaunt</span>
              {""} Launchpad
            </h1>
            <p className="text-gray-300 mb-5 text-base leading-8 font-extralight md:font-normal">
              Embark on a transformative tech journey guided by industry
              experts. Unlock the power of in-demand tech skills, accessible
              from anywhere on the globe. Start your adventure into the world of
              technology today!
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="mb-5 mx-auto flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all duration-200 ease-linear hover:scale-105 md:py-4 md:text-lg md:px-10"
            >
              APPLY NOW
            </button>
            <div className="flex items-center flex-wrap">
              <Avatars />
              <p className="text-gray-300 mt-5 lg:mt-0 font-extralight md:font-normal">
                Over 1K+ professionals onboarded and trained
              </p>
            </div>
          </div>
          <div className="testvid w-full sm:w-[80%] mx-auto overflow-hidden h-[350px] sm:h-[400px] md:h-[500px] box bg-black rounded-lg lg:w-[40vw] py-10 relative">
            {/* videos */}
            <video
              className="w-full h-[85%] mx-auto relative -top-8 z-10"
              // autoPlay
              ref={videoRef}
              src={vidSrc}
              loop
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
        </div>
      </section>
      <section className="py-10 lg:py-20">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div>
            <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
              WHAT DO WE OFFER YOU?
            </h2>
            <p className="py-10 sm:py-16 lg:py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center text-lg leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
              We offer a wide variety of courses for people who want to get into
              the tech space
            </p>
            <div className="w-full grid place-items-center">
              <div className="w-fit">
                <TypingAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 lg:py-20 bg-gray-800 bg-blend-multiply launchpad">
        <div className="w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 place-items-center py-10">
          <div className="lg:w-[100%]">
            <h2 className=" mt-2 text-3xl text-center font-black text-white md:text-4xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
              Unlock Your Potential with TechyJaunt's 4-Week Basic Tech Program!
            </h2>
            <p className="font-extralight md:font-normal text-white mb-5 text-base leading-8">
              Discover an immersive tech experience that empowers you with
              in-demand skills, all under the guidance of industry luminaries.
              Our students hail from diverse states and backgrounds, united by a
              singular ambition to thrive in the world of technology. You're
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
      <section className="py-10 lg:py-20">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
            TESTIMONIALS
          </h2>
          <Testimonial />
        </div>
      </section>
      <MailBtn />
    </div>
  );
};
export default LaunchPad;
