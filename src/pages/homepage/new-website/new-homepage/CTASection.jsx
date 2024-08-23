import { Circle, CurlyLine } from "../../../../resources/resources";

import src2 from "../../../../images/community/comm1.webp";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
const CTASection = () => {
  return (
    <div className="bg-[#E4FCFF]">
      <div className="w-[90%] xl:w-[85%] mx-auto py-10 md:py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="relative">
          <CurlyLine className="absolute right-0 -top-24 scale-75 hidden lg:block" />
          <Circle className="bg-[#6D39E9] rounded-full absolute scale-[3] right-14 bottom-10 hidden lg:block" />
          <Circle className="bg-[#20B486] rounded-full absolute -bottom-5 hidden lg:block" />
          <Circle className="bg-[#F9475D] rounded-full absolute left-1/2 -top-10 hidden lg:block" />
          <img src={src2} alt="" className="z-10 relative rounded-xl" />
        </div>
        <div className="flex flex-col gap-5">
          <Fade bottom>
            <h2 className="font-semibold text-2xl sm:text-3xl xl:text-6xl tts">
              Join <span className="text-tech-blue tts">Techyjaunt</span>{" "}
              community today
            </h2>
          </Fade>
          <Fade bottom>
            <p className="text-sm md:text-base xl:text-lg">
              Join a community of over 35,000+ tech enthusiasts. As the African
              Tech space continues to grow, we ensure you stay informed through
              our vibrant community
            </p>
          </Fade>
          <Fade bottom>
            <NavLink
              to="/community"
              className="w-fit inline-flex items-center bg-tech-blue font-medium p-2 md:p-3 lg:p-4 rounded-md text-white text-sm lg:text-base hover:bg-gray-500 transition-all ease-linear duration-200"
            >
              Sign up for free <i className="ri-arrow-right-line ml-2"></i>
            </NavLink>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
