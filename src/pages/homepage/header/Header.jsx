import Avatars from "../../../globalcomponents/Avatars";
import Videos from "../videos/Videos";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FancyUnderline } from "../../../resources/resources";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-10">
      <div>
        <p className="text-tech-blue font-semibold hidden lg:block">START YOUR TECH JOURNEY</p>
        <h1 className="text-left tracking-wide lg:leading-[60px] text-3xl lg:text-5xl font-semibold text-gray-800 my-10">
          Crafting Top{" "}
          <span className="text-tech-blue relative whitespace-nowrap">
            <FancyUnderline className="absolute left-0 -bottom-2" /> Tech
            Talents
          </span>{" "}
          For The World With the best{" "}
          <span className="relative inline-block">
            <FancyUnderline className="absolute left-0 -bottom-2" /> Instructors
          </span>
        </h1>
        <p className="mb-10 leading-7 text-xl text-gray-500 font-normal">
          Our Tech Tranings are Designed to help you learn from the best
          industry leaders
        </p>
        <button className="bg-tech-blue p-4 rounded-lg text-white mb-10">
          Get Started
          <i className="ri-arrow-right-line ml-6"></i>
        </button>
        <div className="flex items-center flex-wrap">
          <Avatars />
          <p className="text-xl text-gray-500 font-normal leading-7">
            Over 1K+ professionals trained.
          </p>
        </div>
      </div>
      <div>
        <Videos />
      </div>
    </div>
  );
};
export default Header;
