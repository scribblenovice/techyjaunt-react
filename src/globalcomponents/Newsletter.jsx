import { useState } from "react";
import { Button, Modal, ModalHeader } from "flowbite-react";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";

const NewsLetter = () => {
  const [message, setMessage] = useState("")
  const [modalError, setModalError] = useState(true)
  const [openModal, setOpenModal] = useState(false);
  const [emailSubscriber, setEmailSubscribe] = useState({
    subscriberName: "",
    email: "",
  });
 const [formErrors, setFormErrors] = useState({});

 const validateForm = () => {
   let errors = {};
   let isValid = true;

   if (!emailSubscriber.subscriberName.trim()) {
     errors.subscriberName = "enter your name";
     isValid = false;
   }

   if (!emailSubscriber.email.trim()) {
     errors.email = "email is required";
     isValid = false;
   } else if (!/\S+@\S+\.\S+/.test(emailSubscriber.email)) {
     errors.email = "enter a valid email address";
     isValid = false;
   }
   setFormErrors(errors);
   return isValid;
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   const isValid = validateForm();

   if (isValid) {
     // Submit the form data or perform other actions
     axios
       .post("https://techyjaunt-kx6a.onrender.com/subscribe", {
         ...emailSubscriber,
       })
       .then((res) => {
         if (res.data.status === "subscribed") {
           setModalError(false);
           setOpenModal(true);
           setMessage("YOU HAVE SUCCESSFULLY SUBSCRIBED FOR OUR NEWSLETTER!");
         }
         if (res.data.status === "existing") {
           setModalError(true);
           setOpenModal(true);
           setMessage("SUBSCRIBER ALREADY EXISTS!");
         }
         if (res.data.status === "invalid") {
           setModalError(true);
           setOpenModal(true);
           setMessage("PLEASE FILL IN THE CORRECT PARAMETERS!");
         }
       });
   }else{
        setModalError(true)
        setOpenModal(true)
        setMessage("PLEASE FILL OUT THE FORM CORRECTLY!")
       }
 };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailSubscribe({
      ...emailSubscriber,
      [name]: value,
    });
  };

  return (
    <section className="py-20 text-center lg:text-left bg-stone-100">
      <div className="relative isolate overflow-hidden py-16 bg-gray-900 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 xl:max-w-none xl:grid-cols-2">
            <div className="max-w-xl xl:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 block xl:hidden">
                We provide you with weekly updates of happenings in the African
                technology ecostystem
              </p>
              <form
                className="mx-auto mt-6 grid place-items-center"
                method="/subscribe"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-2 gap-x-5">
                  <div>
                    <label htmlFor="name" className="text-white">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="subscriberName"
                      type="text"
                      onChange={handleChange}
                      required
                      className="min-w-0 w-full my-2 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-address" className=" text-white">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      required
                      className="min-w-0 w-full my-2 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="mx-auto mt-5 rounded-md bg-blue-500 transition-all ease-linear duration-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <dl className="xl:grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2 hidden">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  We provide you with weekly updates of happenings in the
                  African technology ecostystem.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                    />
                  </svg>
                </div>
                <dt className="mt-4 font-semibold text-white">Detailed</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Our newsletter is well detailed and on point
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        position='center'
      >
        <Modal.Header className="border-none h-2"></Modal.Header>

        <Modal.Body className="p-14 md:p-20 grid place-items-center gap-y-5">
          <div className={`${modalError ? "block" : "hidden"}`}>
            <i
              className={`ri-error-warning-line text-red-500 text-5xl`}
            ></i>
          </div>
          <div className={`${!modalError ? "block" : "hidden"}`}>
            <i
              className={`ri-checkbox-circle-line text-green-500 text-5xl`}
            ></i>
          </div>
          <div className="text-xl md:text-2xl text-center">{message}</div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
export default NewsLetter;
