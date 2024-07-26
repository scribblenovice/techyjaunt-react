import CarouselSlider from "../../globalcomponents/Carousel";
import NavLinks from "../../globalcomponents/NavLinks";
import FooterSection from "../../globalcomponents/FooterSection";
import Mission from "./Mission";
import NewsLetter from "../../globalcomponents/Newsletter";
import AboutUs from "./aboutus/AboutUs";
import Header from "./new-website/new-homepage/Header";
import Partners from "./partners/Partners";
import { useEffect, useState } from "react";
import MailBtn from "../../globalcomponents/MailButton";
import Founder from "../../globalcomponents/Founder";
import { Element } from "react-scroll";
import PopularCourses from "./new-website/new-homepage/PopularCourses";
import BestProgram from "./new-website/new-homepage/BestProgram";
import Bootcamp from "./new-website/new-homepage/Bootcamp";
import Achievements from "./new-website/new-homepage/Achievements";
import FeedBack from "./new-website/new-homepage/Feedback";
import CTAMessage from "./new-website/new-homepage/CTAMessage";
import CTASection from "./new-website/new-homepage/CTASection";
import AboutTechy from "./new-website/new-homepage/AboutTechy";
import StepProgressBar from "../../globalcomponents/StepProgress";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
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
        {/* alumni stories */}
        {/* <PopularCourses /> */}
        <AboutTechy/>
        {/* <AboutUs />
        <Mission/> */}
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
