import TestimonialSlider from "../../../../globalcomponents/TestimonialSlider";
import { FancyUnderline } from "../../../../resources/resources";

const FeedBack = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-5 lg:py-10 flex flex-col">
      <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl self-center xl:self-start">
        Student{" "}
        <span className="text-tech-blue relative">
          <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
          Feedback
        </span>
      </h2>
      <p className="text-gray-700 text-base xl:text-2xl mt-8 text-center">
       Here is what some past students have to say about us
      </p>
      <TestimonialSlider />
    </div>
  );
};
export default FeedBack;
