import { HomeNavLink } from "../../globalcomponents/NavLinks";
import FooterSection from "../../globalcomponents/FooterSection";
import Header from "./new-website/new-homepage/Header";
import Partners from "./partners/Partners";
import { useState } from "react";
import MailBtn from "../../globalcomponents/MailButton";
import { Element } from "react-scroll";
import BestProgram from "./new-website/new-homepage/BestProgram";
import Bootcamp from "./new-website/new-homepage/Bootcamp";
import Achievements from "./new-website/new-homepage/Achievements";
import FeedBack from "./new-website/new-homepage/Feedback";
import CTAMessage from "./new-website/new-homepage/CTAMessage";
import CTASection from "./new-website/new-homepage/CTASection";
import AboutTechy from "./new-website/new-homepage/AboutTechy";
import { Fade } from "react-reveal";
const Homepage = () => {
  const [open, setOpen] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });

  return (
    <main className="mx-auto">
      <>
        <HomeNavLink />
        <Fade>
          <Element name="home">
            <Header />
          </Element>
        </Fade>
        <Fade>
          <Element name="about">
            <AboutTechy />
          </Element>
        </Fade>
        <Fade>
          <BestProgram />
        </Fade>
        <Fade>
          <Element name="courses">
            <Bootcamp />
          </Element>
        </Fade>
        <Fade>
          <Partners />
        </Fade>
        <Fade>
          <Achievements />
        </Fade>
        <Fade>
          <Element name="testimonial">
            <FeedBack />
          </Element>
        </Fade>
        <Fade>
          <CTAMessage />
        </Fade>
        <Fade>
          <CTASection />
        </Fade>
        <Element name="contact">
          <FooterSection />
        </Element>
      </>
    </main>
  );
};
export default Homepage;
