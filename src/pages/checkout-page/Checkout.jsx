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

const Checkout = () => {
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalError, setModalError] = useState(true);
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
    amount: 750000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    // publicKey: import.meta.env.VITE_PUBLIC_TEST_KEY,
    publicKey: 'pk_test_37dcf5501ad10130819defd5bfafe0b988a3c87f',
  };

  const onSuccess = (reference) => {
    axios
      .post("http://localhost:3001/payment", {
        ...formData,
        completedPayment: "yes",
      })
      .then((res) => {
        if (res.data.status === "paid") {
          sessionStorage.setItem("isPaid", true);
          navigate("/checkout/thank-you");
        }
        if (res.data.status === "existing") {
          setModalError(true);
          setOpen(true);
          alert("YOU HAVE PREVIOUSLY PAID FOR THIS COHORT!");
        }
        if (res.data.status === "failed") {
          alert("AN ERROR OCCURED");
        }
      });
  };
  const onClose = () => {
    alert("PAYMENT FAILED");
  };

  // const componentProps = {
  //   ...config,
  //   text: "PAY NOW",
  //   onSuccess: () => {
  //     sessionStorage.setItem("isPaid", true);
  //     axios
  //       .post("https://techyjaunt-kx6a.onrender.com/payment", {
  //         ...formData,
  //         completedPayment: "yes",
  //       })
  //       .then((res) => {
  //         if (res.data.status === "paid") {
  //           // navigate("/checkout/thank-you");
  //           console.log("paid");
  //         }
  //         if (res.data.status === "existing") {
  //           setModalError(true);
  //           setOpen(true);
  //           alert("YOU HAVE PREVIOUSLY PAID FOR THIS COHORT!");
  //         }
  //         if (res.data.status === "failed") {
  //           alert("AN ERROR OCCURED");
  //         }
  //       });
  //     navigate("/checkout/thank-you");
  //   },
  //   onClose: () => {
  //     sessionStorage.setItem("isPaid", false);
  //     alert("YOU HAVE CANCELLED THE TRANSACTION");
  //   },
  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
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

      <section className="grid place-items-center h-screen bg-stone-100">
        <div className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%] p-10 my-20 card">
          <img src={logoImg} alt="" className="scale-150 mx-auto my-5" />
          <h1 className=" text-black text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest">
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
            {/* // <PaystackButtons
            //   className={`mx-auto bg-blue-500 text-white p-4 rounded disabled:true `}
            //   {...componentProps}
            // /> */}
            <PaystackButton
              {...config}
              className="mx-auto bg-blue-500 text-white p-4 rounded"
              text="Pay Now"
              onSuccess={onSuccess}
              onClose={onClose}
            />
          </div>
        </div>
      </section>
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
export default Checkout;
