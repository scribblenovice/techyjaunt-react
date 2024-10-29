import { FancyUnderline } from "../../../../resources/resources";
import src from "../../../../images/founder.jpg";
import { Fade } from "react-reveal";
const AboutTechy = () => {
  return (
    <>
      <div className="w-[90%] mx-auto py-10">
        <Fade bottom>
          <h2 className="font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts">
            About{" "}
            <span className="text-tech-blue relative inline-block tts">
              <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
              Techyjaunt
            </span>
            <br />
          </h2>
        </Fade>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-5">
          <div className="grid place-content-center w-full h-full">
            <Fade>
              <img src={src} alt="" className="w-full h-full rounded-xl" />
            </Fade>
          </div>
          <div className="flex items-center">
            <p className="text-base md:text-lg md:leading-8 leading-7 text-gray-700">
              <span>
                <Fade bottom>
                  Techy Jaunt is a community of tech enthusiasts, we onboard,
                  educate and train tech enthusiasts, keeping you up to date on
                  emerging technologies and relevant tech skills.
                </Fade>
              </span>
              <span>
                <Fade bottom>
                  We aim to be the bridge to Journey Africans into tech, one
                  person at a time, onboarding, educating, and training tech
                  enthusiasts on relevant tech skills while solving problems by
                  building products that can make the world a better place and
                  easy place to live in.
                </Fade>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutTechy;
