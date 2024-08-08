import { Link } from "react-router-dom";
import { CourseSection } from "../../../../resources/resources";
import { Element } from "react-scroll";

const LaunchpadCourses = () => {
  return (
    <>
      <div className=" w-[90%] xl:w-[85%] mx-auto py-10">
        <Element name="courses">
          <div className="gap-x-8 gap-y-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CourseSection.map((el, index) => {
              return (
                <div className="relative" id={index}>
                  <img src={el.img} alt="" className="rounded-lg w-full" />
                  <div
                    className={`flex justify-between flex-col absolute text-white p-4 top-[60%] left-0 right-0 -bottom-5 ${el.bg} rounded-bl-lg rounded-br-lg`}
                  >
                    <h3 className="font-semibold text-2xl">
                      I am interested in {el.fullName}
                    </h3>
                    <Link to={`/course/${el.linkName}`} className="my-1">
                      Visit More{" "}
                      <i className="ri-arrow-right-line text-lg ml-5"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Element>
      </div>
    </>
  );
};
export default LaunchpadCourses;
