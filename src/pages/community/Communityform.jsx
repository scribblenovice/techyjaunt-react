import { Button } from "flowbite-react";
import GlobalText from "../../globalcomponents/GlobalText";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import { hackathonSkills, state } from "../../resources/resources";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: '90vh', // Restrict modal height
  overflowY: 'auto',  // Enable scrollbar
  p: 4,
};

const CommunityForm = ({
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
  close,
}) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="rounded-lg w-[90%] md:w-[80%] xl:w-[60%]">
          <button
            onClick={closeModal}
            className="text-red-500 absolute text-3xl top-4 right-4"
          >
            <i class="ri-close-circle-line"></i>
          </button>
          <h2 className="text-center font-semibold my-2 text-lg md:text-xl">
            TECHYJAUNT COMMUNITY SIGN UP
          </h2>
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            method="POST"
            action="/event-register"
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
                  inputType="text"
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
                  inputType="text"
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
                  errorTxt={formErrors.phoneNumber}
                />
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="font-medium text-sm text-gray-500"
                >
                  Email Address
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
            <div className="relative w-full group text-gray-500 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-y-5">
              <div>
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  Your State of Residence?
                </label>
                <div className="w-full">
                  <GlobalSelect
                    menuClass={`h-44 bg-black text-white`}
                    options={state}
                    name="stateAttendedFrom"
                    inputVal={formData.state}
                    handleChange={handleSelect2}
                    errorTxt={formErrors.state}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500 whitespace-nowrap"
                >
                  What are your skills in relation to tech?
                </label>
                <GlobalSelect
                  menuClass={`h-44 bg-black text-white`}
                  options={hackathonSkills}
                  name="stateAttendedFrom"
                  inputVal={formData.skills}
                  handleChange={handleSelect1}
                  errorTxt={formErrors.skills}
                />
              </div>
            </div>
            {/* <Modal.Footer> */}
            <div className="w-full flex justify-center">
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
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default CommunityForm;
