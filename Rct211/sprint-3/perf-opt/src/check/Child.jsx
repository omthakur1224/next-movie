import React from "react";

const Child = ({ count2, handleClick }) => {
  console.log("child render");

  return (
    <div>
      <p>{count2}</p>
    </div>
  );
};

export default React.memo(Child);
