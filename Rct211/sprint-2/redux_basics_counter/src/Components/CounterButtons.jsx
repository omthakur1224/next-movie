import React from "react";
import { handleAddActionObj, handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = () => {
  const { dispatch } = store;

  const handleAdd = () => {
    dispatch(handleAddActionObj(1));
    // console.log(getState());
  };
  const handleReduce = () => {
    dispatch(handleReduceActionObj(1));
  };
  return (
    <div data-testid="counterButtons">
      <button onClick={handleAdd} data-testid="addButton">
        ADD
      </button>
      <button onClick={handleReduce} data-testid="reduceButton">
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;