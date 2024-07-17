import { Circle, CurlyLine } from "../../../resources/resources";
import src1 from "../../../images/rectangle.png";
import src2 from "../../../images/rectangle1.png";
const CTASection = () => {
  return (
    <div className="bg-[#E4FCFF]">
      <div className="w-[90%] xl:w-[85%] mx-auto py-10 md:py-16 lg:py-28 grid grid-cols-2 gap-x-5 md:gap-x-10">
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
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl my-3 lg:my-5">
            Start Learning for free
          </p>
          <button className="bg-tech-blue font-medium p-2 md:p-3 lg:p-4 rounded-xl text-white text-sm lg:text-base">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};
export default CTASection;
