import React from "react";

const UseStateObject = () => {
  const [myObject, setMyObject] = React.useState({
    myName: "Abhi ",
    myAge: 27,
    degree: "BE",
    rollNo: 20,
    Course: " React",
  });

  //if we want to to change only one date from an array so we need to write complete array again along with the changes
  // to ignore this we use spread oper.  it contain entire values of array so we dont need to write array again.

  const changeObject = () => {
    setMyObject({ ...myObject, myAge: 30, Course: "Angular" });
  };

  return (
    <div>
      <h1>
        Name: {myObject.myName} & Age: {myObject.myAge}& Degree:
        {myObject.degree} & Course : {myObject.Course}
      </h1>
      <button  onClick={changeObject}>
        Update The Data
      </button>
    </div>
  );
};

export default UseStateObject;
