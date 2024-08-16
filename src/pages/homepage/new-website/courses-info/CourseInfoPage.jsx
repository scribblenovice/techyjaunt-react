import { allCousesInfo } from "../../../../resources/resources";
import CourseInfoHead from "./CourseInfoHead";
import { useParams } from "react-router-dom";
import CourseTimeline from "./CourseTimeLine";
import CourseLearnMode from "./CourseLearnMode";
import CourseUnits from "./CourseUnits";
import CourseCerts from "./CourseCerts";
import CourseCTA from "./CourseCTA";
import CTASection from "../new-homepage/CTASection";
import FooterSection from "../../../../globalcomponents/FooterSection";
import { CoursesNavLinks } from "../../../../globalcomponents/NavLinks";
import { Element } from "react-scroll";
import { Fade } from "react-reveal";

export const CourseInfoPage = ({ data }) => {
  return (
    <>
      <CoursesNavLinks />

      <CourseInfoHead data={data} />

      <CourseTimeline />

      <CourseLearnMode />

      <Element name="brochure">
        <CourseUnits data={data} />
      </Element>
      <CourseCerts data={data} />
      <CourseCTA />
      <Element name="community">
        <CTASection />
      </Element>
      <Element name="contact">
        <FooterSection />
      </Element>
    </>
  );
};

const AllCoursesPage = () => {
  const { courseName } = useParams();
  const activeCourse = allCousesInfo.filter((el) => {
    return el.tag == courseName;
  });
  return <CourseInfoPage data={activeCourse[0]} />;
};
export default AllCoursesPage;
