import React, { useEffect, useLayoutEffect } from 'react'

function UseLayoutEffect() {
    useEffect(() =>{
        console.log("message from use effect");
    })

    useLayoutEffect(() =>{
        console.log("message from use layout efect ");
        
    }, []); 

  return (
    <div>
      <h2>Text message </h2>
      {Array(400).fill(" ").map((item, idx) => 
        (<li key={idx}>{Math.pow(Math.random() , 10)}</li>))}
    </div>
  )
}

export default UseLayoutEffect ; 

// print before mounting 
// print after mounting 

// output : 
// message from use layout efect 
//  message from use effect