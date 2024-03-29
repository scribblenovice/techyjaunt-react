import { defaults } from "react-reveal/globals";
import { speakers } from "../../resources/resources";
import { Zoom } from "react-reveal";

const Speakers = () => {
  return (
    <div className="container mt-24 mx-auto md:px-6">
      <section className=" text-center">
        <div className="grid gap-x-6 md:grid-cols-2 lg:gap-x-12 gap-y-16 md:gap-y-32">
          {speakers.map((el) => {
            return (
              <Zoom>
              <div className="mb-24 md:mb-0">
                <div className="block h-full rounded-lg speakers text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="flex justify-center">
                    <div className="flex justify-center -mt-[75px]">
                      <img
                        src={el.src}
                        className="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[200px] border-4 border-white"
                        alt="Avatar"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold orbitron">{el.name.toUpperCase()}</h5>
                    <p className="mb-6 text-sm saira">{el.title}</p>
                  </div>
                </div>
              </div>
              </Zoom>
            );
          })}

        </div>
      </section>
    </div>
  );
};
export default Speakers;
