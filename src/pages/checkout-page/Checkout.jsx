import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalText from "../../globalcomponents/GlobalText";
import { courses } from "../../resources/resources";
import { PaystackButton } from "react-paystack";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import logoImg from "../../images/techy_jaunt_logo.svg";
import axios from "axios";
import { Modal } from "flowbite-react";
import { useSnackbar } from "notistack";
import Loader from "../../globalcomponents/Loader";

const Checkout = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [pending, setPending] = useState(false);
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedCourse: "",
  });
  const capitalizeFirstLetter = (sentence) => {
    return sentence
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  const firstName = capitalizeFirstLetter(formData.firstName.trim());
  const lastName = capitalizeFirstLetter(formData.lastName.trim());

  const payload = {
    firstName: firstName,
    lastName: lastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    selectedCourse: formData.selectedCourse,
  };
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstname = "enter your first name";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastname = "enter your last name";
      isValid = false;
    }

    if (formData.phoneNumber.trim().length <= 4) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }
    if (formData.selectedCourse === "") {
      errors.selectedCourse = "select an option";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // paystack
  const [reference, setReference] = useState("");
  // const publicKey = import.meta.env.VITE_PUBLIC_TEST_KEY;
  const publicKey = "sk_test_6fb27b676acdd12e4e3bf7284e1fe5a758def421";
  const callbackUrl = "https://www.techyjaunt.com/verify";
  const initializePayment = async () => {
    const isValid = validateForm();
    const paymentDetails = {
      email: formData.email,
      amount: 750000, // Convert to kobo
      reference: new Date().getTime().toString(),
      callback_url: callbackUrl,
      metadata: {
        custom_fields: [
          {
            display_name: "First Name",
            variable_name: "first_name",
            value: firstName,
          },
          {
            display_name: "Last Name",
            variable_name: "last_name",
            value: lastName,
          },
          {
            display_name: "Email Address",
            variable_name: "email_address",
            value: formData.email,
          },
          {
            display_name: "Course",
            variable_name: "course_name",
            value: formData.selectedCourse,
          },
        ],
      },
    };
    if (isValid) {
      setPending(true);
      try {
        const response = await axios.post(
          "https://api.paystack.co/transaction/initialize",
          paymentDetails,
          {
            headers: {
              Authorization: `Bearer ${publicKey}`,
            },
          }
        );
        const { authorization_url } = response.data.data;
        setReference(response.data.data.reference);
        localStorage.setItem("paymentReference", reference);
        localStorage.setItem("formData", JSON.stringify(payload));
        window.location.href = authorization_url;
      } catch (error) {
        handleSnackbar("an error occured", "error");
      }
      setTimeout(() => {
        setPending(false);
      }, 3000);
    } else {
      setPending(false);
      handleSnackbar("please complete the form", "error");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      {/* <div className="flex justify-center items-center flex-col w-screen h-screen">
        <h1 className="text-black text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest">
          THIS PAGE IS CURRENTLY INACTIVE
        </h1>
        <p className="my-5">
          Please go back to{" "}
          <Link className="text-blue-500" to="/">
            TechyJaunt.com
          </Link>
        </p>
      </div> */}

      <section className="grid place-items-center w-screen bg-stone-100 px-4">
        <div className=" md:w-[75%] lg:w-[60%] p-4 md:p-10 my-20 card mx-auto">
          <img src={logoImg} alt="" className="scale-150 mx-auto my-5" />
          <h1 className=" text-black text-center font-black text-base md:text-2xl xl:text-3xl tracking-widest">
            <span className="techy text-blue-500">TECHYJAUNT</span> SCHOLARSHIP
          </h1>
          <p className="text-center py-5 font-medium text-sm md:text-lg leading-8">
            Kickstart your Tech journey, learn tech skills & gain access to a 6
            month mentorship with industry experts. Gain access now!
          </p>
          <div className="w-full grid grid-cols-1 gap-y-5 gap-x-5">
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
                  placeTxt={`enter your first name`}
                  isRequired={true}
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
                  placeTxt={`enter your last name`}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div>
                <label
                  htmlFor="amount"
                  className="font-medium text-sm text-gray-500"
                >
                  Amount to be paid
                </label>
                <GlobalText
                  id="amount"
                  inputVal={`NGN: 7500`}
                  isDisabled={true}
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
                  placeTxt={`enter your email`}
                  isRequired={true}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 gap-y-5">
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Phone Number
                </label>
                <PhoneNumber
                  bg="white"
                  id="phone"
                  inputName="phoneNumber"
                  handleChange={(phone, e) => {
                    setPhone(phone);
                    setFormData({
                      ...formData,
                      phoneNumber: phone,
                    });
                  }}
                  errorTxt={formErrors.phoneNumber}
                />
              </div>

              <div className="">
                <label
                  htmlFor="skill-choice"
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  Select your course
                </label>
                <div className="w-full">
                  <GlobalSelect
                    options={courses}
                    name="selectedCourse"
                    inputVal={formData.selectedCourse}
                    handleChange={(e) => {
                      setFormData({
                        ...formData,
                        selectedCourse: e,
                      });
                    }}
                    errorTxt={formErrors.selectedCourse}
                  />
                </div>
              </div>
            </div>
            <button
              onClick={initializePayment}
              className="mx-auto bg-blue-500 text-white p-4 rounded"
            >
              Pay Now
            </button>
          </div>
        </div>
      </section>
      {pending && <Loader />}
    </>
  );
};
export default Checkout;
