import { useState } from "react";

export const useToggle = (data) => {
  const [item, setItem] = useState(data[0]);
  const [count, setCount] = useState(1);
  const toggle = () => {
    setCount((prev) => {
      setItem(data[prev]);
      return prev === data.length - 1 ? 0 : prev + 1;
    });
  };

  return [toggle, item];
};
