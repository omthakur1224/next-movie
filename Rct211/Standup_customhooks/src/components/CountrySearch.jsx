import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import Country from "./Country";
import useDebounce from "../hooks/useDebunce";

const CountrySearch = () => {
  const [value, setValue] = useState("");

  const onChangeDebounced = useDebouncedCallback((e) => {
    setValue(e.target.value);
  }, 1000);

  return (
    <div>
      <Country label="value" value={value} onChange={onChangeDebounced} />
    </div>
  );
};

export default CountrySearch;
