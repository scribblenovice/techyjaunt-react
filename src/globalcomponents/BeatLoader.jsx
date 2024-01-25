import { BeatLoader } from "react-spinners";

const GlobalBeat = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <BeatLoader color="rgb(63 131 248)" size={`30`} margin={`20`} />
    </div>
  );
}
export default GlobalBeat