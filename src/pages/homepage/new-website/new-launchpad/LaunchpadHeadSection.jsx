import Avatars from "../../../../globalcomponents/Avatars";
import { Circle, FancyUnderline } from "../../../../resources/resources";
import src from "../../../../images/launchpad/launchpadimg.webp";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Fade } from "react-reveal";
const LaunchpadHeadSection = () => {
  return (
    <section className="headerbg">
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-0 relative w-[90%] pt-5">
        <Circle
          color="#0075FD"
          className="absolute hidden xl:block top-36 left-[50%]"
        />
        <div className="">
          <Fade bottom>
            <h1 className="text-left tracking-wide lg:leading-[60px] text-4xl lg:text-5xl xl:text-6xl tts font-bold text-tech-blue">
              Welcome To Techyjaunt
              <span className="text-black relative whitespace-nowrap">
                <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2 " />{" "}
                BootCamp
              </span>{" "}
            </h1>
          </Fade>
          <Fade bottom>
            <p className="text-base md:text-lg md:leading-8 my-10 leading-7 text-gray-700">
              Techyjaunt bootcamp program is taught by tech leaders and created
              as project-based learning to help you develop the skills needed to
              Solve problems
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex justify-start">
              <NavLink
                to="register"
                className="tech-shadow bg-tech-blue text-xl py-3 px-4 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200 mb-10"
              >
                Apply Now
                <i className="ri-arrow-right-line ml-2"></i>
              </NavLink>
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
        <Fade>
          <div className="relative md:flex mx-auto xl:mx-0">
            <img
              src={src}
              loading="lazy"
              alt=""
              className="mx-auto md:mx-0 h-[40%] md:h-[70%] xl:h-[80%]"
            />
            <div className="mt-10 md:mt-0 md:h-[70%] xl:h-[80%] flex flex-col gap-8 md:gap-10 xl:absolute top-0 bg-black left-[60%] -right-[10%] px-4 py-8 sm:px-8 sm:py-8 rounded-2xl md:rounded-none md:rounded-br-2xl md:rounded-tr-2xl ">
              <div className="text-center">
                <h3 className="text-white font-medium text-xl">
                  View Our Courses
                </h3>
                <p className="text-tech-blue">
                  what you will find for each course
                </p>
              </div>
              <div>
                <ul className="text-white grid grid-cols-2 text-[10px] lg:text-xs gap-3">
                  <li className="flex items-center gap-1">
                    <i className="ri-add-circle-line text-white text-base float-left"></i>
                    About the course
                  </li>
                  <li className="flex items-center gap-1">
                    <i className="ri-add-circle-line text-white text-base float-left"></i>
                    Course Outline
                  </li>
                  <li className="flex items-center gap-1">
                    <i className="ri-add-circle-line text-white text-base float-left"></i>
                    Our Tech Mentorship Programme
                  </li>
                  <li className="flex items-center gap-1">
                    <i className="ri-add-circle-line text-white text-base float-left"></i>
                    Testimonials
                  </li>
                </ul>
              </div>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer text-center inline-block bg-[#FBAF1B] text-white hover:text-[#FBAF1B] hover:bg-white transition-all ease-linear duration-200 rounded-md py-3 font-medium text-lg sm:text-2xl"
              >
                View Our Courses
              </Link>
              <div>
                <p className="text-white sm:text-xl">
                  Start your Tech journey TODAY!
                </p>
                <NavLink
                  to="register"
                  className="inline-block text-center bg-white text-black w-full rounded-md py-3 font-medium text-lg sm:text-2xl hover:text-white hover:bg-tech-blue transition-all ease-linear duration-200"
                >
                  Apply Now
                </NavLink>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default LaunchpadHeadSection;
