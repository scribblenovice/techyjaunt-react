import { Fade, Zoom } from "react-reveal";
import {
  FancyUnderline,
  PartnerImg1,
  PartnerImg2,
} from "../../../resources/resources";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useRef, useState } from "react";

const Partners = ({ isEvent, title }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // new tesstimonial
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(PartnerImg1.length / 4); // Show 4 items per slide

  // const options = {
  //   loop: true,
  //   margin: 10,
  //   // nav: true,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: false,
  //   items: width < 350 ? 3 : width < 430 ? 4 : 7, // Number of items you want to show at a time
  //   // navText: [`<p className="text-2xl">preev</p>`,`<p className="text-2xl"  >nextii</p>`],
  // };
  return (
    <>
      <div className="carousel-container h-full w-[90%] mx-auto">
        <div
          className="carousel-slides h-full grid grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {PartnerImg1.map((el, index) => (
            <img src={el.src} className="w"/>
          ))}
        </div>
      </div>

    </>
  );
};
export default Partners;
