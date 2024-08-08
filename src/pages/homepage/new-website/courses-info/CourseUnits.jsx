const CourseUnits = ({ data }) => {
  return (
    <>
      <div className="mx-auto flex flex-col mt-10 md:mt-20">
        <h2 className="border-b-4 w-fit self-center border-b-tech-blue text-tech-blue inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center">
          What you will Learn
        </h2>
        <div className="flex relative flex-col gap-10 bg-blend-multiply">
          <div className="absolute courseunitbg top-0 bottom-0 left-0 right-0"></div>
          <a
            href={data?.brochure}
            download={data.pdf}
            className="px-2 whitespace-nowrap md:px-5 text-center absolute -bottom-7 left-1/2 transform -translate-x-1/2 inline-block bg-[#FBAF1B] text-white hover:text-[#FBAF1B] hover:bg-white transition-all ease-linear duration-200 rounded-md py-3 font-medium text-lg sm:text-2xl"
          >
            Download Brochure for more details
          </a>
          {data?.toLearn.map((el, index) => {
            return (
              <div
                className={`flex flex-col gap-2 lg:gap-5 px-5 lg:px-0 lg:pl-20 py-10 lg:pr-40 ${
                  index % 2 != 0 ? "bg-[#E4FCFF] w-screen" : "bg-transparent"
                }`}
              >
                <p className="text-tech-blue text-lg md:text-xl lg:text-2xl">UNIT {index + 1}</p>
                <h3 className="text-tech-blue text-3xl md:text-4xl lg:text-5xl">{el.unitName}</h3>
                <p className="text-base md:text-xl text-gray-700">{el.goal}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CourseUnits;
