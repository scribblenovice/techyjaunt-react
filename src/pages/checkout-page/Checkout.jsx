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
import useCustomSnackbar from "../../hooks/UseCustomSnackbar";
import Loader from "../../globalcomponents/Loader";

const Checkout = () => {
  const [pending, setPending] = useState(false);
  const { handleSnackbar } = useCustomSnackbar();
  const [shake, setShake] = useState();
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedCourse: "",
  });
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
  const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: 790000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: import.meta.env.VITE_PUBLIC_TEST_KEY,
    onSuccess: (reference) => onSuccess(reference),
    onClose: () => onClose(),
    metadata: {
      customFields: [
        {
          display_name: "Full Name",
          variable_name: "full_name",
          value: `${formData.firstName} ${formData.lastName}`,
        },
        {
          display_name: "Email address",
          variable_name: "email_address",
          value: formData.email,
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: formData.phoneNumber,
        },
        {
          display_name: "Selected course",
          variable_name: "selected_course",
          value: formData.selectedCourse,
        },
      ],
    },
  };

  const onSuccess = (reference) => {
    setPending(true);
    axios
      .post("https://techyjaunt-react.onrender.com/payment", {
        ...formData,
        completedPayment: "yes",
      })
      .then((res) => {
        if (res?.data?.status === "paid") {
          sessionStorage.setItem("isPaid", true);
          navigate("/checkout/thank-you");
        }
        if (res?.data?.status === "existing") {
          handleSnackbar("YOU HAVE PREVIOUSLY PAID FOR THIS COHORT!", "error");
        }
        if (res?.data?.status === "failed") {
          handleSnackbar("AN ERROR OCCURED", "error");
        }
      });
  };
  const onClose = () => {
    handleSnackbar("PAYMENT FAILED", "error");
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
      <div className="flex justify-center items-center flex-col w-screen h-screen">
        <h1 className="text-black text-center font-black text-xl md:text-2xl lg:text-3xl tracking-widest">
          The payment portal for TechyJaunt Cohort 5 is now closed.
        </h1>{" "}
        <p className="my-5">
          Please stay connected with our social media channels and community to
          get updates about our next cohort starting in April 2025
        </p>
        <p className="my-5">
          Visit {" "}
          <Link className="text-blue-500" to="/">
            TechyJaunt.com
          </Link>
        </p>
      </div>
      {/* {pending && <Loader />}
      <section className="grid place-items-center h-screen bg-stone-100">
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] p-10 my-20 card mx-auto">
          <img src={logoImg} alt="" className="scale-150 mx-auto my-5" />
          <h1 className=" text-black text-center font-black text-xl md:text-2xl xl:text-3xl tracking-widest">
            <span className="techy text-blue-500">TECHYJAUNT</span>
            SCHOLARSHIP
          </h1>
          <p className="text-center py-5 font-medium text-base md:text-lg leading-8">
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
                  inputVal={`NGN: ${config.amount / 100}`}
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
            <PaystackButton
              {...config}
              className="mx-auto bg-blue-500 text-white p-4 rounded"
              text="Pay Now"
              onSuccess={onSuccess}
              onClose={onClose}
            />
          </div>
        </div>
      </section> */}
    </>
  );
};
export default Checkout;
