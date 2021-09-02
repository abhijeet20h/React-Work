import "./App.css";
import ClassComponent from "./Components/ClassComponent";
import Ex1 from "./Components/Ex1";
import ComA from "./Components/ComA";
import React, { createContext } from "react";
import CompA from "./HooksComponents/CompA";
import name from './ToggleExample/Toggle'
import Toggle from "./ToggleExample/Toggle";
import UseStateArray from './UsestateArray/UseStateArray'
import UseStateObject from './UseStateObjectSPREADoper/UseStateObject'
const FirstName = createContext();
const LastName = createContext();
const num = createContext();
function App() {
  return (
    <>
      <Ex1 />
      <hr />
      <FirstName.Provider value={"React"}>
        <LastName.Provider value={"Tutorial "}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
      <hr />

      <ClassComponent />

      <hr />
<num.Provider value={"100"}>
  <CompA />
</num.Provider>
      <hr/>
      <Toggle/>
      <hr/>
      <UseStateArray/>
      <hr/>
      <UseStateObject/>

    </>
  );
}

export default App;
export { FirstName, LastName , num };
