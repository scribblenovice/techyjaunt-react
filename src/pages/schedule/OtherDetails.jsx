import { useState } from "react";
import GlobalSelect2 from "../../globalcomponents/GlobalSelect2";
import { courses, howHeard } from "../../resources/resources";

const OtherDetails = ({
  formData,
  formErrors,
  handleSelect2,
  className,
  handleChange,
}) => {
  const [focused, setFocused] = useState(false);
  const today = new Date();
  return (
    <div className={className}>
      <div>
        <label
          htmlFor="skill-choice"
          className="mr-2 font-medium  text-sm text-gray-500"
        >
          Select a date and time for the meeting
        </label>
        <div className="w-full">
          <div>
            <input
              min={today}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              aria-label="Date and time"
              type="datetime-local"
              name="meetingTime"
              value={formData.meetingTime}
              className={`!rounded-none outline-none !border-0 !border-b-[1.5px] transition-all ease-linear duration-200 ${
                formErrors.meetingTime && (focused || !focused)
                  ? "!border-b-red-500"
                  : !formErrors.meetingTime && focused
                  ? "!border-b-blue-500 !border-0"
                  : "!border-b-gray-800"
              } !text-gray-800 ring-0 w-full focus:shadow-none`}
              onChange={handleChange}
            />
            {formErrors.meetingTime && (
              <p className="text-xs text-red-500">{formErrors.meetingTime}</p>
            )}
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="extra"
          className="mr-2 font-medium  text-sm text-gray-500"
        >
          Share any details to help us prepare. We want to understand and solve
          your problems😊 (leave blank if there's nothing else)
        </label>
        <div className="w-full">
          <textarea
          className="resize-none w-full rounded-md focus:!border-[1px] focus:!outline-[5px]"
            name="extraDetails"
            id="extra"
            onChange={handleChange}
            value={formData.extraDetails}
            res
          ></textarea>
          {/* <GlobalSelect2
            menuClass="aria-selected:bg-white aria-selected:text-black text-white bg-black"
            options={howHeard}
            name="knowlegeOfTechyJaunt"
            inputVal={formData.knowlegeOfTechyJaunt}
            handleChange={handleSelect2}
            errorTxt={formErrors?.knowlegeOfTechyJaunt}
          /> */}
        </div>
      </div>
    </div>
  );
};
export default OtherDetails;
