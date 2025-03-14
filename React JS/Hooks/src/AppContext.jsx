import { createContext } from "react";

export const AppContext = createContext(); 

const ContextProvider = (props) =>{
    const phone = "7298372739" ; 
    const name = "sneha" ;

    return (
        <AppContext.Provider value={{phone , name}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider ;

// useContext :- to make data avaialble for the whole app 
