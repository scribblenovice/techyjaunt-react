// import vidSrc from "../../../../../public/video/techyjaunt-testimonial.mp4";
import { lazy, useState } from "react";
// const ReactPlayer = lazy(() => import("react-player"));
import ReactPlayer from "react-player";
import { BeatLoader } from "react-spinners";
import vidsrc from "../../../../../public/video/techyjaunt-testimonial.mp4";

const LaunchpadVideo = () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      <div>
        <div className="h-[400px] xl:h-[450px] w-[90%]  mx-auto mb-[70px] md:-mt-32 xl:-mt-10">
          {/* {error ? (
            <div className="flex justify-center items-center h-full bg-gray-200">
              <p className="text-center text-gray-600">
                Video could not be loaded. Please try again later.
                <BeatLoader />
              </p>
            </div>
          ) : ( */}
          <video
            // className="w-full h-[47vh] sm:h-[400px] md:h-[450px] lg:h-[500px] "
            className="w-full h-full bg-black rounded-md"
            src={vidsrc}
            controls
          ></video>
          {/* <ReactPlayer
              className="w-full h-full bg-gray-200"
              url="https://www.youtube.com/watch?v=2vLcZ_qmSGc"
              controls={true}
              width="100%"
              height="100%"
              onError={handleError}
            /> */}
          {/* )} */}
        </div>
      </div>
    </>
  );
};
export default LaunchpadVideo;
