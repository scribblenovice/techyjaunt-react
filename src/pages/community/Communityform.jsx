import { Button, Modal } from "flowbite-react";
import GlobalText from "../../globalcomponents/GlobalText";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import { hackathonSkills, state } from "../../resources/resources";
import NavLinks from "../../globalcomponents/NavLinks";

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
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>TECHYJAUNT COMMUNITY SIGN UP</Modal.Header>
        <Modal.Body>
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
                  className="mr-2 font-medium  text-sm text-gray-500"
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
export default CommunityForm;
