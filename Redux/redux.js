const redux = require("redux"); 
const reducer = (store , action) =>{
    return store; 
}
const store = redux.createStore(reducer) ; 

const subscriber = () =>{
    const state = store.getState() ; // returns state 
}