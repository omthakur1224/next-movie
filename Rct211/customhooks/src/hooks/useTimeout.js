import { useEffect, useState } from "react";

const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let id = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(id);
  }, []);

  return { ready };
};

export default useTimeout;
