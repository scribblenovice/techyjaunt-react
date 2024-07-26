import { NavLink } from "react-router-dom";

const CourseCTA = () => {
  return (
    <>
      <div className="my-10 md:my-20">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-tech-blue font-bold text-xl md:text-3xl lg:text-5xl">
            Get Trained. Get Skills. <br /> Get Hired.
          </h2>
          <NavLink to="/launchpad/register" className="inline-block bg-tech-blue hover:bg-gray-500 transition-all ease-linear duration-200 text-white text-xl md:text-3xl ld:text-4xl py-2 md:py-3 px-10 rounded-lg mx-auto mt-10">
            Enrol Now
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default CourseCTA;
