import { useState } from "react";
import GlobalText2 from "../../../../globalcomponents/GlobalText2";
import PhoneNumberInput from "../../../../globalcomponents/PhoneInput";

const ContactReg = ({
  phoneval,
  handleChange,
  handleChange2,
  formErrors,
  className,
  formData
}) => {
  return (
    <div className={className}>
      <div className="w-full">
        <label
          htmlFor="phone"
          className="mb-5 font-medium  text-sm text-gray-500"
        >
          Enter Your Phone Number
        </label>
        <PhoneNumberInput
          id="phone"
          inputName="phoneNumber"
          inputVal={formData.phoneNumber}
          handleChange={handleChange2}
          errorTxt={formErrors?.phoneNumber}
        />
      </div>
      <div className="">
        <label htmlFor="email" className="font-medium text-sm text-gray-500">
          Enter your Email Address
        </label>
        <GlobalText2
          labelTxt="email address"
          placeTxt="email address"
          inputType="email"
          inputName="email"
          id="email"
          handleChange={handleChange}
          errorTxt={formErrors?.email}
          inputVal={formData.email}
        />
      </div>
    </div>
  );
};
export default ContactReg;
