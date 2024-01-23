"use client";
import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import GlobalText from "../globalcomponents/GlobalText";
import axios from "axios";
import GlobalSelect from "./GlobalSelect";
import { courses, howHeard } from "../resources/resources";
import { useNavigate } from "react-router-dom";
import PhoneNumber from "./PhoneNumber";

const FormModal = ({
  phoneval,
  openModal,
  closeModal,
  handleChange,
  handleSubmit,
  formErrors,
  modalError,
  message,
  formData,
  handleSelect1,
  handleSelect2,
  handleChange2,
  shake,
  phone,
  open,
  close
}) => {
  return (
    <>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>SIGN UP FOR THE COHORT 3!</Modal.Header>
        <Modal.Body>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            method="POST"
            action="/signup"
          >
            <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  First Name
                </label>
                <GlobalText
                  labelTxt=""
                  id="first-name"
                  inputName="firstName"
                  handleChange={handleChange}
                  errorTxt={formErrors.firstname}
                />
              </div>
              <div className="">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Last Name
                </label>
                <GlobalText
                  labelTxt=""
                  id="last-name"
                  inputName="lastName"
                  handleChange={handleChange}
                  errorTxt={formErrors.lastname}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div className=" w-full">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Phone Number
                </label>
                <PhoneNumber
                  id="phone"
                  inputName="phoneNumber"
                  inputVal={phoneval}
                  handleChange={handleChange2}
                  // onChange={(phone) => {
                  //   setPhone(phone);
                  //   sessionStorage.setItem("countryCode", phone);
                  // }}
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
                    handleChange={handleSelect1}
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
                    handleChange={handleSelect2}
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
                className="w-full border-[1px] border-gray-400 rounded-md resize-none p-3 mt-2 focus:border-black focus:!border-2 focus:!outline-0 focus:!shadow-none"
                id="event-expectations"
                cols="30"
                rows="1"
                onChange={handleChange}
              ></textarea>
            </div>
            <Modal.Footer>
              <button
                id="btn"
                onClick={handleSubmit}
                type="submit"
                className={`mx-auto bg-blue-500 text-white p-4 rounded ${
                  shake ? "shake" : ""
                }`}
              >
                REGISTER
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <Modal show={open} onClose={close} position="center">
        <Modal.Header className="border-none h-2"></Modal.Header>

        <Modal.Body className="px-4 py-10 md:p-20 grid place-items-center gap-y-5">
          <div>
            <i
              className={`${
                modalError
                  ? "ri-error-warning-line text-red-500"
                  : "ri-checkbox-circle-line text-green-500"
              }  text-7xl`}
            ></i>
          </div>
          <div className="text-xl md:text-2xl text-center">{message}</div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FormModal;
