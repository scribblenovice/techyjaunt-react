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

      <LaunchpadHeadSection />
      <LaunchpadVideo />
      <LaunchpadTopCTA />
      <Element name="courses">
        <LaunchpadCourses />
      </Element>
      <Element name="partners">
        <LaunchpadPartners />
      </Element>
      <LaunchpadBottomCTA />
      <Element name="contact">
        <FooterSection />
      </Element>
    </>
  );
};
export default NewLaunchpad;
