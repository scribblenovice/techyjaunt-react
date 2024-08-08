import { PartnerImg } from "../../../../resources/resources";

const LaunchpadPartners = () => {
  return (
    <div className="w-[90%] xl:w-[85%] mx-auto py-20">
      <h2 className="border-b-4 border-b-gray-500 text-tech-blue relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-center xl:text-left">
        Our Partners
      </h2>
      <div
        className={`grid grid-cols-3 md:grid-cols-4 gap-10 test pt-10`}
      >
        {PartnerImg.map((j) => {
          return (
            // <Zoom>
            <div className="w-full h-full grid place-items-center">
              <img
                loading="lazy"
                className={`${
                  j.id == 2 || j.id == 3
                    ? "w-[40%]"
                    : j.id == 10
                    ? "w-[100%]"
                    : "w-[70%]"
                }`}
                key={j.id}
                src={j.src}
                alt=""
              />
            </div>
            // </Zoom>
          );
        })}
      </div>
    </div>
  );
};
export default LaunchpadPartners;
