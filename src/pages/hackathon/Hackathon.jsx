import { Fade } from "react-reveal";
import TypingAnimation from "../../globalcomponents/TypingAnimation";

const Hackathon = () => {
  return (
    <>
      <div className="mx-auto  px-6 lg:px-8 relative isolate overflow-hidden bg-gray-900 bg-blend-multiply bg-cover bg-no-repeat hackathon">
        <Fade bottom>
          <div className="mx-auto h-screen grid place-items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 xl:max-w-none">
            <div className="">
              <h2 className="techy text-center text-3xl md:text-5xl font-bolder tracking-tight text-white sm:text-4xl">
                TECHYJAUNT HACKATHON
              </h2>

              <h3 className="saira text center text-xl font-bold text-center text-white py-5">
                INNOVATE CAMPUS
              </h3>
              <div className="w-full grid place-items-center">
                <TypingAnimation
                  sequenceArray={[
                    "Transforming challenges into technological solutions",
                    5000,
                    "$5000 Innovators in Residence Grant",
                    5000,
                  ]}
                  typingClass="saira text-lg md:text-2xl leading-8 text-gray-300 mx-auto"
                  repeat={Infinity}
                />
              </div>
              <a
                target="_blank"
                href="https://bit.ly/3TnixrP"
                className="text-center block mt-8 mx-auto w-[70%] rounded-md bg-blue-500 transition-all ease-linear duration-300 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 scale"
              >
                REGISTER HERE
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
export default Hackathon;
