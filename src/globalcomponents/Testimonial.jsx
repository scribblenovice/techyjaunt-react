import { Zoom } from "react-reveal";
import { testimonialInfo } from "../resources/resources"; 
const Testimonial = () => {
  return (
    <div className="py-10 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className=" mx-auto text-center">
          <p className="text-lg leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
            We have successfully onboarded over{" "}
            <span className="text-blue-500"> 10k+</span> people into the tech
            space and trained over <span className="text-blue-500"> 1000+</span>{" "}
            professionals
          </p>
        </div>
        <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          
          {testimonialInfo.map((i)=>{
            return (
              <Zoom>
                <div className="overflow-hidden bg-white rounded-md shadow">
                  <div className="px-8 py-12">
                    <div className="relative w-28 h-28 mx-auto">
                      <img
                        className="relative object-cover w-28 h-28 mx-auto rounded-full"
                        src={i.img}
                        alt=""
                      />
                      <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <blockquote className="mt-7">
                      <p
                        key={i.id}
                        className="font-normal text-base leading-7 text-gray-500"
                      >
                        “{i.writeUp}”
                      </p>
                    </blockquote>
                    <p className="text-base font-semibold tex-tblack mt-9">
                      {i.fullName}
                    </p>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
