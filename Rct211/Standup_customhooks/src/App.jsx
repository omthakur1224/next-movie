import { useState } from "react";
import "./App.css";
import CountrySearch from "./components/CountrySearch";
import ToggleButton from "./components/ToggleButton";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [value, setvalue] = useState("");

  // const onChageDebunce=useDebou

  return (
    <div className="App">
      <ToggleButton />

      <CountrySearch />
    </div>
  );
}

export default App;
