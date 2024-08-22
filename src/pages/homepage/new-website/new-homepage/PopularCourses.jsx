import CardSlider from "../../../../globalcomponents/CardSlider";
import { FancyUnderline } from "../../../../resources/resources";

const PopularCourses = () => {
  return (
    <div className="bg-[#E4FCFF] py-10 lg:pt-20 relative">
      <div className="xl:flex w-[85%] mx-auto">
        <h2 className="text-6xl font-semibold w-[25%] hidden xl:block mr-5">
          Most{" "}
          <span className="relative text-tech-blue">
            <FancyUnderline className="absolute -bottom-0" /> Popular
          </span>
          <br />
          <span className="text-tech-blue">Course</span>
        </h2>

        <h2 className="block xl:hidden font-semibold text-2xl sm:text-3xl text-center mb-5 tts">
          <span className="relative inline-block tts">
            Most <span className="text-tech-blue tts">Popular</span>
            <FancyUnderline className="absolute -bottom-2 " />
          </span>
          <br />
          <span className="text-tech-blue tts">Courses</span>
        </h2>
        <CardSlider />
      </div>
    </div>
  );
};
export default PopularCourses;
