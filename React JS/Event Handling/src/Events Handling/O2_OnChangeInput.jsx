export const OnChangeInput = () =>{
    const handleChange = (event) =>{
        console.log(event);
        
        console.log(event.target.value); 
    }
    return (
        <>
        <input type="text" onChange={(event) => handleChange(event)}/>
        </>
    )
}