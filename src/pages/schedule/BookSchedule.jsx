import { useState } from "react";
import StepProgressBar from "../../globalcomponents/StepProgress";

import {
  validateCompany,
  validateContact,
  validateInfo,
  validateMeeting,
} from "../../validation/Validation";

import Loader from "../../globalcomponents/Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PersonInfo from "./PersonInfo";
import ContactInfo from "./ContactInfo";
import OtherDetails from "./OtherDetails";
import CompanyInfo from "./CompanyInfo";
import moment from "moment";
// import useCustomSnackbar from "../../../../hooks/UseCustomSnackbar";

const BookSchedule = () => {
  // ---------------------handling progress bar-----------------------
  const [contactError, setContactError] = useState({});
  const [infoError, setInfoError] = useState({});
  const [companyError, setCompanyError] = useState({});
  const [meetingError, setMeetingError] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [pending, setPending] = useState(false);
  const steps = [1, 2, 3, 4, 5];
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const goToNextStep = () => {
    let isValid;
    if (currentStep === 0) {
      isValid = validateInfo(formData, setInfoError);
      if (isValid) {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      } else {
        console.log(infoError);
      }
    }
    if (currentStep === 1) {
      isValid = validateContact(formData, setContactError);

      if (isValid) {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }
    }
    if (currentStep === 2) {
      isValid = validateCompany(formData, setCompanyError);
      if (isValid) {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }
    }
    if (currentStep === 3) {
      isValid = validateMeeting(formData, setMeetingError);
      if (isValid) {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      }
    }
  };
  const goToPreviousStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    setContactError({});
    setCoursesError({});
    setInfoError({});
  };
  //   --------------- handling formdata----------------------
  const [phone, setPhone] = useState();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyPosition: "",
    companyWebsite: "",
    meetingTime: "",
    extraDetails: "",
  });
  const capitalizeFirstLetter = (sentence) => {
    return sentence
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  const firstName = capitalizeFirstLetter(formData.firstName.trim());
  const lastName = capitalizeFirstLetter(formData.lastName.trim());
  const payload = {
    firstName: firstName,
    lastName: lastName,
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    companyName: formData.companyName.trim(),
    companyPosition: formData.companyPosition.trim(),
    companyWebsite: formData.companyWebsite.trim(),
    meetingDate: moment(formData.meetingTime).format("DD-MM-YYYY"),
    meetingTime: moment(formData.meetingTime).format("HH:mm a"),
    extraDetails:
      formData.extraDetails.trim() != ""
        ? formData.extraDetails.trim()
        : "no extra details",
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    setPending(true);
    // Submit the form data or perform other actions
    axios
      .post("https://techyjaunt-kx6a.onrender.com/schedule-meeting", { ...payload })
      .then((res) => {
        setPending(false);
        if (res.data.status === "registered") {
          sessionStorage.setItem("isRegistered", true);
          handleSnackbar(
            "your meeting has been scheduled, you will be redirected shortly",
            "success"
          );
          setTimeout(() => {
            window.location.href = ("https://wa.me/message/S4HHZEQFXJOWP1");
          }, 2000);
          setCurrentStep(0);
        }
        if (res.data.status === "alreadysignedup") {
          handleSnackbar("this email already exists!", "error");
        }
        if (res.data.status === "failed") {
          handleSnackbar("registration failed, please try again!", "error");
        }
      })
      .catch((error) => {
        setPending(false);
        if (error.response) {
          handleSnackbar("registration failed, please try again!", "error");
          // The request was made and the server responded with a status code that falls out of the range of 2xx
        } else if (error.request) {
          // The request was made but no response was received
          handleSnackbar("please check your internet connection!", "error");
          // console.log("No response received");
        } else {
          handleSnackbar("registration failed, please try again!", "error");
        }
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  return (
    <>
      <section className="w-[95%] mx-auto lg:w-[90%] my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
          <h2 className="text-center md:text-left text-tech-blue font-bold text-lg md:text-2xl lg:text-4xl">
            Build and launch a successful crypto exchange
          </h2>
          <div className="">
            <StepProgressBar
              className="ml-[10%] md:ml-0"
              currentStep={currentStep}
              steps={steps}
              indicatorSize="w-6 h-6"
              progressHeight="h-1"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div></div>
          <div className="flex flex-col gap-5">
            {currentStep != 4 && (
              <p className="w-full md:w-[80%]">
Book a free 15-minute consultation with George
              </p>
            )}
            {currentStep === 0 && (
              <>
                <PersonInfo
                  formErrors={infoError}
                  formData={formData}
                  className={` fade-in w-full md:w-[80%] flex flex-col gap-10`}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep === 1 && (
              <>
                <ContactInfo
                  formErrors={contactError}
                  className={`fade-in w-full md:w-[80%] flex flex-col gap-10`}
                  formData={formData}
                  handleChange={handleChange}
                  handleChange2={(phone, e) => {
                    setPhone(phone);
                    setFormData({
                      ...formData,
                      phoneNumber: phone,
                    });
                  }}
                />
              </>
            )}
            {currentStep === 2 && (
              <>
                <CompanyInfo
                  formErrors={companyError}
                  className={` fade-in w-full md:w-[80%] flex flex-col gap-10`}
                  formData={formData}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep === 3 && (
              <>
                <OtherDetails
                  formErrors={meetingError}
                  className={`fade-in w-full md:w-[80%] flex flex-col gap-10`}
                  formData={formData}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentStep != 4 && (
              <div className="flex space-x-2 mx-auto md:mx-0">
                <button
                  onClick={goToPreviousStep}
                  disabled={currentStep === 0 ? true : false}
                  className={`w-24 px-4 py-2 bg-gray-300 rounded ${
                    currentStep === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black hover:text-white"
                  }  transition-all ease-linear duration-200`}
                >
                  Previous
                </button>
                <button
                  onClick={goToNextStep}
                  className="w-24 px-4 py-2 bg-blue-500 rounded bg-tech-blue hover:bg-gray-500 transition-all ease-linear duration-200 text-white"
                >
                  Next
                </button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="fade-in flex flex-col gap-10 items-center w-full md:w-[80%]">
                <p className="text-center">
                  Please click on the submit button to submit your meeting details or go back to
                  review your meeting information
                </p>
                <div className="flex space-x-2 mx-auto md:mx-0">
                  <button
                    onClick={goToPreviousStep}
                    className={`w-24 px-4 py-2 bg-gray-300 rounded hover:bg-black hover:text-white transition-all ease-linear duration-200`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="w-24 px-4 py-2 bg-blue-500 rounded bg-tech-blue hover:bg-gray-500 transition-all ease-linear duration-200 text-white"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {pending && <Loader />}
    </>
  );
};
export default BookSchedule;
