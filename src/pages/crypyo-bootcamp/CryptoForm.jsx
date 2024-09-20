import { Button, Modal } from "flowbite-react";
import GlobalText from "../../globalcomponents/GlobalText";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import {
  cryptoCourse,
  cryptoKnowledge,
  gender,
  hackathonSkills,
  state,
} from "../../resources/resources";
import { useEffect, useState } from "react";

const CryptoForm = ({
  phoneval,
  openModal,
  closeModal,
  handleChange,
  handleSubmit,
  formErrors,
  formData,
  handleSelect1,
  handleSelect2,
  handleSelect3,
  handleChange2,
  shake,
}) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      const countriesData = data.map((country) => ({
        name: country.name,
        image: country.flags.svg,
      }));
      const filteredCountries = countriesData.filter((country) => {
        return country.name != "Nigeria";
      });
      const filtered = [
        { name: "Nigeria", image: "https://flagcdn.com/ng.svg" },
        ...filteredCountries,
      ];
      setCountries(filtered);
    };

    fetchCountries();
  }, []);

  return (
    <>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>CRYPTO SCHOLARSHIP REGISTRATION</Modal.Header>
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
                  htmlFor="crypto-course"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  Course of interest
                </label>
                <div className="w-full">
                  <GlobalSelect
                    menuClass={`h-44 bg-black text-white`}
                    options={cryptoCourse}
                    inputName="cryptoCourse"
                    inputVal={formData.cryptoCourse}
                    handleChange={handleSelect2}
                    errorTxt={formErrors.cryptoCourse}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  Current Crypto Knowledge
                </label>
                <GlobalSelect
                  menuClass={`bg-black text-white`}
                  options={cryptoKnowledge}
                  name="stateAttendedFrom"
                  inputVal={formData.cryptoKnowledge}
                  handleChange={handleSelect1}
                  errorTxt={formErrors.cryptoKnowledge}
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
    </>
  );
};
export default CryptoForm;
