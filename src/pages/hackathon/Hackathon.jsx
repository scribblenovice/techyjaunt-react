import { Fade, Zoom } from "react-reveal";
import TypingAnimation from "../../globalcomponents/TypingAnimation";

const Hackathon = () => {
  const aboutArray = [
    "$5000 up for grabs",
    "Pitching competition (Traveling & accommodation covered)",
    " $100 for all participating teams",
    " Assistance throughout the product launch process",
  ];
  return (
    <>
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
                    <a
                      target="_blank"
                      href="https://bit.ly/3TnixrP"
                      className="text-center saira block mx-auto w-[70%] rounded-md bg-blue-500 transition-all ease-linear duration-300 px-3.5 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      REGISTER HERE
                    </a>
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
