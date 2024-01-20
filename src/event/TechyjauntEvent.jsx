import CountdownTimer from "../globalcomponents/Countdown";
import EventNav from "../globalcomponents/EventNav";
import FooterSection from "../globalcomponents/FooterSection";
import MailBtn from "../globalcomponents/MailButton";
import NavLinks from "../globalcomponents/NavLinks";
import { useState } from "react";

const TechyjauntEvent = () => {
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const THREE_DAYS_IN_MS = 24 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTime = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <EventNav
        navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          scrollNumber > 0 ? "nav-change" : "text-white"
        }`}
      />
      <main className="relative">
        <header className=" mx-auto w-[90%] sm:w-[80%] bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
          <div className=" w-[90%] sm:w-[80%]"></div>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Background Image"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              COMING TO A CITY NEAR YOU!
            </h1>
            {/* <p className="text-lg text-gray-300 mb-8">
              Anticipate 24th February, 2024
            </p> */}
            <div className="counter">
              <CountdownTimer targetDate={dateTime} />
            </div>
            <button className="bg-blue-500 w-[50%] py-4 rounded-lg eventbtn mt-10">
              REGISTER NOW
            </button>
          </div>
        </header>
        <section className="partners"></section>
        <section className="past-events"></section>
      </main>
      <FooterSection />
      <MailBtn/>
    </>
  );
};
export default TechyjauntEvent;
