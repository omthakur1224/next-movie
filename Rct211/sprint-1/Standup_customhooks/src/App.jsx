import { useState } from "react";
import "./App.css";
import CountrySearch from "./components/CountrySearch";
import Fetch from "./components/Fetch";
import ToggleButton from "./components/ToggleButton";
import { useToggle } from "./hooks/useToggle";

function App() {
  const [value, setvalue] = useState("");

  // const onChageDebunce=useDebou

  return (
    <div className="App">
      <ToggleButton />
{/* <Fetch/> */}
      <CountrySearch />


    </div>
  );
}

export default App;
