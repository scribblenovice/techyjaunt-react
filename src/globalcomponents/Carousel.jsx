"use client";
import { lazy } from "react";
import { Carousel } from "flowbite-react";
import { galleryImg } from "../resources/resources";
import { Fade } from "react-reveal";

function CarouselSlider() {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto bg-stone-100 my-20">
      <div className="px-4 pl-4 mb-10 border-l-4 border-blue-500">
        <h2 className="text-3xl font-black text-gray-700 md:text-5xl">
          HIGHLIGHTS OF OUR JOURNEY
        </h2>
      </div>
      <Fade bottom>
        <Carousel
          slideInterval="4000"
          pauseOnHover
          className="my-10 h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[550px] bg-black rounded-xl"
          indicators={false}
        >
          {galleryImg.map((el) => {
            return (
              <div className="bg-black lg:w-[60%] h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[550px] mx-auto">
                <img
                  loading="lazy"
                  key={el.id}
                  src={el.src}
                  alt=""
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </Carousel>
      </Fade>
    </div>
  );
}
export default CarouselSlider;
