import React, { useCallback, useState } from 'react'
import Header from '../Header';

function Usecallback() {
    const [count , setCount] = useState(0);
    // const newFun = () =>{}

        const newFun = useCallback(() =>{

        }, []) ; 
  return (
    <div>
      <Header newFun={newFun}/>
        <h1>count : {count}</h1>
        <button onClick={() => setCount(prev => prev+1)}>Click here </button>
    </div>
  )
}

export default Usecallback ; 

// here we passed the data via props and the header is re rendered again and again even if the React.memo is used .. 

// it is happening due to referential Equality :- 
// const f1= () =>{
//     console.log("hello");
// }
// const f2 = () =>{
//     console.log("hello");
// }
// f1 === f2 :- false  

// when tthe component is re-rendered it is creating a new instance of the same function which are not equal ..

// passing func via props means to the component that a new function is passed every time , so it is rendering again and agaian 


// use callback will help by rendering the component only once as it will cached the given function and if the props is same , it will used the cached function again ... hence avoid re rendering 