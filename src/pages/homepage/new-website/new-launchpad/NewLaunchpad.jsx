import FooterSection from "../../../../globalcomponents/FooterSection";
import LaunchpadBottomCTA from "./LaunchpadBottomCTA";
import LaunchpadCourses from "./LaunchpadCourses";
import LaunchpadHeadSection from "./LaunchpadHeadSection";
import LaunchpadPartners from "./LaunchpadPartners";
import LaunchpadTopCTA from "./LaunchpadTopCTA";

const NewLaunchpad = () => {
  return (
    <>
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
