import CarouselSlider from "../../globalcomponents/Carousel";
import NavLinks from "../../globalcomponents/NavLinks";
import FooterSection from "../../globalcomponents/FooterSection";
import Mission from "./Mission";
import NewsLetter from "../../globalcomponents/Newsletter";
import AboutUs from "./aboutus/AboutUs";
import Header from "./new-website/Header";
import Partners from "./partners/Partners";
import { useEffect, useState } from "react";
import MailBtn from "../../globalcomponents/MailButton";
import Founder from "../../globalcomponents/Founder";
import { Element } from "react-scroll";
import PopularCourses from "./new-website/PopularCourses";
import BestProgram from "./new-website/BestProgram";
import Bootcamp from "./new-website/Bootcamp";
import Achievements from "./new-website/Achievements";
import FeedBack from "./new-website/Feedback";
import CTAMessage from "./new-website/CTAMessage";
import CTASection from "./new-website/CTASection";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  return (
    <main className="mx-auto">
      <>
        {/* <NavLinks
          navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
            scrollNumber > 0 ? "nav-change" : "text-white"
          }`}
          isLaunchPad={false}
        /> */}
        <Header />
        <PopularCourses />
        <BestProgram />
        <Bootcamp />
        <Partners />
        <Achievements />
        <FeedBack />
        <CTAMessage />
        <CTASection />
        <FooterSection/>
        {/* <Element name="about">
          <AboutUs />
        </Element>
        <Element name="mission">
          <Mission />
        </Element>
        <Partners isEvent={false} title={`OUR PARTNERS`} />
          <NewsLetter />
        <Founder />
        <CarouselSlider />
        <MailBtn mailLink={`mailto:Support@techyjaunt.com`} />
        <Element name="contact">
          <FooterSection />
        </Element> */}
      </>
    </main>
  );
};
export default Homepage;
