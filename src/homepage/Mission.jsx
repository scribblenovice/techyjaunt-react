import { missionTexts } from "../resources/resources";
const Mission = () => {
  return (
    <section className="pb-10 lg:pb-20 bg-stone-100 font-poppins" id="mission">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <div className="">
          <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
            <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl">
              OUR MISSION
            </h2>
          </div>
          <div className="flex flex-wrap my-12">
            {missionTexts.map((el) => {
              return (
                <div
                  className={`w-full ${
                    el.id === 0 || el.id === 1 || el.id === 2 ? "border-b" : ""
                  } md:w-1/2 ${
                    el.id === 0 || el.id === 1 || el.id === 3 || el.id === 4 ? "md:border-r" : ""
                  } lg:w-1/3 p-8`}
                  key={el.id}
                >
                  <div className="flex items-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="h-6 w-6 text-blue-500"
                    >
                      <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                    </svg>
                    <div className="ml-4 text-xl">{el.headText}</div>
                  </div>
                  <p className="leading-loose text-gray-500">{el.parTexr}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mission