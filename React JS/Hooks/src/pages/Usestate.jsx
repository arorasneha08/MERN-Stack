import React, { useState } from 'react'

function Usestate() {
    const [car , setCar] = useState({
        brand : "Ferrari", 
        model : "roma" ,
        year : 2023, 
        color : "red" 
    })

    const changeColor = () =>{
        setCar((car) =>{
            return {...car , color: "blue"}
        })
    }
  return (
    <div>
        <p>my car is {car.brand} , model : {car.model} , color : {car.color}</p>
        <button onClick={changeColor}>Change color </button>
    </div>
  )
}

export default Usestate; 
