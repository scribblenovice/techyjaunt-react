import { useState } from "react";
import GlobalText from "../globalcomponents/GlobalText";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const AdminWelcome = () => {
  const [passCode, setPassCode] = useState("");
  const adminkey = import.meta.env.VITE_ADMIN_KEY;
  const handleChange = (e) => {
    const { value } = e.target;
    setPassCode(value);
  };
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const navigate = useNavigate();
  const signIn = () => {
    if (passCode != adminkey) {
      handleSnackbar("wrong secret key", "error");
    } else {
      sessionStorage.setItem("isAdmin", true);
      navigate("change-link");
    }
  };
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="flex flex-col w-[90%] md:w-[70%] lg:w-[50%]">
          <h1 className="text-2xl font-bold text-center">
            IDENTIFY YOURSELF
          </h1>
          <p className="text-white text-center my-5">
            Enter the secret key to proceed
          </p>
          <div className="relative">
            <GlobalText
              style={{ backgroundColor: "white", borderRadius: "10px" }}
              inputType={passwordVisible ? 'text' : 'password'}
              labelTxt="enter your secret key"
              id="passcode"
              inputName="passCode"
              handleChange={handleChange}
              inputVal={passCode}
              // errorTxt={formErrors.lastname}
              placeTxt={`enter your secret key`}
              isRequired={true}
            />
            <button onClick={togglePasswordVisibility} className="absolute right-2 top-1 text-2xl"><i className={!passwordVisible?'ri-eye-line': "ri-eye-off-line"}></i></button>
          </div>

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
