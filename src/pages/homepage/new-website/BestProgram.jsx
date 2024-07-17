import { CourseSection, FancyUnderline } from "../../../resources/resources";

const BestProgram =()=>{
    return(
        <div className="w-[90%] xl:w-[85%] mx-auto py-20">
        <h2 className=" font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
          What{" "}
          <span className="text-tech-blue relative inline-block">
            <FancyUnderline className="absolute -bottom-2 left-1/2 -translate-x-1/2" />{" "}
            is the best Learning{" "}
          </span>{" "}
          <br />
          Program for You?
        </h2>
        <p className="my-8 text-2xl lg:text-3xl">
          Most <span className="text-tech-blue">Popular Categories</span>
        </p>
        <div className="some gap-5">
          {CourseSection.map((el, index) => {
            return (
              <div
                id={index}
                className="flex border border-tech-blue rounded-lg py-4 items-center justify-between px-5"
              >
                <div className="flex items-center">
                  {el.icon}
                  <p className="ml-3"> {el.name}</p>
                </div>
                <button>
                  <i className="ri-arrow-right-up-line text-tech-blue text-2xl hover:bg-tech-blue hover:text-white p-2 rounded-lg transition-all ease-linear duration-300"></i>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    )
};
export default BestProgram;