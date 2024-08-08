import NavLinks from "../../globalcomponents/NavLinks";
import FooterSection from "../../globalcomponents/FooterSection";
import Header from "./new-website/new-homepage/Header";
import Partners from "./partners/Partners";
import { useEffect, useState } from "react";
import MailBtn from "../../globalcomponents/MailButton";
import { Element } from "react-scroll";
import BestProgram from "./new-website/new-homepage/BestProgram";
import Bootcamp from "./new-website/new-homepage/Bootcamp";
import Achievements from "./new-website/new-homepage/Achievements";
import FeedBack from "./new-website/new-homepage/Feedback";
import CTAMessage from "./new-website/new-homepage/CTAMessage";
import CTASection from "./new-website/new-homepage/CTASection";
import AboutTechy from "./new-website/new-homepage/AboutTechy";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  return (
    <main className="mx-auto">
        
      <>
        <NavLinks
          // navclass={` flex w-screen justify-center items-center h-20 fixed top-0 nav-bar z-50 ${
          //   scrollNumber > 0 ? "nav-change" : "text-white"
          // }`}
          // isLaunchPad={false}
        />
        <Header />
        <AboutTechy/>
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
