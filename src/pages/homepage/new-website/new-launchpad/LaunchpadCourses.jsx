import { Link } from "react-router-dom";
import { CourseSection } from "../../../../resources/resources";
import { Element } from "react-scroll";
import { useState } from "react";

const LaunchpadCourses = () => {
  const [hover, setHover] = useState(false);
  const [arrIndex, setArrIndex] = useState();
  return (
    <>
      <div className=" w-[90%] mx-auto py-10">
        <Element name="courses">
          <div className="gap-x-8 gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CourseSection.map((el, index) => {
              return (
                <Link
                onMouseEnter={() => {
                  setHover(true);
                  setArrIndex(index);
                }}
                onMouseLeave={() => setHover(false)}
                to={`/course/${el.linkName}`}
                className="relative w-full rounded-lg"
                id={index}
              >
                <div className="overflow-hidden w-full h-full rounded-lg">
                  <img
                    src={el.img}
                    loading="lazy"
                    alt=""
                    className={`rounded-lg w-full transition-all ease-linear duration-500 z-0 ${
                      hover && arrIndex === index ? "scale-125 grayscale" : ""
                    }`}
                  />
                </div>

                <div
                  className={`flex flex-col absolute text-white py-8 px-4 top-[60%] left-0 right-0 -bottom-7 ${el.bg} rounded-bl-lg rounded-br-lg z-10`}
                >
                  <h3 className="font-semibold text-2xl">
                    I am interested in <br/> {el.fullName}
                  </h3>
                  <Link to={`/course/${el.linkName}`} className="w-fit">
                    Visit More{" "}
                    <i className="ri-arrow-right-line text-lg ml-5"></i>
                  </Link>
                </div>
              </Link>
              );
            })}
          </div>
        </Element>
      </div>
    </>
  );
};
export default LaunchpadCourses;
