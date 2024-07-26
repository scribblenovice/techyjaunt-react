import { useState } from "react";
import GlobalText2 from "../../../../globalcomponents/GlobalText2";

const PersonInfoReg = ({ handleChange, formErrors, formData, className }) => {
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
      <div>
        <div className="font-medium  text-sm text-gray-500 flex">
          <p className="mr-5">Gender:</p>
          <div className="flex">
            <div className="mr-5">
              <label htmlFor="male" className="mr-1">
                Male
              </label>
              <input
                type="radio"
                onChange={handleChange}
                name="gender"
                id="male"
                value="male"
                checked={formData.gender === "male" ? true : false}
                className="w-5 h-5"
              />
            </div>
            <div>
              <label htmlFor="female" className="mr-1">
                Female
              </label>
              <input
                className="w-5 h-5"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={formData.gender === "female" ? true : false}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        {formErrors?.gender && (
          <p className="text-xs text-red-500">{formErrors?.gender}</p>
        )}
      </div>
    </div>
  );
};
export default PersonInfoReg;
