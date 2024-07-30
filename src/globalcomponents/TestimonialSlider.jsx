import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-scroll";
import { Comma, testimonialInfo } from "../resources/resources";

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % testimonialInfo.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % testimonialInfo.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + testimonialInfo.length) % testimonialInfo.length
    );
  };

  return (
    <div className="relative">
      <div className="carousel-container h-full">
        <div
          className="carousel-slides h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonialInfo.map((el, index) => (
            <div
              key={index}
              className="flex items-center relative carousel-slide py-8"
            >
              <Fade>
                <div className="relative w-full md:w-[80%] xl:w-[70%] mx-auto bg-white shadow-xl p-10 sm:p-14 md:p-16 rounded-lg border border-block">
                  <Comma className="absolute right-2 top-2 scale-75" />
                  <div className="flex items-center gap-x-2">
                    <img
                      loading="lazy"
                      src={el.img}
                      alt=""
                      className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] xl:w-[70px] xl:h-[70px] rounded-full"
                    />
                    <div className="flex flex-col">
                      <h4 className="mb-1 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                        {el.fullName}
                      </h4>
                      <p className="text-xs lg:text-base">{el.course}</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg my-5 leading-5">
                    {el.writeUp}
                  </p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="carousel-control carousel-control-prev p-1 md:p-2 xl:p-3"
      >
        <i class="ri-arrow-left-s-line"></i>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-control carousel-control-next p-1 md:p-2 xl:p-3"
      >
        <i class="ri-arrow-right-s-line"></i>
      </button>

      <div className="carousel-indicators left-1/2">
        <Fade>
          {testimonialInfo.map((el, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator mx-5 w-4 h-4 rouded-full ${
                index === currentSlide ? "bg-tech-blue" : "bg-gray-500"
              }`}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default TestimonialSlider;
