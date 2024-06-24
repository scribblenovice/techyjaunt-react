import { useState, useRef, useEffect } from "react";
import { thumbImg } from "../resources/resources";
const VideoChanger = ({ fullName, thumbNail, vidSrc }) => {
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
    <div className="box lg:mx-auto w-[70%] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative video bg-black overflow-hidden rounded-lg">
      <video
        // className="w-full h-[47vh] sm:h-[400px] md:h-[450px] lg:h-[500px] "
        className="absolute top-0 left-0 w-full h-full"
        src={vidSrc}
        ref={videoRef}
      ></video>
      <div
        className={`absolute top-0 bottom-0 left-0 right-0 test-vid ${thumbNail} ${
          count > 0 && durationSec != currentTimeSec ? "hidden" : "block"
        }`}
      >
        <h3 className="thumbtext text-xl md:text-3xl absolute text-white bottom-24 right-0 left-0 mx-auto text-center">
          {fullName}
        </h3>
      </div>
      <div className="playbtn rounded-full absolute right-0 left-0 mx-auto text-center bottom-8">
        <button
          onClick={() => {
            setCount(count + 1);
            handlePlay();
          }}
          className=" w-12 h-12 rounded-full bg-white focus:outline-none"
        >
          <i
            className={`${
              isPlaying && durationSec != currentTimeSec
                ? "ri-pause-line"
                : "ri-play-fill"
            } text-blue-500 text-4xl`}
          ></i>
        </button>
      </div>
    </div>
  );
};
export default VideoChanger;
