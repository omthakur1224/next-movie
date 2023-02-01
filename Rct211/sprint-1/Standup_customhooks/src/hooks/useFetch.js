import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, params) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url, {
        params: {
          ...params,
        },
      })
      .then(({ data }) => {
        // console.log(data)
        setLoading(false);
        setData(data.items);
      })
      .catch(() => {
        setLoading(false);
        setErr(true);
      });
  }, []);

  return { loading, data, err };
};
