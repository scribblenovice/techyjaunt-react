import { PartnerImg } from "../../resources/resources";

const Partners = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
          OUR PARTNERS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 test">
          {PartnerImg.map((j) => {
            return (
              <div key={j.id} className="w-full h-full grid place-items-center">
                <img
                  className={`w-${
                    j.id == 2
                      ? "[60%]"
                      : j.id == 3
                      ? "[60%]"
                      : j.id == 5
                      ? "[90%]"
                      : j.id == 6
                      ? "[90%]"
                      : "full"
                  } h-${
                    j.id == 2
                      ? "[60%]"
                      : j.id == 3
                      ? "[60%]"
                      : j.id == 5
                      ? "[90%]"
                      : j.id == 6
                      ? "[90%]"
                      : "full"
                  }`}
                  src={j.src}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Partners;
