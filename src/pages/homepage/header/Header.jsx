import Avatars from "../../../globalcomponents/Avatars";
import Videos from "../videos/Videos";
import { Link, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Circle,
  CourseSection,
  CurlyLine,
  FancyUnderline,
  Star,
  Star2,
} from "../../../resources/resources";
import CardSlider from "../../../globalcomponents/CardSlider";

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

          <h2 className="block xl:hidden font-semibold text-2xl sm:text-3xl text-center mb-5">
            <span className="relative inline-block">
              Most <span className="text-tech-blue">Popular</span>
              <FancyUnderline className="absolute -bottom-2 " />
            </span>
            <br />
            <span className="text-tech-blue">Courses</span>
          </h2>
          <CardSlider />
        </div>
      </div>
      <div className="w-[90%] xl:w-[85%] mx-auto py-10">
        <h2 className=" font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          What{" "}
          <span className="text-tech-blue relative inline-block">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            is the best Learning{" "}
          </span>{" "}
          <br />
          Program for You?
        </h2>
        <p className="my-8 text-2xl lg:text-3xl">
          Most <span className="text-tech-blue">Popular Categories</span>
        </p>
        <div className="some gap-5">
          {CourseSection.map((el, index) => {
            return (
              <div
                id={index}
                className="flex border border-tech-blue rounded-lg py-4 items-center justify-between px-5"
              >
                <div className="flex items-center">
                  {el.icon}
                  <p className="ml-3"> {el.name}</p>
                </div>
                <button>
                  <i className="ri-arrow-right-up-line text-tech-blue text-2xl hover:bg-tech-blue hover:text-white p-2 rounded-lg transition-all ease-linear duration-300"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-[90%] xl:w-[85%] mx-auto py-10">
        <h2 className="font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          Experience Lifelong Learning with <br className="hidden xl:block" />{" "}
          <span className="text-tech-blue relative inline-block">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            Techyjaunt
          </span>
        </h2>
        <div className="text-base xl:text-2xl text-[#6D737A] flex gap-10 my-8">
          <p>
            <span className="relative">
              Boot{" "}
              <span className="absolute w-12 h-1 rounded-lg bg-tech-blue"></span>{" "}
            </span>
            camp
          </p>
          <p>Bootcamp + Mentorship</p>
        </div>
        <div className="some1 gap-8">
          {CourseSection.map((el, index) => {
            return (
              <div className="relative" id={index}>
                <img src={el.img} alt="" className="rounded-lg" />
                <div className={`flex justify-between flex-col absolute text-white p-4 top-[60%] left-0 right-0 -bottom-5 ${el.bg} rounded-bl-lg rounded-br-lg`}>
                  <h3 className="font-semibold text-2xl">
                    I am interested in {el.fullName}
                  </h3>
                  <Link>Visit More <i className="ri-arrow-right-line text-lg ml-5"></i></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Header;
