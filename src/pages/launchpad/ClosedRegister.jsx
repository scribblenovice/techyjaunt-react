import { Link } from "react-router-dom";

const ClosedRegister = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen px-2">
      <h1 className="text-black text-center shadow-sm font-black text-xl md:text-2xl lg:text-3xl tracking-widest">
        REGISTRATION FOR COHORT 4 IS CURRENTLY CLOSED
      </h1>
      <p className="my-5 text-center">
        {" "}
        Thanks for applying, but Cohort 4 applications are now closed. We have,
        however, added you to the waitlist for our next cohort. Join our WhatsApp
        community for more updates{" "}
      </p>
      <p className="text-center">
        Please go back to{" "}
        <Link className="text-blue-500" to="/">
          TechyJaunt.com
        </Link>
      </p>
    </div>
  );
};
export default ClosedRegister;
