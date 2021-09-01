import React, { useEffect, useState } from 'react'

export default function Ex1() {

    const [ count ,  setCount ] = useState(0);
 function onChangeInc(){
     setCount(count+1)
 }
 function onChangeDec(){
    setCount(count-1)
}

 useEffect(()=>{
 alert("Use Effect Run")
 } , [])

    return (
        <div>
        <p> You clicked {count} times </p>
            <button onClick={ onChangeInc }> Inc   </button>   <br/>
            <button onClick={ onChangeDec }> Dec   </button>

        </div>
    )
}
