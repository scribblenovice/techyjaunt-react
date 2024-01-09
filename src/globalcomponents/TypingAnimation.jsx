import { TypeAnimation } from "react-type-animation";
const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          "DATA ANALYSIS",
          2000,
          "UI/UX DESIGN",
          2000,
          "PRODUCT MANAGEMENT",
          2000,
          "FRONTEND DEVELOPMENT",
          2000,
          "FRONTEND DEVELOPMENT",
          2000,
           "CYBER SECURITY",
          2000,
        ]}
        className="text-blue-500 text-2xl sm:text-3xl md:text-5xl lg:text-7xl "
        wrapper="span"
        speed={50}
        deletionSpeed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    );
};
export default TypingAnimation;