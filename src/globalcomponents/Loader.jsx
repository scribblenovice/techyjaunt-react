import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="bg-gray-800 bg-opacity-80 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[5000]">
      <ReactLoading type="spin" color="white" height={100} width={100} />
    </div>
  );
};
export default Loader;