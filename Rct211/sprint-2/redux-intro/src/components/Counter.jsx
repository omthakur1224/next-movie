import React, { useState } from "react";
import { addAction, reduceAction } from "../redux/action";
import { store } from "../redux/store";

export const Counter = () => {
  const [forceRender, setForceRender] = useState(0);
  const { getState, dispatch, subscribe } = store;
  console.log("Re-rendered");
  subscribe(() => {
    setForceRender((prev) => prev + 1);
  });
  const handleAdd = () => {
    dispatch(addAction(1));
    console.log(getState());
  };
  const handleReduce = () => {
    dispatch(reduceAction(1));
    console.log(getState());
  };
  return (
    <div>
      <h1>Counter:{getState().counter}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};

/*

store = {
    counter: 0,
    todos: []
}

console.log(store.counter)  // You can
store.counter++ // You can't

dispatcher(action)



*/
