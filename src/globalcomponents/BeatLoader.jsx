import { BeatLoader } from "react-spinners";

const GlobalBeat = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <BeatLoader color="rgb(63 131 248)" size={`30px`} margin={`20px`} />
    </div>
  );
}
export default GlobalBeat