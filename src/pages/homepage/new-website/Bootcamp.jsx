import { Link } from "react-router-dom";
import { CourseSection, FancyUnderline } from "../../../resources/resources";

const Bootcamp =()=>{
return(
    <div className=" w-[90%] xl:w-[85%] mx-auto py-10">
        <h2 className="font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          Experience Lifelong Learning with <br className="hidden xl:block" />{" "}
          <span className="text-tech-blue relative inline-block">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            Techyjaunt
          </span>
        </h2>
        <div className="text-sm sm:text-base xl:text-2xl text-[#6D737A] flex gap-10 my-8">
          <p>
            <span className="relative border-b-4 border-tech-blue">Boot</span>
            camp
          </p>
          <p>Bootcamp + Mentorship</p>
        </div>
        <div className="some1 gap-x-8 gap-y-12">
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
                  <Link className="my-1">
                    Visit More{" "}
                    <i className="ri-arrow-right-line text-lg ml-5"></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
)
}
export default Bootcamp;