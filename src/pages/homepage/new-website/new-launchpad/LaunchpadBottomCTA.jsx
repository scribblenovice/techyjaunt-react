import { NavLink } from "react-router-dom";

const LaunchpadBottomCTA = () => {
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-center launchcta py-5 bg-blend-multiply bg-gray-500">
        <div className="p-20 flex justify-center">
          <NavLink to="register" className="inline-block text-white bg-tech-blue py-3 px-4 text-xl rounded-lg hover:bg-gray-500 transition-all  ease-linear duration-200">Apply Now</NavLink>
        </div>
      </div>
    </>
  );
};
export default LaunchpadBottomCTA;
