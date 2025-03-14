import styled from 'styled-components';

// using this method we can create our own objects of css and use them 
// here we do not need to define any classes , we can just do it manually 
// using {} braces 
const Snehabutton  = styled.button({
    padding: "10px" ,
    // note : here we can not use hyphen , we need to convert it into pascal case 
    // backgroundColor: `${rating >= 8.5 ? "red" : "yellow"}` , 
    color: "white" , 
    border: "none", 
    borderRadius: "4px" , 
    cursor: "pointer" , 
    backgroundColor: "black", 
}); 

// using backticks :-
const RatingDiv = styled.p`
    padding: 1.2rem;
    border: none;
    background-color: ${(props) => props.rating >= 8.5 ? "red" : "yellow"};
    cursor: pointer;
    color : black ; 
`;

const CssComponent = () =>{
    const rating = 3.56 ; 
    return (
        <>
        <Snehabutton>Click Here !!</Snehabutton>
        <RatingDiv rating={rating}> Rating: {rating} </RatingDiv>
        </>
    )
}

export default CssComponent ; 