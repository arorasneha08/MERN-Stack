import React, { useMemo, useState } from "react";

function Usememo() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num) {
    console.log("calculation done !! ");
    return Math.pow(num, 3);
  }

//   const result = cubeNum(number);


// using useMemo :- 
    const result = useMemo(() =>{
        return cubeNum(number)
    }, [number]) ; 
  return (
    <div>
      <input
        type="number"
        placeholder="Enter number "
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
      />
      <h1>Cube of number : {result}</h1>
      <button onClick={() => setCounter(counter+1)}>counter++ </button>
      <h1>counter : {counter}</h1>
    </div>
  );
}

export default Usememo;

// use memo returns a memoised value
// usecallback returns a memoised function


// without memo :- clicking on counter++ , is also printing the CALCULATION DONE message , not even changed the value of the number 

// using memo:- it will render the value only when the value is changed