import React, { createContext } from "react";
import CompC from "../HooksComponents/CompC";

const Number = createContext();

const  CompA = () => {
  return (
      <Number.Provider value={" 55 "}>
        <CompC/>
      </Number.Provider>
  );
}
export default  CompA ;
export {Number };