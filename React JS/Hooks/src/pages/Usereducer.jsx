import React, { useReducer } from 'react'

function Usereducer() {
    const initialState = {count : 0} ; 

    const reducer = (state , action) => {
        switch(action.type){
            case "INCREASE" : 
                return {count : state.count+1}; 
            case "DECREASE" :
                return {count : state.count-1}; 
            case "INPUT" : 
                return {count : action.payload} ;
            default :
            return state ; 
        }
    }
    const [state , dispatch] = useReducer(reducer , initialState); 

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=> dispatch({type : "INCREASE"})}>increase</button>
      <button onClick={()=> dispatch({type : "DECREASE"})}>decrease</button>
      <br />
      <input type="number" onChange={(e) => dispatch({type : "INPUT", payload : Number(e.target.value)})} value={state.count}/>
    </div>
  )
}

export default Usereducer

// it accepts two arguments :- initial state , dispatch state 