import './App.css';
import ClassComponent from './Components/ClassComponent'
import Ex1 from './Components/Ex1';
import ComA from './Components/ComA';
import React , {createContext}  from "react"

const FirstName = createContext();
const LastName =  createContext();
function App() {
  return (
    <>
    <Ex1/>
    <hr/>
    <FirstName.Provider value={"React"}>
      <LastName.Provider value={"Tutorial "}>
        <ComA/>
      </LastName.Provider>
    </FirstName.Provider>
    <hr/>

    <ClassComponent/>
    </>

  );
}

export default App;
export {FirstName, LastName}