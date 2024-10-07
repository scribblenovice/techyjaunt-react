import src from "../../images/property.webp";
import Fade from "react-reveal/Fade";
import { Circle, CurlyLine, Star, Star2 } from "../../resources/resources";
import { useState } from "react";
import Survey from "./Survey";
const SurveyLandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Circle
        color="#0075FD"
        className="absolute hidden xl:block top-20 left-[40%]"
      />
      <CurlyLine className="absolute hidden xl:block right-56 top-14" />
      <Star className="absolute hidden xl:block bottom-28 -left-0" />
      <Star2 className="absolute hidden xl:block bottom-36 left-[48%]" />
      <section className="headerbg grid place-content-center py-14">
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-2 gap-y-5 lg:gap-x-10 relative w-[90%]">
          <div className="grid place-content-center">
            <Fade bottom>
              <h1 className="text-left mb-5 tracking-wide lg:leading-[60px] text-4xl lg:text-5xl xl:text-6xl tts font-semibold">
                Connecting you directly with tenants or clients!
              </h1>
            </Fade>
            <Fade bottom>
              <p className="text-base md:text-lg md:leading-8 leading-7 text-gray-700 mb-5">
                Do you own a property? We help connect landlords like you
                directly with tenants!
              </p>
            </Fade>
            <Fade bottom>
              <p className="text-base md:text-lg md:leading-8 leading-7 text-gray-700">
                Agents are ruining the experience for everyone. By filling out
                this form, you'll get first-hand access to tenants for free when
                we launch.
              </p>
            </Fade>
            <button
              onClick={() => setOpen(true)}
              className=" mt-5 w-fit whitespace-nowrap inline-flex items-center cursor-pointer bg-tech-blue p-2 md:p-3 rounded-lg text-white hover:bg-gray-500 transition-all ease-linear duration-200 tech-shadow"
            >
              Fill our survey
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
          <div className="relative grid place-items-center">
            <img
              src={src}
              alt=""
              className=" h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px]  w-full rounded-md"
            />
          </div>
        </div>
      </section>
      {open && <Survey openModal={open} closeModal={() => setOpen(false)} />}
    </>
  );
};
export default SurveyLandingPage;
