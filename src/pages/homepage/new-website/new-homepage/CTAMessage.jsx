import { Fade } from "react-reveal";

const CTAMessage = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center cta-techbg py-5 bg-blend-multiply bg-tech-blue">
      <div className="w-full lg:w-[80%] xl:w-[70%] mx-auto py-16 sm:py-24 lg:py-32 px-1 lg:px-0">
      <Fade bottom>
        <h2 className="text-white text-center text-3xl md:text-4xl xl:text-5xl font-medium">
          Join our growing community of{" "}
          <span className="text-[#FBAF1B]">35,000</span> community members ,
          Professionals trained{" "}
        </h2>
        </Fade>
      </div>
    </div>
  );
};
export default CTAMessage;
