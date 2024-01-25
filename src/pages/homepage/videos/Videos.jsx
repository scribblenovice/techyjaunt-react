import { useState } from "react";
import Switcher from "../../../globalcomponents/Switcher";
import { thumbImg } from "../../../resources/resources";

const Videos = () => {
  const [renderVid, setRenderVid] = useState(0);
  return (
    <>
      <div className="flex justify-between">
        <Switcher renderVid={renderVid} />
        <div className="w-fit flex flex-col">
          {thumbImg.map((el) => {
            return (
              <button
                key={el.id}
                className="mb-7 overflow-x-hidden overflow-y-hidden relative hover:scale-105 transition-all duration-200 ease-in w-fit h-fit"
                onClick={() => setRenderVid(el.id)}
              >
                <div
                  className={`absolute top-0 bottom-0 left-0 right-0 bg-blend-multiply ${
                    renderVid == el.id ? "bg-none" : "bg-gray-800 opacity-40"
                  } testvid`}
                ></div>
                <img src={el.src} alt="" className={`testvid w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 testvid `} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Videos;
