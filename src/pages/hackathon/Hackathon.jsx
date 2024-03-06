import { Fade, Zoom } from "react-reveal";
import TypingAnimation from "../../globalcomponents/TypingAnimation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HackathonForm from "./Hackathonform";
import axios from "axios";

const Hackathon = () => {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [shake, setShake] = useState(false);
  const countryCode = sessionStorage.getItem("countryCode");
  const [message, setMessage] = useState("");
  const [modalError, setModalError] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    skills: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    skills: formData.skills,
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
      errors.lastname = "enter your first name";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }

    if (formData.phoneNumber.trim().length <= 4) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (formData.skills === "") {
      errors.skills = "enter your skillset";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    console.log(payload);
    if (isValid) {
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-kx6a.onrender.com/hackathon-register", {
          ...payload,
        })
        .then((res) => {
          if (res.data.status === "registered") {
            sessionStorage.setItem("hackathon-registered", true);
            navigate("/hackathon/thank-you");
          }
          if (res.data.status === "existing") {
            setModalError(true);
            setOpen(true);
            setMessage("THIS EMAIL ALREADY EXISTS!");
          }
          if (res.data.status === "failed") {
            setModalError(true);
            setOpen(true);
            setMessage("REGISTRATION FAILED! PLEASE TRY AGAIN");
          }
        });
    }
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const aboutArray = [
    "$5000 up for grabs",
    "Pitching competition (Traveling & accommodation covered)",
    " $100 for all participating teams",
    " Assistance throughout the product launch process",
  ];
  return (
    <>
      <HackathonForm
        open={open}
        close={() => {
          setOpen(false);
        }}
        openModal={openModal}
        message={message}
        modalError={modalError}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        formData={formData}
        handleChange2={(phone, e) => {
          setPhone(phone);
          setFormData({
            ...formData,
            phoneNumber: phone,
          });
        }}
        shake={shake}
        closeModal={() => {
          setOpenModal(false);
          setFormErrors({});
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: ""
          });
        }}
      />
      <section className="hackathon h-fit lg:h-screen grid place-items-center bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover">
        <div className="py-20 mx-auto w-[90%] sm:w-[80%]">
          <div className="grid grid-cols-1 gap-x-10 gap-y-5">
            <div className="aboutWriteUp p-5">
              <Fade bottom>
                <h2 className="text-white text-center text-xl lg:text-3xl font-black md:text-3xl">
                  VIRTUAL AND PHYSICAL HACKATHON{" "}
                </h2>
              </Fade>
              <div>
                <Fade bottom>
                  <div className="saira text-left md:text-center leading-8 py-5 text-white">
                    Innovate on campus transforming challenges into
                    technological solutions. $5000 Innovators in Residence
                    Grant! Scheduled to run from the 9th to 15th of March 2024.
                    The venue location is virtual. Top projects then get invited
                    physically to pitch their solutions. Highlights of this
                    hackathon include:
                  </div>
                </Fade>
                <Fade bottom>
                  <div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="text-center saira block mx-auto w-[70%] rounded-md bg-blue-500 transition-all ease-linear duration-300 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      REGISTER HERE
                    </button>
                  </div>
                </Fade>
                <div className="grid grid-cols-2 gap-y-7 gap-x-2 py-5">
                  {aboutArray.map((el) => {
                    return (
                      <Zoom>
                        <div className="grid grid-cols-9">
                          <div className="">
                            <i className="ri-check-line text-xs bg-blue-500 w-5 h-5 rounded-full grid place-items-center text-white"></i>
                          </div>
                          <p className="saira ml-2 col-span-8 text-white text-base">
                            {el}
                          </p>
                        </div>
                      </Zoom>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hackathon;
