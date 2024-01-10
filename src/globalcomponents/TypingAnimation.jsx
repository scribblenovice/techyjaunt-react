import { TypeAnimation } from "react-type-animation";
const TypingAnimation = ({typingClass}) => {
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
          "BACKEND DEVELOPMENT",
          2000,
           "CYBER SECURITY",
          2000,
        ]}
        className={typingClass}
        wrapper="span"
        speed={50}
        deletionSpeed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    );
};
export default TypingAnimation;