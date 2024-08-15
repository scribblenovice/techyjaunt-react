import { Element } from "react-scroll";
import FooterSection from "../../../../globalcomponents/FooterSection";
import { LaunchpadNavLinks } from "../../../../globalcomponents/NavLinks";
import LaunchpadBottomCTA from "./LaunchpadBottomCTA";
import LaunchpadCourses from "./LaunchpadCourses";
import LaunchpadHeadSection from "./LaunchpadHeadSection";
import LaunchpadPartners from "./LaunchpadPartners";
import LaunchpadTopCTA from "./LaunchpadTopCTA";
import LaunchpadVideo from "./LaunchpadVideo";
import { Fade } from "react-reveal";

const NewLaunchpad = () => {
  return (
    <>
      <LaunchpadNavLinks />
      <Fade>
        <LaunchpadHeadSection />
      </Fade>
      <Fade>
        <LaunchpadVideo />
      </Fade>
      <Fade>
        <LaunchpadTopCTA />
      </Fade>
      <Fade>
        <Element name="courses">
          <LaunchpadCourses />
        </Element>
      </Fade>
      <Fade>
        <Element name="partners">
          <LaunchpadPartners />
        </Element>
      </Fade>
      <Fade>
        <LaunchpadBottomCTA />
      </Fade>
      <Element name="contact">
        <FooterSection />
      </Element>
    </>
  );
};
export default NewLaunchpad;
