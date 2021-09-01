import React from "react"
import {FirstName , LastName} from "../App";

export const ComC = () =>{
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <h1>This is {fname} {lname}</h1>
                                )
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}
