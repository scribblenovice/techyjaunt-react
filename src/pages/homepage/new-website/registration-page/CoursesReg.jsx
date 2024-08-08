import GlobalSelect2 from "../../../../globalcomponents/GlobalSelect2";
import { courses, howHeard } from "../../../../resources/resources";

const CoursesReg = ({
  formData,
  formErrors,
  handleSelect1,
  handleSelect2,
  className,
}) => {
  return (
    <div className={className}>
      <div>
        <label
          htmlFor="skill-choice"
          className="mr-2 font-medium  text-sm text-gray-500"
        >
          Which course would you like to take?
        </label>
        <div className="w-full">
          <GlobalSelect2
            options={courses}
            name="selectedCourse"
            inputVal={formData.selectedCourse}
            handleChange={handleSelect1}
            errorTxt={formErrors?.selectedCourse}
            menuClass="aria-selected:bg-white aria-selected:text-black text-white bg-black"
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
          <GlobalSelect2
            menuClass="aria-selected:bg-white aria-selected:text-black text-white bg-black"
            options={howHeard}
            name="knowlegeOfTechyJaunt"
            inputVal={formData.knowlegeOfTechyJaunt}
            handleChange={handleSelect2}
            errorTxt={formErrors?.knowlegeOfTechyJaunt}
          />
        </div>
      </div>
    </div>
  );
};
export default CoursesReg;
