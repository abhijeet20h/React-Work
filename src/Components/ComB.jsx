import React , {useContext} from 'react'
import {FirstName, LastName } from "../App";
export default function ComB() {
    const fname = useContext(FirstName );
    const lname = useContext(LastName );


    return (
        <div>
              <h1>This is {fname}  {lname} </h1>
        </div>
    )
}
