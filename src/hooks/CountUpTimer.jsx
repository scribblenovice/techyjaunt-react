import React, { useState, useEffect, useRef } from "react";

const CountUpTimer = ({ maxValue, interval, title, numberClass, titleClass, intervalNum, containerClass }) => {
  const [count, setCount] = useState(0);
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isElementInViewport = () => {
    const rect = targetRef.current.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    if (isElementInViewport()) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Check visibility on initial render
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    let intervalId;

    if (isVisible) {
      intervalId = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + interval;
          return nextCount <= maxValue ? nextCount : maxValue;
        });
      }, (intervalNum || 30));
    }

    return () => clearInterval(intervalId);
  }, [isVisible, maxValue]);

  return (
    <div ref={targetRef} className={`${containerClass || "grid place-items-center"}`}>
      {isVisible && (
        <>
          <p className={`${numberClass || "text-2xl md:text-5xl text-white"}`}>{count}+</p>
          <span className={`${titleClass || "text-blue-500 text-sm"}`}>{title}</span>
        </>
      )}
    </div>
  );
};

export default CountUpTimer;
