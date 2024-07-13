import Avatars from "../../../globalcomponents/Avatars";
import Videos from "../videos/Videos";
import { Link, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {
  Circle,
  CourseSection,
  CurlyLine,
  FancyUnderline,
  PartnerImg,
  Star,
  Star2,
  achievementIcons,
  testimonialInfo,
} from "../../../resources/resources";
import CardSlider from "../../../globalcomponents/CardSlider";
import icon from "../../../images/icon/icon.png";
import TestimonialSlider from "../../../globalcomponents/TestimonialSlider";
import src1 from "../../../images/rectangle.png";
import src2 from "../../../images/rectangle1.png";

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
      <div className="w-[90%] xl:w-[85%] mx-auto py-20">
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
        <div className="text-sm sm:text-base xl:text-2xl text-[#6D737A] flex gap-10 my-8">
          <p>
            <span className="relative border-b-4 border-tech-blue">Boot</span>
            camp
          </p>
          <p>Bootcamp + Mentorship</p>
        </div>
        <div className="some1 gap-x-8 gap-y-12">
          {CourseSection.map((el, index) => {
            return (
              <div className="relative" id={index}>
                <img src={el.img} alt="" className="rounded-lg w-full" />
                <div
                  className={`flex justify-between flex-col absolute text-white p-4 top-[60%] left-0 right-0 -bottom-5 ${el.bg} rounded-bl-lg rounded-br-lg`}
                >
                  <h3 className="font-semibold text-2xl">
                    I am interested in {el.fullName}
                  </h3>
                  <Link className="my-1">
                    Visit More{" "}
                    <i className="ri-arrow-right-line text-lg ml-5"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] xl:w-[85%] mx-auto py-20">
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          Our Partners
          <FancyUnderline className="absolute -bottom-2 left-7" />{" "}
        </h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 test pt-10`}
        >
          {PartnerImg.map((j) => {
            return (
              // <Zoom>
              <div className="w-full h-full grid place-items-center">
                <img
                  loading="lazy"
                  className={`${
                    j.id == 2 || j.id == 3
                      ? "w-[40%]"
                      : j.id == 10
                      ? "w-[100%]"
                      : "w-[70%]"
                  }`}
                  key={j.id}
                  src={j.src}
                  alt=""
                />
              </div>
              // </Zoom>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] xl:w-[85%] mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
              Our{" "}
              <span className="text-tech-blue">
                <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
                Achievements
              </span>
            </h2>
            <p className="text-[#6D737A] text-base xl:text-2xl my-8">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>

            <div className="grid grid-cols-2 gap-y-5">
              {achievementIcons.map((el) => {
                return (
                  <div className="flex items-center">
                    <img src={el.img} alt="" className="w-[30%] p-3" />
                    <div className="ml-1 md:ml-5">
                      <p className="font-semibold text-lg md:text-2xl xl:text-4xl">
                        {el.num}
                      </p>
                      <p className="text-[#6D737A] text-xs md:text-base xl:text-2xl">
                        {el.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-fit relative bottom-10">
              <Circle className="absolute bg-[#1A906B] rounded-full right-20 top-10" />
              <Circle className="absolute bg-[#ED4459] rounded-full right-5 top-1/4 scale-150" />
              <Star className="absolute bottom-24 -left-3 scale-[1.5] md:scale-[2] -rotate-12" />
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] xl:w-[85%] mx-auto py-10">
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          Student{" "}
          <span className="text-tech-blue relative">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            Feedback
          </span>
        </h2>
        <p className="text-[#6D737A] text-base xl:text-2xl mt-8">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <TestimonialSlider />
      </div>
      <div className="bg-no-repeat bg-cover bg-center bg-tech-bg my-10 bg-blend-multiply bg-tech-blue">
        <div className="w-full lg:w-[80%] xl:w-[70%] mx-auto py-16 sm:py-24 lg:py-32 px-1 lg:px-0">
          <h2 className="text-white text-center text-3xl md:text-4xl xl:text-5xl font-medium">
            Join our growing community of{" "}
            <span className="text-[#FBAF1B]">30,000</span> community members ,
            Professionals trained{" "}
          </h2>
        </div>
      </div>
      <div className="bg-[#E4FCFF]">
        <div className="w-[90%] xl:w-[85%] mx-auto py-5 lg:py-20 grid grid-cols-2 gap-x-5 md:gap-x-10">
          <div className="relative">
            <CurlyLine className="absolute right-0 -top-24 scale-75 hidden lg:block" />
            <Circle className="bg-[#6D39E9] rounded-full absolute scale-[3] right-14 bottom-10 hidden lg:block" />
            <Circle className="bg-[#20B486] rounded-full absolute -bottom-5 hidden lg:block" />
            <Circle className="bg-[#F9475D] rounded-full absolute left-1/2 -top-10 hidden lg:block" />
            <img
              src={src1}
              alt=""
              className="absolute left-5 bottom-5 z-0 hidden lg:block"
            />
            <img src={src2} alt="" className="z-10 relative" />
          </div>
          <div>
            <h2 className="font-semibold text-sm sm:text-base md:text-2xl lg:text-4xl">
              Join <span className="text-tech-blue">Techyjaunt</span> learning
              platform today
            </h2>
            <p className="text-xs sm:text-sm md:text-lg lg:text-2xl my-5">
              Start Learning for free
            </p>
            <button className="bg-tech-blue font-medium p-2 md:p-3 lg:p-4 rounded-xl text-white text-sm lg:text-base">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
