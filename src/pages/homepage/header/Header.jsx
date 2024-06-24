import Avatars from "../../../globalcomponents/Avatars";
import Videos from "../videos/Videos";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FancyUnderline } from "../../../resources/resources";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10">
      <div>
        <h1 className="text-left text-[29px] font-semibold text-gray-800 my-10">
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
    // <header className="flex justify-center h-fit py-20 launchpad-jumbo bg-center bg-cover bg-blend-multiply bg-gray-800">
    //   <div className="mt-10 w-[90%] sm:w-[80%] mx-auto grid grid-cols-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 lg:gap-x-10 place-items-center">
    //     <div className="h-full md:h-[70%] flex flex-col justify-around md:justify-evenly">
    //       <Fade bottom>
    //         <h1 className="font-black text-3xl md:text-5xl tracking-widest leading-[70px] mb-5 lg:mb-0">
    //           Guiding Africans Into Tech One Person at a Time
    //         </h1>
    //       </Fade>
    //       <Fade bottom>
    //         <p className="mt-5 font-medium text-white text-base md:text-lg leading-8 glow min-h-[100px] md:min-h-fit">
    //           Start a career in{" "}
    //           <span className="inline-block text-center">
    //             <TypingAnimation
    //               sequenceArray={[
    //                 "DATA ANALYSIS",
    //                 2000,
    //                 "UI/UX DESIGN",
    //                 2000,
    //                 "PRODUCT MANAGEMENT",
    //                 2000,
    //                 "FRONTEND DEVELOPMENT",
    //                 2000,
    //                 "BACKEND DEVELOPMENT",
    //                 2000,
    //                 "CYBER SECURITY",
    //                 2000,
    //               ]}
    //               repeat={Infinity}
    //             />{" "}
    //           </span>{" "}
    //           + Six(6) month mentorship from the best industry leaders from
    //           around the world
    //         </p>
    //         <button
    //           onClick={() => {
    //             navigate("/launchpad");
    //           }}
    //           className="py-3 my-5 px-10 bg-blue-500 rounded-md font-medium text-white hover:scale-105 transition-all duration-200 ease-in text-base lg:text-xl"
    //         >
    //           APPLY HERE FOR FREE
    //         </button>
    //         <div className="flex items-center flex-wrap">
    //           <Avatars />
    //           <p className="text-white text-sm sm:text-base font-medium">
    //             Over 1K+ professionals onboarded and trained
    //           </p>
    //         </div>
    //       </Fade>
    //     </div>
    //     <Fade bottom>
    //       <div className="w-full sm:w-[80%] lg:w-[40vw] py-10">
    //         {/* videos */}
    //         <Videos />
    //       </div>
    //     </Fade>
    //   </div>
    // </header>
  );
};
export default Header;
