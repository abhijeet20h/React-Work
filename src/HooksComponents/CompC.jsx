import React, { useContext } from "react";
import { num } from "../App";
import {Number} from "./CompA";
export default function CompC() {
    const numb = useContext(num);

  const no = useContext(Number);

  return (
    <div>
      <h1>Hello Comp C</h1>
      <h2> Number OF App  Is {numb} </h2>
      <h2> Number OF A comp Is {no} </h2>

    </div>
  );
}
