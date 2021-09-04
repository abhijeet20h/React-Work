import React, { useState } from "react";

export default function Todolist() {
  const myBioData = [
    {
      id: 0,
      myName: "Angular",
      age: 26,
    },
    {
      id: 1,
      myName: "React js",
      age: 27,
    },
    {
      id: 2,
      myName: "Vue",
      age: 27,
    },
  ];

  const [myArray, setmyArray] = useState(myBioData);
  const onRemove = (id) => {
    const newArray = myArray.filter((v) => {
      return v.id !== id;
    });
    setmyArray(newArray);
  };
  return (
    <>
      {myArray.map((value) => {
        return (
          <h2 key={value.id}>
            <div className="container">
              <div class=" table-dark d-flex">
                <h4 className="m-4"> {value.myName}</h4>
                <h4 className="m-4">
                  <button
                    className="btn btn-danger"
                    onClick={(id) => onRemove(value.id)}
                  >
                    Remove
                  </button>
                </h4>
              </div>
            </div>
          </h2>
        );
      })}
    </>
  );
}
