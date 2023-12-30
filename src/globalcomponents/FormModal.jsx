"use client";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { Select, Option } from "@material-tailwind/react";
import { PhoneNumber } from "../globalcomponents/PhoneNumber";
import GlobalText from "../globalcomponents/GlobalText";
import { PaystackButton } from "react-paystack";

const FormModal = ({ openModal, closeModal }) => {
  const countryCode = sessionStorage.getItem("countryCode");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    selectedCourse: "",
    knowlegeOfTechyJaunt: "",
    expectation: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: 10000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_37dcf5501ad10130819defd5bfafe0b988a3c87f",
  };

  const componentProps = {
    ...config,
    text: "PROCEED",
    onSuccess: () => alert("SUCCESSFUL TRANSACTION"),
    onClose: () => {
      alert("TRANSACTION FAILED");
      closeModal;
    },
  };
  const payload = {
    fullName: formData.fullName,
    email: formData.email,
    phoneNumber: countryCode + formData.phoneNumber,
    selectedCourse: formData.selectedCourse,
    knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
    expectation: formData.expectation,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // action = "/launchpad/signup";
  return (
    <Modal show={openModal} onClose={closeModal} className="">
      <Modal.Header>SIGN UP FOR THE NEXT COHORT!</Modal.Header>
      <Modal.Body>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
                <Select
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      selectedCourse: e,
                    });
                  }}
                  value={formData.selectedCourse}
                  name="selectedCourse"
                  aria-required
                >
                  <Option value="">Select an option</Option>
                  <Option value="ui/ux design">UI/UX DESIGN</Option>
                  <Option value="frontend web development">
                    FRONTEND WEB DEVELOPMENT
                  </Option>
                  <Option value="backend web development">
                    BACKEND WEB DEVELOPMENT
                  </Option>
                  <Option value="product management">PRODUCT MANAGEMENT</Option>
                  <Option value="data analysis">DATA ANALYSIS</Option>
                </Select>
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
                <Select
                  name="knowlegeOfTechyJaunt"
                  value={formData.knowlegeOfTechyJaunt}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      knowlegeOfTechyJaunt: e,
                    });
                  }}
                  aria-required
                >
                  <Option value="instagram">INSTAGRAM</Option>
                  <Option value="facebook">FACEBOOK</Option>
                  <Option value="whatsapp-tv">WHATSAPP TV</Option>
                  <Option value="through-a-friend">THROUGH A FRIEND</Option>
                  <Option value="fajo-monie">FAJO MONIE</Option>
                  <Option value="others">OTHERS</Option>
                </Select>
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
            <PaystackButton
              className="mx-auto bg-blue-500 text-white p-2 rounded"
              {...componentProps}
            />
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};
export default FormModal;
