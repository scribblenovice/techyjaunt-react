// import src from "../images/testimonial/testimonial3.jpg";
// import {
//   Comma,
//   CourseSection,
//   StarRating,
//   courses,
//   testimonialInfo,
// } from "../resources/resources";
// import { useRef, useState, useEffect } from "react";
// const cards = [1, 2, 3, 4, 5, 6];
// const num = [1, 2, 3, 4];
// const TestimonialSlider = () => {
//   const scrollRef = useRef(null);
//   const [scrolling, setScrolling] = useState(false);
//   const [direction, setDirection] = useState("");
//   const [currentRange, setCurrentRange] = useState(0);

//   useEffect(() => {
//     let scrollInterval;
//     if (scrolling) {
//       scrollInterval = setInterval(() => {
//         if (direction === "left") {
//           scrollRef.current.scrollLeft -= 10;
//           console.log("down");
//         } else if (direction === "right") {
//           scrollRef.current.scrollLeft += 10;
//         }
//       }, 30);
//     } else {
//       clearInterval(scrollInterval);
//     }

//     return () => clearInterval(scrollInterval);
//   }, [scrolling, direction]);

//   const handleScroll = (event) => {
//     const scrollLeft = event.target.scrollLeft;
//     const width = event.target.clientWidth;
//     const totalWidth = event.target.scrollWidth;
//     const percentageScrolled = (scrollLeft / (totalWidth - width)) * 100;

//     // Determine the range
//     if (percentageScrolled < 25) {
//       setCurrentRange(0);
//     } else if (percentageScrolled < 50) {
//       setCurrentRange(1);
//     } else if (percentageScrolled < 75) {
//       setCurrentRange(2);
//     } else {
//       setCurrentRange(3);
//     }
//   };

//   const startScrolling = (dir) => {
//     setDirection(dir);
//     setScrolling(true);
//   };

//   const stopScrolling = () => {
//     setScrolling(false);
//   };

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         ref={scrollRef}
//         onScroll={handleScroll}
//         className="overflow-scroll hidescrollbar"
//       >
//         <div className="flex pb-20 w-fit pl-5">
//           {testimonialInfo.map((el) => {
//             return (
//               <div className="relative w-screen md:w-[1000px] bg-white shadow-lg">
//                 <Comma className="absolute right-2 top-2" />
//                 <div className="flex ">
//                   <img src={el.img} alt="" className="w-[70px] h-[70px] rounded-full" />
//                   <div className="flex flex-col justify-evenly">
//                     <h4 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">{el.fullName}</h4>
//                     <p className="text-xs lg:text-base">{el.course}</p>
//                   </div>
//                 </div>
//                 <p>{el.writeUp}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="flex space-x-2 justify-center">
//         {num.map((color, index) => (
//           <div
//             key={index}
//             className={`w-4 h-4 rounded-full ${
//               currentRange === index ? "bg-tech-blue" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//       <div className="text-5xl absolute right-0 bottom-0 z-50 hidden xl:block">
//         <button
//           onMouseDown={() => {
//             startScrolling("left");
//           }}
//           onMouseUp={stopScrolling}
//           onMouseLeave={stopScrolling}
//           className="hover:text-white text-black bg-white hover:bg-tech-blue transition-all ease-linear duration-200 rounded-sm mr-2"
//         >
//           <i class="ri-arrow-left-s-line"></i>
//         </button>
//         <button
//           onMouseDown={() => startScrolling("right")}
//           onMouseUp={stopScrolling}
//           onMouseLeave={stopScrolling}
//           className="hover:text-white text-black bg-white hover:bg-tech-blue transition-all ease-linear duration-200 rounded-sm"
//         >
//           <i class="ri-arrow-right-s-line"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;

import React, { useState, useEffect } from "react";
import { Fade, Zoom } from "react-reveal";
import { Link } from "react-scroll";
import { Comma, testimonialInfo } from "../resources/resources";

// const slides = [
//   {
//     id: 0,
//     class: "solarbg",
//     header: "Solar energy solutions",
//     parTxt: "WE PROVIDE INNOVATIVE OFF-GRID SOLAR SOLUTIONS FOR OUR CUSTOMERS",
//   },
//   {
//     id: 1,
//     class: "accessbg",
//     header: "Access control and surveillance solutions",
//     parTxt:
//       "EMPOWERING SECURITY THROUGH SEAMLESS ACCESS AND VIGILANT SURVEILLANCE SOLUTIONS",
//   },
//   {
//     id: 2,
//     class: "ictbg",
//     header: "Information and Communication Technology",
//     parTxt:
//       "EMPOWERING CONNECTIVITY AND EFFICIENCY THROUGH CUTTING-EDGE ICT SOLUTIONS",
//   },
//   {
//     id: 3,
//     class: "techbg",
//     header: "Technology training and consultancy",
//     parTxt:
//       "  DRIVING BUSINESS THROUGH STRATEGIC TECHNOLOGY INSIGHTS AND INNOVATIVE SOLUTIONS",
//   },
// ];

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
              className="flex items-center relative carousel-slide"
            >
              {/* <div
                className={`h-full w-full absolute top-0 bottom-0 left-0 right-0 z-0 bg-blue-gray-700`}
              ></div> */}
              <Fade>
                <div className="relative w-full lg:w-[80%] mx-auto bg-white shadow-lg">
                  <Comma className="absolute right-2 top-2" />
                  <div className="flex ">
                    <img
                      src={el.img}
                      alt=""
                      className="w-[70px] h-[70px] rounded-full"
                    />
                    <div className="flex flex-col justify-evenly">
                      <h4 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                        {el.fullName}
                      </h4>
                      <p className="text-xs lg:text-base">{el.course}</p>
                    </div>
                  </div>
                  <p>{el.writeUp}</p>
                </div>
                {/* <div className="mx-auto text-white z-10 relative text-center w-[90%] flex flex-col justify-evenly">
                  <p className="anta text-lg text-center md:text-xl">
                    {el.fullName}
                  </p>
                  <h1 className="mt-5 md:mt-7 font-black text-2xl md:text-5xl leading-10 lg:leading-[70px] mb-5 lg:mb-0">
                    {el.writeUp}
                  </h1>
                </div> */}
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="carousel-control carousel-control-prev"
      >
        <i class="ri-arrow-left-s-line"></i>
      </button>
      <button
        onClick={nextSlide}
        className="carousel-control carousel-control-next"
      >
      
      <i class="ri-arrow-right-s-line"></i>
      </button>

      <div className="carousel-indicators left-1/2">
        <Fade>
          {testimonialInfo.map((el, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator mx-5 w-6 h-6 md:w-10 md:h-10 rouded-full ${
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
