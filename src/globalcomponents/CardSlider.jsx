import src from "../images/testimonial/testimonial3.webp";
import { CourseSection, StarRating, courses } from "../resources/resources";
import { useRef, useState, useEffect } from "react";
const cards = [1, 2, 3, 4, 5, 6];
const num = [1, 2, 3, 4];
const CardSlider = () => {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [direction, setDirection] = useState("");
  const [currentRange, setCurrentRange] = useState(0);

  useEffect(() => {
    let scrollInterval;
    if (scrolling) {
      scrollInterval = setInterval(() => {
        if (direction === "left") {
          scrollRef.current.scrollLeft -= 10;
          console.log("down");
        } else if (direction === "right") {
          scrollRef.current.scrollLeft += 10;
        }
      }, 30);
    } else {
      clearInterval(scrollInterval);
    }

    return () => clearInterval(scrollInterval);
  }, [scrolling, direction]);

  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const width = event.target.clientWidth;
    const totalWidth = event.target.scrollWidth;
    const percentageScrolled = (scrollLeft / (totalWidth - width)) * 100;

    // Determine the range
    if (percentageScrolled < 25) {
      setCurrentRange(0);
    } else if (percentageScrolled < 50) {
      setCurrentRange(1);
    } else if (percentageScrolled < 75) {
      setCurrentRange(2);
    } else {
      setCurrentRange(3);
    }
  };

  const startScrolling = (dir) => {
    setDirection(dir);
    setScrolling(true);
  };

  const stopScrolling = () => {
    setScrolling(false);
  };

  return (
    <div className="relative w-full xl:w-[90%] overflow-hidden">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-scroll hidescrollbar"
      >
        <div className="flex pb-20 w-[2000px] pl-5">
          {CourseSection.map((el) => {
            return (
              <div className="mr-5">
                <div className="bg-white shadow-xl rounded-lg w-[310px] h-[310px] flex flex-col p-2 relative">
                  <div className="bg-[#FFFFFF] p-2 absolute top-3 rounded-lg">
                    {el.name}
                  </div>
                  <img
                    loading="lazy"
                    className="w-full h-[70%] rounded-lg"
                    src={src}
                  />
                  <div className="my-2">
                    <StarRating />
                  </div>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex space-x-2 justify-center">
        {num.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentRange === index ? "bg-tech-blue" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <div className="text-5xl absolute right-0 bottom-0 z-50 hidden xl:block">
        <button
          onMouseDown={() => {
            startScrolling("left");
          }}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          className="hover:text-white text-black bg-white hover:bg-tech-blue transition-all ease-linear duration-200 rounded-sm mr-2"
        >
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <button
          onMouseDown={() => startScrolling("right")}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          className="hover:text-white text-black bg-white hover:bg-tech-blue transition-all ease-linear duration-200 rounded-sm"
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
