import React from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  const { getState, subscribe } = store;
  // console.log(getState().counter);
  const counter = getState().counter; //get the counter value from the Redux store
  console.log(getState());

  const [forceRender, setForceRender] = React.useState(0);
  subscribe(() => {
    setForceRender(forceRender + 1);
  });
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;