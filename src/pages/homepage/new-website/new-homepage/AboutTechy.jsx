import { FancyUnderline } from "../../../../resources/resources";

import src from "../../../../images/founder.jpg";
const AboutTechy = () => {
  return (
    <>
      <div className="w-[90%] xl:w-[85%] mx-auto py-10">
        <h2 className=" font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          About{" "}
          <span className="text-tech-blue relative inline-block">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            Techyjaunt
          </span>
          <br />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-2">
          <div className="grid place-content-center">
            <img src={src} alt="" loading="lazy" className="h-[100%] rounded-xl" />
          </div>
          <div className="flex items-center">
            <p className="mt-8 px-0 md:px-5 leading-7 text-base md:text-xl text-gray-700 font-normal">
              Techy Jaunt is a community of tech enthusiasts, we onboard,
              educate and train tech enthusiasts, keeping you up to date on
              emerging technologies and relevant tech skills. We aim to be the
              bridge to Journey Africans into tech, one person at a time,
              onboarding, educating, and training tech enthusiasts on relevant
              tech skills while solving problems by building products that can
              make the world a better place and easy place to live in.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutTechy;
