import { TypeAnimation } from "react-type-animation";
const TypingAnimation = ({typingClass, sequenceArray, repeat}) => {
  return (
      <TypeAnimation
        sequence={sequenceArray}
        className={typingClass}
        wrapper="span"
        speed={10}
        deletionSpeed={5}
        style={{ display: "inline-block" }}
        repeat={repeat}
      />
    );
};
export default TypingAnimation;