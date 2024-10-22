import { Links } from "../resources/resources";
import LogoSrc from "../images/techy_jaunt_logo.svg";
import { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { ApplyBtn } from "../pages/advanced/AdvancedApply";

export const HomeNavLink = ({ navclass, isLaunchPad }) => {
  const isTablet = window.innerWidth >= 768; // Example of tablet range
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const [activeHomeLink, setActiveHomeLink] = useState("home");
  return (
    <nav
      className={` sticky top-0 z-[5000] ${
        scrollNumber > 0 ? "nav-change" : ""
      }`}
    >
      <div className="h-fit w-[90%]  mx-auto flex justify-between items-center relative">
        <img src={LogoSrc} className="w-20 h-20" alt="" />
        <div
          className={`transition-all ease-linear duration-300 h-[3000px] xl:h-fit ${
            openNav ? "w-[250px] xl:w-fit" : "w-0 xl:w-fit"
          } overflow-hidden absolute top-20 bg-black xl:bg-transparent xl:w-fit -right-[5%] xl:static rounded-bl-lg`}
        >
          <ul
            className={`text-lg text-center py-5 xl:py-0 flex flex-col gap-y-5 xl:flex-row xl:gap-x-10 whitespace-nowrap`}
          >
            <li className="cursor-pointer">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-200}
                duration={800}
                onClick={() => setActiveHomeLink("home")}
                className={`${
                  activeHomeLink === "home"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setActiveHomeLink("about")}
                className={`${
                  activeHomeLink === "about"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                Who we are
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="courses"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setActiveHomeLink("courses")}
                className={`${
                  activeHomeLink === "courses"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                Courses
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="feature"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setActiveHomeLink("feature")}
                className={`${
                  activeHomeLink === "feature"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                News Feature
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => setActiveHomeLink("contact")}
                className={`${
                  activeHomeLink === "contact"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                Contact us
              </Link>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/launchpad"
                onClick={() => setActiveHomeLink("launchpad")}
                className={`${
                  activeHomeLink === "launchpad"
                    ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                    : "text-white xl:text-gray-800"
                } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
              >
                Launchpad
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="xl:hidden"
          onClick={() => {
            setOpenNav((prev) => {
              return !prev;
            });
          }}
        >
          <i
            className={`${openNav ? "ri-close-line" : "ri-menu-line"} text-3xl`}
          ></i>
        </button>
      </div>
    </nav>
  );
};

export const LaunchpadNavLinks = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const [activeLanchpadLink, setActiveLaunchpadLink] = useState("home");
  return (
    <>
      <nav
        className={` sticky top-0 z-[5000] ${
          scrollNumber > 0 ? "nav-change" : ""
        }`}
      >
        <div className="h-fit w-[90%]  mx-auto flex justify-between items-center relative">
          <img src={LogoSrc} className="w-20 h-20" alt="" />
          <div
            className={`transition-all ease-linear duration-300 h-[3000px] xl:h-fit ${
              openNav ? "w-[250px] xl:w-fit" : "w-0 xl:w-fit"
            } overflow-hidden absolute top-20 bg-black xl:bg-transparent xl:w-fit -right-[5%] xl:static rounded-bl-lg`}
          >
            <ul
              className={`text-lg text-center py-5 xl:py-0 flex flex-col gap-y-5 xl:flex-row xl:gap-x-10 whitespace-nowrap`}
            >
              <li className="cursor-pointer">
                <NavLink
                  to="/"
                  onClick={() => setActiveLaunchpadLink("home")}
                  className={`${
                    activeLanchpadLink === "home"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Home
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("courses")}
                  className={`${
                    activeLanchpadLink === "courses"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Courses
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("partners")}
                  className={`${
                    activeLanchpadLink === "partners"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Partners
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("contact")}
                  className={`${
                    activeLanchpadLink === "contact"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Contact us
                </Link>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="register"
                  className={`text-white xl:text-gray-800 w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Apply Now
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="xl:hidden"
            onClick={() => {
              setOpenNav((prev) => {
                return !prev;
              });
            }}
          >
            <i
              className={`${
                openNav ? "ri-close-line" : "ri-menu-line"
              } text-3xl`}
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export const CoursesNavLinks = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const [activeLanchpadLink, setActiveLaunchpadLink] = useState("home");
  return (
    <>
      <nav
        className={` sticky top-0 z-[5000] ${
          scrollNumber > 0 ? "nav-change" : ""
        }`}
      >
        <div className="h-fit w-[90%]  mx-auto flex justify-between items-center relative">
          <img src={LogoSrc} className="w-20 h-20" alt="" />
          <div
            className={`transition-all ease-linear duration-300 h-[3000px] xl:h-fit ${
              openNav ? "w-[250px] xl:w-fit" : "w-0 xl:w-fit"
            } overflow-hidden absolute top-20 bg-black xl:bg-transparent xl:w-fit -right-[5%] xl:static rounded-bl-lg`}
          >
            <ul
              className={`text-lg text-center py-5 xl:py-0 flex flex-col gap-y-5 xl:flex-row xl:gap-x-10 whitespace-nowrap`}
            >
              <li className="cursor-pointer">
                <NavLink
                  to="/launchpad"
                  onClick={() => setActiveLaunchpadLink("home")}
                  className={`${
                    activeLanchpadLink === "home"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Launchpad
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="brochure"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("brochure")}
                  className={`${
                    activeLanchpadLink === "brochure"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Course Brochure
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="community"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("community")}
                  className={`${
                    activeLanchpadLink === "community"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Community
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("contact")}
                  className={`${
                    activeLanchpadLink === "contact"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Contact us
                </Link>
              </li>
              <li className="cursor-pointer">
                <NavLink
                  to="/launchpad/register"
                  className={`text-white xl:text-gray-800 w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Apply Now
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="xl:hidden"
            onClick={() => {
              setOpenNav((prev) => {
                return !prev;
              });
            }}
          >
            <i
              className={`${
                openNav ? "ri-close-line" : "ri-menu-line"
              } text-3xl`}
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export const AdvancedNavLinks = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(window.scrollY);
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const [activeLanchpadLink, setActiveLaunchpadLink] = useState("home");
  return (
    <>
      <nav
        className={` sticky top-0 z-[5000] ${
          scrollNumber > 0 ? "nav-change" : ""
        }`}
      >
        <div className="h-fit w-[90%]  mx-auto flex justify-between items-center relative">
          <img src={LogoSrc} className="w-20 h-20 z-[5000]" alt=""/>
          <div
            className={`transition-all ease-linear duration-300 h-[3000px] xl:h-fit ${
              openNav ? "w-[250px] xl:w-fit" : "w-0 xl:w-fit"
            } overflow-hidden absolute top-20 bg-black xl:bg-transparent xl:w-fit -right-[5%] xl:static rounded-bl-lg`}
          >
            <ul
              className={`text-lg text-center py-5 xl:py-0 flex flex-col gap-y-5 xl:flex-row xl:gap-x-10 whitespace-nowrap`}
            >
              <li className="cursor-pointer">
                <NavLink
                  to="/"
                  onClick={() => setActiveLaunchpadLink("home")}
                  className={`${
                    activeLanchpadLink === "home"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Back to Home
                </NavLink>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="benefits"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("benefits")}
                  className={`${
                    activeLanchpadLink === "benefits"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Benefits
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="partners"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("partners")}
                  className={`${
                    activeLanchpadLink === "partners"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  Partners
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onClick={() => setActiveLaunchpadLink("feature")}
                  className={`${
                    activeLanchpadLink === "feature"
                      ? "text-white xl:text-tech-blue border-b-2 border-b-tech-blue"
                      : "text-white xl:text-gray-800"
                  } w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                >
                  News Feature
                </Link>
              </li>
              <li className="cursor-pointer">
                <ApplyBtn
                  func={() => setOpenNav(false)}
                  className={`text-white xl:text-gray-800 w-full lg:w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-tech-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:scale-100 transition-all duration-200 ease-in`}
                />
              </li>
            </ul>
          </div>
          <button
            className="xl:hidden z-[5000]"
            onClick={() => {
              setOpenNav((prev) => {
                return !prev;
              });
            }}
          >
            <i
              className={`${
                openNav ? "ri-close-line" : "ri-menu-line"
              } text-3xl`}
            ></i>
          </button>
        </div>
      </nav>
    </>
  );
};
