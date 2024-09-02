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
          <div></div>
          <video
            className="w-full h-full bg-black rounded-md"
            src={vidsrc}
            controls
          ></video>
        </div>
      </div>
    </>
  );
};
export default LaunchpadVideo;
