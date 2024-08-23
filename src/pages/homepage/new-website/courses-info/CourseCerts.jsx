import { Fade } from "react-reveal";
import src from "../../../../images/courses/certs.png";
const CourseCerts = ({ data }) => {
  return (
    <>
      <div className="bg-[#E4FCFF]">
        <div className="w-[95%] md:w-[90%] grid grid-cols-1 lg:grid-cols-2 py-20 mx-auto gap-5 lg:gap-10">
          <div className="relative">
            <p className="absolute left-1/2 transform -translate-x-1/2 top-[30%] text-tech-blue font-semibold text-base md:text-2xl whitespace-nowrap">
              {data.courseName.toUpperCase()}
            </p>
            <img loading="lazy" src={src} alt="" className="w-full h-full" />
          </div>
          <div>
            <Fade bottom>
              <h2 className="text-tech-blue font-bold text-xl md:text-3xl lg:text-5xl text-center md:text-left">
                Taught by Experienced Industry Experts
              </h2>
            </Fade>
            <Fade>
              <p className="text-base md:text-lg text-gray-700 mt-5">
                Techjaunt instructors are experienced practitioners who work at
                the world most innovative companies. They are expert in their
                field, and enter the classroom with years of experience making
                sure your learning the most up-to-date and practical skills
                companies around the world need.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseCerts;
