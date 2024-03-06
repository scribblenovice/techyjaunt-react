import { TypeAnimation } from "react-type-animation";
const TypingAnimation = ({typingClass, sequenceArray, repeat}) => {
  return (
      <TypeAnimation
        sequence={sequenceArray}
        className={typingClass}
        wrapper="span"
        speed={50}
        deletionSpeed={50}
        style={{ display: "inline-block" }}
        repeat={repeat}
      />
    );
};
export default TypingAnimation;