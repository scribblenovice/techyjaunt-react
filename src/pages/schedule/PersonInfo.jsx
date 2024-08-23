import { useState } from "react";
import GlobalText2 from "../../globalcomponents/GlobalText2";

const PersonInfo = ({ handleChange, formErrors, formData, className }) => {
  return (
    <div className={className}>
      <div>
        <label
          htmlFor="phone"
          className="mb-5 font-medium  text-sm text-gray-500"
        >
          First Name
        </label>
        <GlobalText2
          labelTxt=""
          id="first-name"
          inputName="firstName"
          handleChange={handleChange}
          errorTxt={formErrors?.firstName}
          inputVal={formData.firstName}
        />
      </div>
      <div className="">
        <label
          htmlFor="phone"
          className="mb-5 font-medium  text-sm text-gray-500"
        >
          Last Name
        </label>
        <GlobalText2
          labelTxt=""
          id="last-name"
          inputName="lastName"
          handleChange={handleChange}
          errorTxt={formErrors?.lastName}
          inputVal={formData.lastName}
        />
      </div>
    </div>
  );
};
export default PersonInfo;
