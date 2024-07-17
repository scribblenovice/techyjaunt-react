import TestimonialSlider from "../../../globalcomponents/TestimonialSlider";
import { FancyUnderline } from "../../../resources/resources";

const FeedBack = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-10">
      <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
        Student{" "}
        <span className="text-tech-blue relative">
          <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
          Feedback
        </span>
      </h2>
      <p className="text-[#6D737A] text-base xl:text-2xl mt-8">
        Various versions have evolved over the years, sometimes by accident,
      </p>
      <TestimonialSlider />
    </div>
  );
};
export default FeedBack;
