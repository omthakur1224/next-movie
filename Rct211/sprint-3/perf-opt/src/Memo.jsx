import React, { useState, useMemo } from "react";

function Memo() {
  const [count2, setCount2] = useState(0);
  const [count1, setCount1] = useState(0);

  //useMemo
  const handleClick = useMemo(()=> {
    let i = 0;
    console.log("Function render");
// fibonacchi number --> 0 

    while (i < 20000) i++;

    return count1 % 2 === 0 ? "Even" : "Odd";
  }, [count1])

//   const handleClick = () => {
//     let i = 0;
//     console.log("Function render");
//     while (i < 5000000000) i++;

//     return count1 % 2 === 0 ? "Even" : "Odd";
//   };

  return (
    <div>
      <button onClick={() => setCount1((p) => p + 1)}>Count 1: {count1}</button>
      <h2>{handleClick}</h2>
      <button onClick={() => setCount2((p) => p + 1)}>
        Count 2 : {count2}
      </button>
    </div>
  );
}

export default Memo;
