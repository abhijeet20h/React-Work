import React, { useState } from "react";

const UseStateArray = () => {
  const myBioData = [
    {
      id: 0,
      myName: "vinod",
      age: 26,
    },
    {
      id: 1,
      myName: "thapa",
      age: 27,
    },
    {
      id: 2,
      myName: "technical",
      age: 27,
    },
  ];

  const [myArray, setmyArray] = useState(myBioData);

  const clearArray = () => {
    setmyArray([]);
  };

  const removeElem = (id) => {
    alert(" You are going to delete  " + id + "  no data");
    const myNewArray = myArray.filter((d) => {
      return d.id !== id;
    });

    setmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((val) => {
        return (
          <h1 key={val.id}>
            Name:
            {val.myName} & Age: {val.age}
            <button onClick={() => removeElem(val.id)}> remove </button>
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear</button>
    </>
  );
};

export default UseStateArray;
