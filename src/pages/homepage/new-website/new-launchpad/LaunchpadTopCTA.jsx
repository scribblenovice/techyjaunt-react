import { NavLink } from "react-router-dom";
import src from "../../../../images/launchpad/frame.png";
import { FancyUnderline } from "../../../../resources/resources";
const LaunchpadTopCTA = () => {
  return (
    <div className="flex bg-[#E4FCFF] justify-between items-center mb-10">
      <div className="py-5">
        <div className="w-[70%] ml-8 lg:ml-28">
          <h2 className="font-semibold text-lg md:text-3xl lg:text-5xl leading-5">
            Experience LifeLong Learning with{" "}
            <span className="text-tech-blue relative inline-block">Techyjaunt <FancyUnderline className="absolute w-24 md:w-full"/></span> 
          </h2>
          <NavLink to="register" className="inline-block rounded-md mt-5 py-3 px-4 text-base md:text-lg bg-tech-blue text-white hover:bg-gray-500 transition-all ease-linear duration-200">
            Apply now
          </NavLink>
        </div>
      </div>
      <img src={src} alt="" className="w-[20%] self-stretch" />
    </div>
  );
};
export default LaunchpadTopCTA;
