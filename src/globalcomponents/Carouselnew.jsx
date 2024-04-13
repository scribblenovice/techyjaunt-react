import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-scroll";
import src1 from "../images/community/comm1.webp"
import src2 from "../images/community/comm2.webp"
import src3 from "../images/community/comm3.webp"

const slides = [
  {
    id: 0,
    class: "bg1",
    source: src1
  },
  {
    id: 1,
    class: "bg2",
    source: src2
  },
  {
    id: 2,
    class: "bg3",
    source: src3
  }
];

const Carouselnew = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[350px] sm:h-[400px] md:h-[500px]">
      <div className="carousel-container h-full">
        <div
          className="carousel-slides h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex items-center relative carousel-slide rounded-lg"
            >
              <img src={slide.source} alt="" className={`${
                  currentSlide === slide.id ? "zoom" : ""
                } h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 bg-blue-gray-700 bg-center bg-cover bg-no-repeat rounded-lg`} />
              {/* <div
                className={`${
                  currentSlide === slide.id ? "zoom" : ""
                } h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 bg-blue-gray-700 bg-center bg-cover bg-no-repeat rounded-lg ${
                  slide.class
                }`}
              ></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carouselnew;
