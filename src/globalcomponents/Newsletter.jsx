import { useState } from "react";
import axios from "axios";
import GlobalText from "./GlobalText";
import { Fade } from "react-reveal";
import { useSnackbar } from "notistack";
import Loader from "./Loader";
import useCustomSnackbar from "../hooks/UseCustomSnackbar";

const NewsLetter = () => {
  const { handleSnackbar } = useCustomSnackbar();
  const [shake, setShake] = useState(false);
  const [pending, setPending] = useState(false);
  const [emailSubscriber, setEmailSubscribe] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!emailSubscriber.firstName.trim()) {
      errors.firstName = "enter your name";
      isValid = false;
    }
    if (!emailSubscriber.lastName.trim()) {
      errors.lastName = "enter your name";
      isValid = false;
    }

    if (!emailSubscriber.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailSubscriber.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setPending(true);
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/subscribe", {
          ...emailSubscriber,
        })
        .then((res) => {
          setPending(false);
          if (res.data.status === "subscribed") {
            handleSnackbar(
              "you have successfully subscribed for our newsletter",
              "success"
            );
            setEmailSubscribe({ firstName: "",
              lastName: "",
              email: "",})
          }
          if (res.data.status === "existing") {
            handleSnackbar("this email already exist", "error");
          }
          if (res.data.status === "invalid") {
            handleSnackbar("an error occured, please try again", "error");
          }
        })
        .catch((error) => {
          setPending(false);
          if (error.response) {
            handleSnackbar("subscription failed, please try again!", "error");
            // The request was made and the server responded with a status code that falls out of the range of 2xx
          } else if (error.request) {
            // The request was made but no response was received
            handleSnackbar("please check your internet connection!", "error");
            // console.log("No response received");
          } else {
            handleSnackbar("subscription failed, please try again!", "error");
          }
        });
    }
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailSubscribe({
      ...emailSubscriber,
      [name]: value,
    });
  };

  return (
    <>
      <form
        className="mx-auto w-full gap-y-5"
        method="/subscribe"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="first" className="text-gray-700 text-xs">
              First name
            </label>
            <input
              id="first"
              type="text"
              name="firstName"
              onChange={handleChange}
              placeholder="first name"
              className={`w-full focus:ring-0 transition-all ease-linear duration-200 rounded-md text-gray-600 ${
                formErrors?.firstName ? "border-red-500" : ""
              }`}
              value={emailSubscriber.firstName}
            />
            {formErrors?.firstName && (
              <p className="text-xs text-red-500">{formErrors.firstName}</p>
            )}
          </div>
          <div>
            <label htmlFor="last" className="text-gray-700 text-xs">
              Last name
            </label>
            <input
              id="last"
              type="text"
              onChange={handleChange}
              placeholder="last name"
              name="lastName"
              className={`w-full focus:ring-0 transition-all ease-linear duration-200 rounded-md text-gray-600 ${
                formErrors?.lastName ? "border-red-500" : ""
              }`}
              value={emailSubscriber.lastName}
            />
            {formErrors?.lastName && (
              <p className="text-xs text-red-500">{formErrors.lastName}</p>
            )}
          </div>
        </div>
        <div className="w-full mt-2">
          <label htmlFor="email" className="text-gray-700 text-xs">
            Email address
          </label>
          <input
            id="email"
            type="text"
            onChange={handleChange}
            placeholder="email address"
            name="email"
            className={`w-full focus:ring-0 transition-all ease-linear duration-200 rounded-md text-gray-600 ${
              formErrors?.email ? "border-red-500" : ""
            }`}
            value={emailSubscriber.email}
          />
          {formErrors?.email && (
            <p className="text-xs text-red-500">{formErrors.email}</p>
          )}
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className={`cursor-pointer mx-auto mt-5 bg-blue-500 text-white p-2 text-sm rounded ${
            shake ? "shake" : ""
          }`}
        >
          SUBCRIBE NOW
        </button>
      </form>
      {pending && <Loader />}
    </>
  );
};
export default NewsLetter;
