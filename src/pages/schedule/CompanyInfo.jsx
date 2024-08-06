import { useState } from "react";
import GlobalText2 from "../../globalcomponents/GlobalText2";
import PhoneNumberInput from "../../globalcomponents/PhoneInput";

const CompanyInfo = ({
  handleChange,
  formErrors,
  className,
  formData
}) => {
  return (
    <div className={className}>
      <div className="w-full">
        <label
          htmlFor="companyName"
          className="mb-5 font-medium  text-sm text-gray-500"
        >
          What is the name of your company?
        </label>
        <GlobalText2   
          inputType="text"
          inputName="companyName"
          id="company-name"
          handleChange={handleChange}
          errorTxt={formErrors?.companyName}
          inputVal={formData.companyName}
        />
      </div>
      <div className="">
        <label htmlFor="companyPosition" className="font-medium text-sm text-gray-500">
          Position occupied at the company
        </label>
        <GlobalText2   
          inputType="text"
          inputName="companyPosition"
          id="company-position"
          handleChange={handleChange}
          errorTxt={formErrors?.companyPosition}
          inputVal={formData.companyPosition}
        />
      </div>
      <div className="">
        <label htmlFor="companyWebsite" className="font-medium text-sm text-gray-500">
          Your Company Website
        </label>
        <GlobalText2
          inputType="text"
          inputName="companyWebsite"
          id="company-website"
          handleChange={handleChange}
          errorTxt={formErrors?.companyWebsite}
          inputVal={formData.companyWebsite}
        />
      </div>
    </div>
  );
};
export default CompanyInfo;
