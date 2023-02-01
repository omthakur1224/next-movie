import React, { useRef } from "react";
import { useState } from "react";
import {Pin} from "./Pin";
import PropTypes from "prop-types";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [pinLength] = useState(new Array(length).fill(""));
  let inputRef = useRef([]);
  const [otpValue]  =useState(new Array(length).fill(""));

  const handleFocus = (e, index) => {
    otpValue[index] = e.target.value;
    if (e.target.value.length === maxChar && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(otpValue.join(" "))
  };

  const backSpaceHandler = (e, index) => {
    otpValue[index] = e.target.value;
    if (e.target.value.length === 0 && index > 0) {
      inputRef.current[index - 1].focus();
    }

    setOtp(otpValue.join(" "))
  };

  const pasteHandler = (e) => {
    // "123456" ==> " [ '1', '2',...]
    const data = e.clipboardData
    .getData("Text")
    .split("")
    .filter((_,index) => {
      return index < length;
    });

    data.forEach((el, index) => {
      otpValue[index] = el;
      inputRef.current[index].value = el;
      if(e.target.value.length === maxChar && index < length){
        //inputRef.current[index+1].focus(); 
        // --> the above line is making some error while pasting so Tc not paased - but after comment-out all TC accepted
      }
      setOtp(otpValue.join(""));
    })
  }

  return (
    <div onPaste={pasteHandler} data-testid="pin-tab">
      {pinLength?.map((_, index) => {
        return (
        <Pin 
        ref={(e) => {
         inputRef.current[index] = e;
        }}
        key={index} 
        maxChar={maxChar} 
        backSpaceHandler={(e) => backSpaceHandler(e,index)}
        handleFocus={(e) => handleFocus(e,index)}
        />
        )
      })}
    </div>
  );
};

// Check length and maxChar props here
PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number.isRequired,
};