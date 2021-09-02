import React, { useState } from 'react'

export default function Toggle() {
    const [name , setName ]= useState("React")
const toggleEvent =()=>{
    let val = name
    if ( val ===  "React" ){
        setName("Angular") 
    }else {
        setName("React") 

    }
  
}

    return (
        <div> 
        <h1>{name}</h1>
            <button onClick={toggleEvent}>Click Me </button>
        </div>
    )
}
