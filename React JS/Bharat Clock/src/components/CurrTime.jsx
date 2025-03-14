import { useEffect } from "react";
import { useState } from "react";

const CurrTime = ()=>{
    let [time , setTime] = useState(new Date()) ; 

    useEffect(() =>{
        console.log("interval started ");
        const intervalId = setInterval(() =>{
            setTime(new Date()); 
        }, 1000); 

        return () =>{
            clearInterval(intervalId) ; 
            console.log("interval cancelled");
        }
    }, []); 
    return (
        <>
        <div className="mt-5">
            Curr time : {time.toLocaleDateString()}
        </div>
        <div className="mt-2">
        Curr Date : {time.toLocaleTimeString()}
        </div>
        </>
    )
}

export default CurrTime ; 