import { Clock, Person, Screen } from "../../../../resources/resources";

const CourseTimeline = () => {
  return (
    <>
      <div className="lg:flex mb-10 -mt-20 xl:-mt-0">
        <div className="bg-black font-medium text-lg sm:text-xl md:text-3xl flex justify-center">
          <p className="text-white py-5 lg:py-0 md:p-14 whitespace-nowrap">
            APPLICATION ENDS : <br className="hidden lg:block" />(TIMER GOES HERE)
          </p>
        </div>
        <div className="bg-[#E4FCFF] w-full flex justify-around md:justify-evenly items-center py-2 md:py-8">
          <div className="flex flex-col items-center">
            <Clock className="w-10 md:w-16 lg:w-20 " />
            <p className="text-sm md:text-2xl font-medium text-center whitespace-nowrap -mt-2 md:-mt-0">3 Months</p>
          </div>
          <div className="flex flex-col items-center">
            <Screen className="w-10 md:w-16 lg:w-20"/>
            <p className="text-sm md:text-2xl font-medium text-center">
              Virtual Classes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Person className="w-10 md:w-16 lg:w-20" />
            <p className="text-sm md:text-2xl font-medium text-center">
              Expert Instructors
            </p>
          </div>
        </div>
      </div>

    </>
  );
};
export default CourseTimeline;
