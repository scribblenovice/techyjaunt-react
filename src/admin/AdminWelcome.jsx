import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import { useNavigate } from "react-router-dom";

const AdminWelcome = () => {
  const [passCode, setPassCode] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setPassCode(value);
  };
  const navigate = useNavigate();
  const signIn = () => {
    if (passCode != adminkey) {
      alert("WRONG PASSCODE, PLEASE TRY AGAIN");
      setPassCode("");
    } else {
      sessionStorage.setItem("isAdmin", true);
      navigate("/admin/admin-nav");
    }
  };
  const adminkey = import.meta.env.VITE_ADMIN_KEY;

  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]">
          <h1 className="text-2xl font-bold text-center">
            ENTER THE ADMIN PASSWORD TO PROCEED
          </h1>
          <p className="text-white text-center my-5">OYA, ENTER THE SECRET KEY</p>
          <GlobalText
            style={{ backgroundColor: "white", borderRadius: "10px" }}
            inputType="password"
            labelTxt=""
            id="passcode"
            inputName="passCode"
            handleChange={handleChange}
            inputVal={passCode}
            // errorTxt={formErrors.lastname}
            placeTxt={`enter your secret key`}
            isRequired={true}
          />
          <button
            className="mt-5 bg-white p-3 rounded-md hover:bg-black hover:text-white transition-all ease-linear duration-300"
            onClick={signIn}
          >
            CLICK HERE TO PROCEED
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminWelcome;
