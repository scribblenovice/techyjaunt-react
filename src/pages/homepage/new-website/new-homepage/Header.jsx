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
import { Link } from "react-scroll";
import VideosDisplay from "../../videos/VideosDisplay";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="headerbg">
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-10 relative pb-20 w-[90%]">
        <Circle
          color="#0075FD"
          className="absolute hidden xl:block top-20 left-[40%]"
        />
        <CurlyLine className="absolute hidden xl:block right-56 top-14" />
        <Star className="absolute hidden xl:block top-28 -left-12" />
        <Star2 className="absolute hidden xl:block top-36 left-[48%]" />
        <div>
          <Fade bottom>
            <p className="text-tech-blue font-semibold hidden xl:block mb-5">
              START YOUR TECH JOURNEY
            </p>
          </Fade>
          <Fade bottom>
            <h1 className="text-left tracking-wide lg:leading-[60px] text-4xl lg:text-5xl xl:text-6xl tts font-semibold">
              Crafting Top{" "}
              <span className="text-tech-blue relative whitespace-nowrap tts">
                <FancyUnderline className="absolute -bottom-0 left-1/2 -translate-x-1/2" />{" "}
                Tech Talents
              </span>{" "}
              For The World
              {/* <span className="relative inline-block">
              <FancyUnderline className="absolute left-0 -bottom-2 " />{" "}
              Instructors
            </span> */}
            </h1>
          </Fade>
          <Fade bottom>
            <p className="text-base md:text-lg md:leading-8 my-10 leading-7 text-gray-700">
              Start your journey into tech with Techyjaunt. We aim to be the
              bridge to journey Africans into tech one peron at a time.
            </p>
          </Fade>
          <Fade bottom>
            <div className="mb-10 flex gap-5">
              <NavLink
                to="/launchpad"
                className="whitespace-nowrap inline-flex items-center cursor-pointer bg-tech-blue p-2 md:p-3 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200 tech-shadow"
              >
                Get Started
                <i className="ri-arrow-right-line ml-2"></i>
              </NavLink>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="whitespace-nowrap cursor-pointer inline-flex items-center bg-tech-blue p-4 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200 tech-shadow"
              >
                Our Courses <i className="ri-arrow-right-line ml-3"></i>
              </Link>
            </div>
          </Fade>
          <Fade bottom>
            <div className="flex items-center flex-wrap">
              <Avatars />
              <p className="text-xs lg:text-sm font-light text-gray-700">
                Over 5K+ professionals trained.
              </p>
            </div>
          </Fade>
        </div>
        <div className="relative grid place-items-center">
          {/* <Circle
            color="#FFC27A"
            className="absolute hidden xl:block -top-16 left-36"
          /> */}
          <Circle
            color="#6D39ED"
            className="absolute hidden xl:block -bottom-5 left-24"
          />
          <VideosDisplay />
        </div>
      </div>
    </section>
  );
};
export default Header;
