import { Fade } from "react-reveal";
import {
  CourseSection,
  FancyUnderline,
  missionTexts,
} from "../../../../resources/resources";

const BestProgram = () => {
  return (
    <div className="w-[90%] mx-auto py-10 lg:py-20">
       <Fade bottom>
      <h2 className="font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts">
        Our{" "}
        <span className="text-tech-blue relative inline-block tts">
          <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
          Mission
        </span>
        <br />
      </h2>
      </Fade>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {missionTexts.map((el, index) => {
          return (
            <div
              id={index}
              className="h-[200px] md:h-full flex flex-col justify-center md:justify-start rounded-lg p-8 gap-2 bg-tech-blue text-white"
            >
              <Fade>
                <h2 className="font-medium text-xl border-b-2 border-b-white">
                  {el.headText}
                </h2>
                {/* {el.icon} */}
                <p className="font-light text-base md:text-lg md:leading-8 leading-7"> {el.parTexr}</p>
              </Fade>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BestProgram;
