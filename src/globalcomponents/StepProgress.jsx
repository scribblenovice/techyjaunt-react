import { useState } from "react";
const StepProgressBar = ({
  steps,
  currentStep,
  indicatorSize,
  progressHeight,
  className,
}) => {
  return (
    <div className={`flex flex-col relative -z-30 items-center ${className}`}>
      <div className="w-full flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1">
            <div
              className={`flex items-center bg-white justify-center w-10 h-10 relative z-20 transition-all ease-linear duration-300 `}
            >
              <div
                className={`w-4 h-4 rounded-full ${indicatorSize} transition-all ease-linear duration-300 ${
                  currentStep >= index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 z-10 w-full ${progressHeight}  transition-all ease-linear duration-300 bg-gray-300`}
              >
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${progressHeight} transition-all ease-linear duration-300 ${
                    currentStep > index
                      ? "bg-tech-blue w-full"
                      : "bg-tech-blue w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* <div className="flex space-x-2">
        <button
          onClick={goToPreviousStep}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={goToNextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default StepProgressBar;
