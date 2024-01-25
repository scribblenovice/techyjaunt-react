import { Fade, Zoom } from "react-reveal";
import { PartnerImg } from "../../../resources/resources";
import casavaImg from "../../../images/partners/cassava.webp";
import coinstoreImg from "../../../images/partners/coinstore.webp";

const Partners = ({ isEvent, title }) => {
  return (
    <section className="py-10 lg:py-20">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        <h2 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl px-4 pl-4 mb-6 border-l-4 border-blue-500">
         {title}
        </h2>
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
            isEvent ? "lg:grid-cols-5" : ""
          } gap-10 test pt-10`}
        >
          {PartnerImg.map((j) => {
            return (
              <Zoom>
                <div className="w-full h-full grid place-items-center">
                  <img
                    loading="lazy"
                    className={`${
                      j.id == 2 || j.id == 3 ? "w-[40%]" : "w-[70%]"
                    }`}
                    key={j.id}
                    src={j.src}
                    alt=""
                  />
                </div>
              </Zoom>
            );
          })}
          {isEvent && (
            <>
              <Zoom>
                <div className="w-full h-full grid place-items-center">
                  <img className={`w-[70%]`} key={``} src={casavaImg} alt="" />
                </div>
              </Zoom>
              <Zoom>
                <div className="w-full h-full grid place-items-center">
                  <img
                    className={`w-[70%]`}
                    key={``}
                    src={coinstoreImg}
                    alt=""
                  />
                </div>
              </Zoom>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Partners;
