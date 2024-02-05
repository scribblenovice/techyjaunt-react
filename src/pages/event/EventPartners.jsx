import { Zoom } from "react-reveal";
import { eventPartnersImg } from "../../resources/resources";

const EventPartners = () => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 test my-10`}
    >
      {eventPartnersImg.map((j) => {
        return (
          <Zoom>
            <div className="w-full h-full grid place-items-center">
              <img
                loading="lazy"
                className={`w-full`}
                key={j.id}
                src={j.src}
                alt=""
              />
            </div>
          </Zoom>
        );
      })}
    </div>
  );
};
export default EventPartners;