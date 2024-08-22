import {
  achievementIcons,
  Circle,
  FancyUnderline,
  Star,
} from "../../../../resources/resources";
import icon from "../../../../images/icon/icon.png";
import { Fade } from "react-reveal";
const Achievements = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col self-center">
          <div className="grid grid-cols-2 gap-y-5">
            <Fade bottom>
              <h2 className="col-span-2 mb-5 relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-start whitespace-nowrap tts">
                Our{" "}
                <span className="text-tech-blue tts">
                  <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2 scale-75" />{" "}
                  Achievements
                </span>
              </h2>
            </Fade>
            {achievementIcons.map((el) => {
              return (
                <div className="flex items-center">
                  <img src={el.img} alt="" className="w-[30%] h-full p-3" />
                  <div className="ml-1 md:ml-5">
                    <p className="font-semibold text-lg md:text-2xl xl:text-4xl">
                      {el.num}
                    </p>
                    <p className="text-gray-700 text-xs md:text-base xl:text-2xl">
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
            <img src={icon} alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievements;
