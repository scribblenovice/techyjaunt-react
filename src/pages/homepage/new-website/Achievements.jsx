import { achievementIcons, Circle, FancyUnderline, Star } from "../../../resources/resources";
import icon from "../../../images/icon/icon.png";
const Achievements=()=>{
    return(
        <div className="w-[90%] xl:w-[85%] mx-auto py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
              Our{" "}
              <span className="text-tech-blue">
                <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
                Achievements
              </span>
            </h2>
            <p className="text-[#6D737A] text-base xl:text-2xl my-8">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>

            <div className="grid grid-cols-2 gap-y-5">
              {achievementIcons.map((el) => {
                return (
                  <div className="flex items-center">
                    <img src={el.img} alt="" className="w-[30%] p-3" />
                    <div className="ml-1 md:ml-5">
                      <p className="font-semibold text-lg md:text-2xl xl:text-4xl">
                        {el.num}
                      </p>
                      <p className="text-[#6D737A] text-xs md:text-base xl:text-2xl">
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
              <img src={icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}
export default Achievements;