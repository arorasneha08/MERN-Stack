const fruits = [ "sabzi" , "green vegetable" , "mango" , "banana" , "papaya" , "grapes"]; 

const SyntheticEvent = () =>{
    const handleEvent = (item , event) =>{
        console.log(event);  // will get hthe synthetic base event .. 
        
        alert(`${item} purchased`); 
    }
    return (
        <>
        <ul>
            {fruits.map((item) =>{
                return(
                    <ul>
                    <li>{item}</li>
                    <button onClick={(event) => handleEvent(item , event)}>Click me !! </button>
                    </ul>
                )
            })}
        </ul>
        </>
    )
}

export default SyntheticEvent; 