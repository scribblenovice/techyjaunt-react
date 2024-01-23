import CountdownTimer from "../globalcomponents/Countdown";
import EventNav from "../globalcomponents/EventNav";
import FooterSection from "../globalcomponents/FooterSection";
import MailBtn from "../globalcomponents/MailButton";
import NavLinks from "../globalcomponents/NavLinks";
import { useState } from "react";
import Partners from "../homepage/partners/Partners";
import { Element } from "react-scroll";
import Fade from "react-reveal/Fade";

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
                  onclick={``}
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
