// import { useIncreaseCount } from "../hooks/useIncreaseCount";

import CountUpTimer from "../hooks/CountUpTimer";

 

const RegisterCountDisplay = () => {
  return (
    <>
      <div className="countup flex w-full justify-evenly font-bold">
        <div className="grid place-items-center">
          <p className="text-2xl md:text-5xl">
            <CountUpTimer maxValue={1000} interval={20} />
          </p>
          <span className="text-sm">Registered</span>
        </div>
        <div className="grid place-items-center">
          <p className="text-2xl md:text-5xl text-center">
            <CountUpTimer maxValue={5000} interval={10}/>
          </p>
          <span className="text-center">Attendees</span>
        </div>
        <div className="grid place-items-center">
          <p className="text-2xl md:text-5xl text-center">
            <CountUpTimer maxValue={10} interval={1}/>
          </p>
          <span className="text-center">Speakers</span>
        </div>
      </div>
    </>
  );
};
export default RegisterCountDisplay;
