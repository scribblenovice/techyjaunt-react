"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { PhoneNumber } from "../globalcomponents/PhoneNumber";
import GlobalText from "../globalcomponents/GlobalText";
import axios from "axios";
import GlobalSelect from "./GlobalSelect";
import { courses, howHeard } from "../resources/resources";
import { useNavigate } from "react-router-dom";

const FormModal = ({ openModal, closeModal }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [modalError, setModalError] = useState(true);
  const [open, setOpen] = useState(false);
  const countryCode = sessionStorage.getItem("countryCode");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    selectedCourse: "",
    knowlegeOfTechyJaunt: "",
    expectation: "",
  });

  const payload = {
    fullName: formData.fullName,
    email: formData.email,
    phoneNumber: countryCode + formData.phoneNumber,
    selectedCourse: formData.selectedCourse,
    knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
    expectation: formData.expectation,
  };
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      errors.username = "enter your name";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (formData.selectedCourse === "") {
      errors.selectedCourse = "select an option";
      isValid = false;
    }

    if (formData.knowlegeOfTechyJaunt === "") {
      errors.knowlegeOfTechyJaunt = "select an option";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/signup", { ...payload })
        .then((res) => {
          if (res.data.status === "registered") {
            setModalError(false);
            setOpen(true);
            setMessage(
              "YOU HAVE SUCCESSFULLY REGISTERED FOR COHORT 3! YOU WILL BE REDIRECTED TO OUR WHATSAPP COMMUNITY SHORTLY"
            );
            closeModal;
            setTimeout(() => {
              navigate("https://chat.whatsapp.com/EYUmLA5lrDB0KrWAFuH5Hm");
            }, 5000);
          }
          if (res.data.status === "alreadysignedup") {
            setModalError(true);
            setOpen(true);
            setMessage("YOU HAVE ALREADY SIGNED UP FOR THE COHORT!");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("PLEASE FILL IN THE CORRECT PARAMETERS!");
          }
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Modal show={openModal} onClose={closeModal} className="">
        <Modal.Header>SIGN UP FOR THE COHORT 3!</Modal.Header>
        <Modal.Body>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            method="POST"
            action="/signup"
          >
            <div className="relative z-0 w-full mb-6">
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Full Name
                </label>
                <GlobalText
                  labelTxt="Full Name"
                  id="name"
                  inputName="fullName"
                  handleChange={handleChange}
                  errorTxt={formErrors.username}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Phone Number
                </label>
                <PhoneNumber
                  id="phone"
                  inputName="phoneNumber"
                  handleChange={handleChange}
                  errorTxt={formErrors.phoneNumber}
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="font-medium text-sm text-gray-500"
                >
                  Email Adress
                </label>
                <GlobalText
                  inputType="email"
                  inputName="email"
                  id="email"
                  handleChange={handleChange}
                  errorTxt={formErrors.email}
                />
              </div>
            </div>
            <div className="relative w-full group text-gray-500 grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div>
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  Which course would you like to take?
                </label>
                <div className="w-full">
                  <GlobalSelect
                    options={courses}
                    name="selectedCourse"
                    inputVal={formData.selectedCourse}
                    handleChange={(e) => {
                      setFormData({
                        ...formData,
                        selectedCourse: e,
                      });
                    }}
                    errorTxt={formErrors.selectedCourse}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  How did you hear about TechyJaunt?
                </label>
                <div className="w-full">
                  <GlobalSelect
                    options={howHeard}
                    name="knowlegeOfTechyJaunt"
                    inputVal={formData.knowlegeOfTechyJaunt}
                    handleChange={(e) => {
                      setFormData({
                        ...formData,
                        knowlegeOfTechyJaunt: e,
                      });
                    }}
                    errorTxt={formErrors.knowlegeOfTechyJaunt}
                  />
                </div>
              </div>
            </div>
            <div className="relative z-0 w-full mb-6 ">
              <label
                htmlFor="event-expectations"
                className="font-medium  text-sm text-gray-500 "
              >
                What are your expectations for this course?
              </label>
              <textarea
                name="expectation"
                className="w-full border-2 border-gray-400 rounded-md resize-none p-3 mt-2"
                id="event-expectations"
                cols="30"
                rows="1"
                onChange={handleChange}
              ></textarea>
            </div>
            <Modal.Footer>
              <button
                type="submit"
                onClick={handleSubmit}
                className="mx-auto bg-blue-500 text-white p-4 rounded"
              >
                SUBMIT
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        show={open}
        onClose={() => {
          setOpen(false);
        }}
        position="center"
      >
        <Modal.Header className="border-none h-2"></Modal.Header>

        <Modal.Body className="px-4 py-10 md:p-20 grid place-items-center gap-y-5">
          <div className={`${modalError ? "block" : "hidden"}`}>
            <i className={`ri-error-warning-line text-red-500 text-7xl`}></i>
          </div>
          <div className={`${!modalError ? "block" : "hidden"}`}>
            <i
              className={`ri-checkbox-circle-line text-green-500 text-7xl`}
            ></i>
          </div>
          <div className="text-xl md:text-2xl text-center">{message}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FormModal;
