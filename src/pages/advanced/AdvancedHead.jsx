import { Fade } from "react-reveal";
import { ApplyBtn } from "./AdvancedApply";
import Avatars from "../../globalcomponents/Avatars";
import {
  Circle,
  CurlyLine,
  FancyUnderline,
  Star,
  Star2,
} from "../../resources/resources";
import { AlumniVideo } from "./AdvancedVideo";

const AdvancedHead = () => {
  return (
    <>
      <section className="headerbg">
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-10 lg:gap-x-10 relative py-20 lg:py-32 w-[90%]">
          <Circle
            color="#0075FD"
            className="absolute hidden xl:block top-20 left-[40%]"
          />
          <CurlyLine className="absolute hidden xl:block right-56 top-14" />
          <Star className="absolute hidden xl:block top-28 -left-12" />
          <Star2 className="absolute hidden xl:block top-36 left-[48%]" />
          <div>
            <Fade bottom>
              <h1 className="text-left tracking-wide lg:leading-[60px] text-3xl lg:text-4xl xl:text-5xl tts font-semibold">
                Welcome to
                <span className="text-tech-blue relative whitespace-nowrap tts">
                  <FancyUnderline className="absolute -bottom-0 left-1/2 -translate-x-1/2" />{" "}
                  Techyjaunt
                </span>{" "}
                Advanced Bootcamp!
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-base md:text-lg md:leading-8 mt-10 leading-7 text-gray-700">
                Upskill your tech career, gain accountability partners, and
                receive mentorship from top industry experts worldwide.
              </p>
            </Fade>
            <Fade bottom>
              <p className="text-base md:text-lg md:leading-8 mt-2 leading-7 text-gray-700">
                Start your lifelong tech journey with TechyJaunt.
              </p>
            </Fade>
            <Fade bottom>
              <div className="mt-5 mb-10 flex gap-5">
                <ApplyBtn className="tech-shadow py-3 px-4 inline-block text-white bg-tech-blue text-xl font-medium rounded-lg hover:bg-gray-500 transition-all  ease-linear duration-200" />
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
          <div className="relative lg:p-4">
            <Circle
              color="#6D39ED"
              className="absolute hidden xl:block -bottom-5 left-24"
            />
            <div className=" rounded-md overflow-hidden relative">
              <AlumniVideo />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="bg-center bg-no-repeat bg-cover  bg-blend-multiply mb-10">
        <div className="px-2 mx-auto max-w-screen-xl py-24 lg:py-48">
          <Fade bottom>
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl lg:text-6xl">
              Welcome To{" "}
              <span className="text-tech-blue relative whitespace-nowrap tts">
                <FancyUnderline className="absolute -bottom-0 left-1/2 -translate-x-1/2" />{" "}
                Techyjaunt
              </span>{" "}
              Advanced BootCamp
            </h1>
          </Fade>
          <Fade bottom>
            <p className="text-lg font-normal lg:text-xl">
              Upskill your tech career, gain accountability partners, and
              receive mentorship from top industry experts worldwide.
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-lg font-normal text-black lg:text-xl">
              Start your lifelong tech journey with TechyJaunt.
            </p>
          </Fade>
          <Fade bottom>
            <div className="flex items-center flex-wrap">
              <Avatars />
              <p className="text-xs lg:text-sm font-light text-gray-700">
                Over 5K+ professionals trained.
              </p>
            </div>
          </Fade>
          <div className=" mt-5">
            <ApplyBtn className="tech-shadow py-3 px-4 inline-block text-white bg-tech-blue text-xl font-medium rounded-lg hover:bg-gray-500 transition-all  ease-linear duration-200" />
          </div>
        </div>
      </section> */}
    </>
  );
};
export default AdvancedHead;
