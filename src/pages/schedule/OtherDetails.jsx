import { useState } from "react";
import moment from "moment";

const OtherDetails = ({
  formData,
  formErrors,
  className,
  handleChange,
}) => {
  const [focused, setFocused] = useState(false);
  const today = new Date();
  const minDateTime = today.toISOString().slice(0, 16);
   // Get current date and time in the correct format
   const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

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
              min={getCurrentDateTime()}
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
          className="resize-none focus:ring-0 w-full rounded-md"
            name="extraDetails"
            id="extra"
            onChange={handleChange}
            value={formData.extraDetails}
            res
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default OtherDetails;
