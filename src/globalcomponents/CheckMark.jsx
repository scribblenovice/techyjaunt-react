import { useRef, useState } from "react";
import "./Check.css";

const CheckMark = ({inputRef, checkClass}) => {

  return (
    <div className={checkClass}>
      <input type="checkbox" id="check" className="checkinput" ref={inputRef}/>
      <label for="check" id="checklabel">
         <div class={`check-icon`}></div>
      </label>
    </div>
  );
};
export default CheckMark;
