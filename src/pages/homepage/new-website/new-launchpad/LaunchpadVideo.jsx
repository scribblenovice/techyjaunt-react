import { useEffect, useRef, useState } from "react";
import vidsrc from "../../../../../public/video/bootcampvid.mp4";
import { FancyUnderline } from "../../../../resources/resources";
import { Fade } from "react-reveal";

const LaunchpadVideo = () => {
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]); // current time of the video in array. The first value represents the minute and the second represents seconds.
  const [currentTimeSec, setCurrentTimeSec] = useState(); //current time of the video in seconds
  const [duration, setDuration] = useState([0, 0]); // // total duration of the video in the array. The first value represents the minute and the second represents seconds.
  const [durationSec, setDurationSec] = useState(); // // current duration of the video in seconds
  const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };
  useEffect(() => {
    const { min, sec } = sec2Min(videoRef.current.duration);
    setDurationSec(videoRef.current.duration);
    setDuration([min, sec]);
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTimeSec(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="w-[90%] mx-auto my-10 lg:my-16">
      <Fade bottom>
        <h2 className="relative inline-block font-semibold text-2xl sm:text-3xl xl:text-6xl text-left tts mb-5">
          Our <span className="text-tech-blue tts">Alumni Stories</span>
          <FancyUnderline className="absolute -bottom-2 left-7" />{" "}
        </h2>
      </Fade>
        <div className="h-[400px] xl:h-[450px] w-full relative mx-auto">
          <div
            className={`absolute top-0 bottom-0 left-0 right-0 thumb1 z-10 ${
              count > 0 && durationSec != currentTimeSec ? "hidden" : "block"
            }`}
          ></div>
          <video
            ref={videoRef}
            // onPlay={() => setIsPlaying(true)}
            // onPause={() => setIsPlaying(false)}
            className="w-full h-full bg-black rounded-md"
            src={vidsrc}
            controls
          ></video>
          <div className="playbtn scale rounded-full z-20 absolute right-0 left-0 mx-auto text-center bottom-8">
            <button
              onClick={() => {
                setCount(count + 1);
                handlePlay();
              }}
              className=" w-14 h-14 rounded-full bg-white focus:outline-none border-tech-blue border-4"
            >
              <i
                className={`${
                  isPlaying && durationSec != currentTimeSec
                    ? "ri-pause-line"
                    : "ri-play-fill"
                } text-tech-blue text-4xl`}
              ></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default LaunchpadVideo;
