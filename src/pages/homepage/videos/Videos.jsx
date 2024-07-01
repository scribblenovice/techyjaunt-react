import { useState } from "react";
import Switcher from "../../../globalcomponents/Switcher";
import { thumbImg } from "../../../resources/resources";

const Videos = () => {
  const [renderVid, setRenderVid] = useState(0);
  return (
    <>
      <div className="flex gap-x-2 w-full">
        <Switcher renderVid={renderVid} />
        <div className="w-[30%] flex flex-col bg-red-400">
          {thumbImg.map((el) => {
            return (
              <button 
                key={el.id}
                className="mb-4 overflow-x-hidden overflow-y-hidden relative hover:scale-105 transition-all duration-200 ease-in w-full h-fit"
                onClick={() => setRenderVid(el.id)}
              >
                <div
                  className={`absolute top-0 bottom-0 left-0 right-0 bg-blend-multiply ${
                    renderVid == el.id ? "bg-none" : "bg-gray-800 opacity-40"
                  } testvid`}
                ></div>
                <img src={el.src} alt="" className={`testvid w-24 h-20 sm:w-16 sm:h-16 lg:w-20 lg:h-20 testvid border-[3px] border-gray-900`} />
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Videos;
