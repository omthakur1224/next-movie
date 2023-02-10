import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(5);

  console.log("Parent render");

  const handleClick = useCallback(() => {
    console.log("function");
  }, []);
  
  // const handleClick=()=>{}
  return (
    <div>
      <button onClick={() => setcount1((p) => p + 1)}>count 1: {count1}</button>
      <button onClick={() => setcount2((p) => p + 1)}>count 2: {count2}</button>
      <Child count2={count2} handleClick={handleClick}/>
    </div>
  );
};

export default Parent;
