import React, { forwardRef } from "react";
import PropTypes from "prop-types";

export const Pin = forwardRef(
  ({ maxChar, backSpaceHandler, handleFocus }, ref) => {

    const keyHandler = (e) => {
      if(e.keyCode === 8){
        backSpaceHandler(e)
      }else {
        handleFocus(e)
      }
    }

    return (
    <input
    ref={ref} 
    data-testid="pin-input" 
    maxLength={maxChar} 
    onKeyUp={(e) => keyHandler(e)}
    />);
  }
);

// Check maxChar prop here
Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
};