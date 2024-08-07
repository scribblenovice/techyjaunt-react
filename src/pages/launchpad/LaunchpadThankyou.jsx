import axios from "axios";
import { useEffect, useState } from "react";

const LaunchPadThankyou = () => {
  const [whatsappLink, setWhatsappLink] = useState("");
  useEffect(() => {
    axios.get("https://techyjaunt-kx6a.onrender.com/get-link").then((res) => {
      setWhatsappLink(res?.data?.data?.fields?.NewLink);
    });
  }, []);
  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="grid place-items-center w-[90%] sm:w-[80%] gap-y-5">
          <i
            className={`ri-checkbox-circle-line text-green-300 text-9xl lg:text-[200px]`}
          ></i>
          <p className="text-center text-xl sm:text-2xl md:text-3xl text-white font-bold">
            Thank you for applying, but Cohort 4 applications are now closed. We
            have, however, added you to the waitlist for our next cohort. Join
            our WhatsApp community for more updates
            {/* YOU HAVE SUCCESSFULLY REGISTERED FOR TECHYJAUNT COHORT 4! <br />
            <span className="text-sm md:text-base">
              {" "}
              WE HAVE SENT YOU A CONFIRMATION EMAIL REGARDING YOUR APPLICATION.
              KINDLY JOIN OUR WHATSAPP COMMUNUITY FOR MORE INFORMATION USING THE
              LINK BELOW.
            </span> */}
          </p>
          <a
            target="_blank"
            href={whatsappLink}
            // onClick={redirect}
            className="flex items-center  bg-white text-blue-500 px-5 py-3 rounded-md font-bold hover:scale-105 transition-all ease-in duration-300"
          >
            JOIN OUR WHATSAPP COMMUNITY{" "}
            <div className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#128c7e" }}
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default LaunchPadThankyou;
