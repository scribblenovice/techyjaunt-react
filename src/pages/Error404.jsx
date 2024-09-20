import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <h1 className="text-5xl text-center">THIS PAGE DOES NOT EXIST</h1>
        <Link to="/" className="text-tech-blue">Go back to Techyjaunt.com</Link>
      </div>
    </>
  );
};
export default Error404Page;
