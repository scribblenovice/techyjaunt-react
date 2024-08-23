import { Community, Community2, Screen } from "../../../../resources/resources";
import src from "../../../../images/launchpad/frame2.png";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
const CourseLearnMode = () => {
  return (
    <>
      <div className="w-[95%] mx-auto flex flex-col -mt-10 lg:-mt-0">
        <Fade bottom>
          <h2 className="border-black inline-block border-b-4 relative font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl self-center xl:self-start my-10">
            How you will learn
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <Fade left>
            <div className="p-6 gap-5 flex flex-col justify-center items-center border-tech-blue border-4 rounded-lg">
              <Screen />
              <p className="text-base md:text-lg font-medium text-center">
                Virtual Live Classes
              </p>
              <p className="text-center text-sm md:text-base text-gray-700">
                Join And Collaborate with other student, in a virtual class
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="p-6 gap-5 flex justify-center flex-col items-center border-tech-blue border-4 rounded-lg">
              <Community2 />
              <p className="text-base md:text-lg font-medium text-center">
                Real world projects
              </p>
              <p className="text-center text-sm md:text-base text-gray-700">
                Work on real-life project by applying what you learn to solve
                related business problems
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="p-6 gap-5 flex justify-center flex-col items-center border-tech-blue border-4 rounded-lg">
              <Community />
              <p className="text-base md:text-lg font-medium text-center">
                Community/ Groups
              </p>
              <p className="text-center text-sm md:text-base text-gray-700">
                Share knowledge with other fellow and gain other perspectives of
                problem-solving
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="p-6 gap-5 flex justify-center flex-col items-center border-tech-blue border-4 rounded-lg">
              <img src={src} alt="" className="w-[85px] h-[74px]" />
              <p className="text-base md:text-lg font-medium text-center text-gray-700">
                Mentorship{" "}
              </p>
              <p className="text-center text-sm md:text-base">
                Gain mentorship from experienced experts
              </p>
            </div>
          </Fade>
        </div>
        <NavLink
          to="/launchpad/register"
          className="inline-block bg-tech-blue hover:bg-gray-500 transition-all ease-linear duration-200 text-white text-2xl md:text-4xl py-3 px-10 rounded-lg mx-auto mt-10"
        >
          Start class today
        </NavLink>
      </div>
    </>
  );
};
export default CourseLearnMode;
