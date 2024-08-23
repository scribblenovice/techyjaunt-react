import { Fade, Zoom } from "react-reveal";
import { FancyUnderline, PartnerImg } from "../../../../resources/resources";

const LaunchpadPartners = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-20">
      <Fade bottom>
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts">
          Our <span className="text-tech-blue tts">Partners</span>
          <FancyUnderline className="absolute -bottom-2 left-7" />{" "}
        </h2>
      </Fade>
      <div className={`grid grid-cols-3 md:grid-cols-4 gap-10 test pt-10`}>
        {PartnerImg.map((j) => {
          return (
            <Zoom>
              <div className="w-full h-full grid place-items-center">
                <img
                  loading="lazy"
                  className={`${
                    j.id == 2 || j.id == 3
                      ? "w-[40%]"
                      : j.id == 10
                      ? "w-[100%]"
                      : "w-[70%]"
                  }`}
                  key={j.id}
                  src={j.src}
                  alt=""
                />
              </div>
            </Zoom>
          );
        })}
      </div>
    </div>
  );
};
export default LaunchpadPartners;
