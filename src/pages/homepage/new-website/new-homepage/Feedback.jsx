import { Fade } from "react-reveal";
import TestimonialSlider from "../../../../globalcomponents/TestimonialSlider";
import { FancyUnderline } from "../../../../resources/resources";

const FeedBack = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-5 lg:py-10 flex flex-col">
      <Fade bottom>
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-start tts">
          Student{" "}
          <span className="text-tech-blue relative tts">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            Feedback
          </span>
        </h2>
      </Fade>
      <Fade bottom>
        <p className="text-base md:text-lg md:leading-8 my-10 leading-7 text-gray-700 mt-8 text-center">
          Here is what some past students have to say about us
        </p>
      </Fade>
      <Fade>
        <TestimonialSlider />
      </Fade>
    </div>
  );
};
export default FeedBack;
