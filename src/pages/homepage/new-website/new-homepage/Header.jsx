import Avatars from "../../../../globalcomponents/Avatars";

import { NavLink, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Circle,
  CurlyLine,
  FancyUnderline,
  Star,
  Star2,
} from "../../../../resources/resources";
import Videos from "../../videos/Videos";
import { Link } from "react-scroll";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-10 relative pb-20 py-10 lg:py-20 w-[90%] xl:w-[80%]">
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
          <p className="mb-10 leading-7 text-xl text-gray-700 font-normal">
            Start your journey into tech with Techyjaunt. We aim to be the
            bridge to journey Africans into tech one peron at a time.
          </p>
          <div className="mb-10 flex gap-5">
            <NavLink
              to="/launchpad"
              className="inline-flex items-center cursor-pointer bg-tech-blue py-3 px-4 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200"
            >
              Get Started
              <i className="ri-arrow-right-line ml-3"></i>
            </NavLink>
            <Link
              to="courses"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer inline-flex items-center bg-tech-blue p-4 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200"
            >
              Our Courses <i className="ri-arrow-right-line ml-3"></i>
            </Link>
          </div>
          <div className="flex items-center flex-wrap">
            <Avatars />
            <p className="text-xl text-gray-700 font-normal leading-7">
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
