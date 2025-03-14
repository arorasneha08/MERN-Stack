import React, { useEffect, useRef, useState } from 'react'

function Useref() {
    const [value , setValue] = useState(0) ; 
    // const [count , setCount] = useState(0); 

    // useEffect(() =>{
    //     setCount(prev => prev+1); 

    // }); 

    // get into infinite loop .... 

    // we will use useRef hook to avoid uncessary painting of all components 

    const count = useRef(0);
    // console.log(count);
    useEffect (() =>{
        count.current = count.current+1 ; 
    })

  return (
    <div>
      <button onClick={() => {setValue(prev => prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={() => {setValue(prev => prev+1)}}>+1</button>
      <h1>Rendered count : {count.current}</h1>
    </div>
  )
}

export default Useref; 
