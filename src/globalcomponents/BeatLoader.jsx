import { ScaleLoader } from "react-spinners";

const GlobalBeat = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <ScaleLoader color="rgb(63 131 248)" size={`30px`} margin={`20px`} className="scale-150"/>
    </div>
  );
}
export default GlobalBeat