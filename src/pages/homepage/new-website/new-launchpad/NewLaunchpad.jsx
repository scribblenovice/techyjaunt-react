import FooterSection from "../../../../globalcomponents/FooterSection";
import NavLinks from "../../../../globalcomponents/NavLinks";
import LaunchpadBottomCTA from "./LaunchpadBottomCTA";
import LaunchpadCourses from "./LaunchpadCourses";
import LaunchpadHeadSection from "./LaunchpadHeadSection";
import LaunchpadPartners from "./LaunchpadPartners";
import LaunchpadTopCTA from "./LaunchpadTopCTA";

const NewLaunchpad = () => {
  return (
    <>
    {/* <NavLinks/> */}
      <LaunchpadHeadSection />
      <LaunchpadTopCTA/>
      <LaunchpadCourses />
      <LaunchpadPartners />
      <LaunchpadBottomCTA/>
      <FooterSection />
    </>
  );
};
export default NewLaunchpad;
