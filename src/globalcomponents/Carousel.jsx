"use client";

import { Carousel } from "flowbite-react";
import { carouselTheme } from "flowbite-react/lib/cjs/components/Carousel/theme";
import { galleryImg } from "../resources/resources";

function CarouselSlider() {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto bg-stone-100 mb-28">
      <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
        <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
          HIGHLIGHTS OF OUR JOURNEY
        </h2>
      </div>

      <Carousel
        slideInterval="4000"
        pauseOnHover
        className="my-10 h-[45vh] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-black rounded-xl grid"
        indicators={false}
      >
        {galleryImg.map((el) => {
          return (
            <div className="bg-black lg:w-[60%] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] mx-auto">
              <img key={el.id} src={el.src} alt="" className="w-full h-full" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default CarouselSlider;
