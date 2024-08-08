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

export const CourseInfoPage = ({ data }) => {
  return (
    <>
      <CourseInfoHead data={data} />
      <CourseTimeline />
      <CourseLearnMode />
      <CourseUnits data={data} />
      <CourseCerts data={data} />
      <CourseCTA/>
      <CTASection/>
      <FooterSection/>
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
