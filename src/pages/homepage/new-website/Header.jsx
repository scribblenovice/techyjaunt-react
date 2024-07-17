import Avatars from "../../../globalcomponents/Avatars";
import Videos from "../videos/Videos";
import { Link, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Circle,
  CurlyLine,
  FancyUnderline,
  Star,
  Star2,
} from "../../../resources/resources";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-10 relative pb-20 lg:py-36 w-[90%] xl:w-[80%]">
        <Circle
          color="#0075FD"
          className="absolute hidden xl:block top-36 left-[25%]"
        />
        <CurlyLine className="absolute hidden xl:block right-56 top-14" />
        <Star className="absolute hidden xl:block top-28 -left-12" />
        <Star2 className="absolute hidden xl:block top-36 left-[48%]" />
        <div>
          <p className="text-tech-blue font-semibold hidden xl:block">
            START YOUR TECH JOURNEY
          </p>
          <h1 className="text-left tracking-wide lg:leading-[60px] text-3xl lg:text-5xl font-semibold text-gray-800 my-10">
            Crafting Top{" "}
            <span className="text-tech-blue relative whitespace-nowrap">
              <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              Tech Talents
            </span>{" "}
            For The World With the best{" "}
            <span className="relative inline-block">
              <FancyUnderline className="absolute left-0 -bottom-2 " />{" "}
              Instructors
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
              Over 5K+ professionals trained.
            </p>
          </div>
        </div>
        <div className="relative grid place-items-center">
          <Circle
            color="#FFC27A"
            className="absolute hidden xl:block -top-16 left-36"
          />
          <Circle
            color="#6D39ED"
            className="absolute hidden xl:block -bottom-5 left-24"
          />
          <Videos />
        </div>
      </div>
    </>
  );
};
export default Header;
