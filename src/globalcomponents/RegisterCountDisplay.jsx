// import { useIncreaseCount } from "../hooks/useIncreaseCount";

import CountUpTimer from "../hooks/CountUpTimer";

const RegisterCountDisplay = () => {
  return (
    <>
      <div className="py-10 countup flex w-full justify-evenly font-bold">
        <CountUpTimer maxValue={500} interval={10} title={`Registered`} />
        <CountUpTimer maxValue={3000} interval={50} title={`Attendees`} />
        <CountUpTimer maxValue={10} interval={1} title={`Speakers`}/>
      </div>
    </>
  );
};
export default RegisterCountDisplay;