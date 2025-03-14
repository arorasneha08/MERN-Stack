// set time out :- is used to execute a functiom or code block after a specfic delay in milisecong

// set time interval :- is used to repeatedly execute a function or code block at a specific interval in milliseconds 

// set time out :-

// function delayedFunction(x){
//     console.log("hello" , x);
// }
// setTimeout(delayedFunction, 2000); // after 2 sec this code will be printed

// setTimeout(()=>delayedFunction(5) , 2000); // if some value is passed in the function 


// set time interval :- 

// function delayedFunction(){
//     console.log("hello");
// }
// setInterval(delayedFunction, 2000); // after 2 sec this code will be printed repeatedly 

// clear time out :- it is used o cancels a timeout previously esstablished 

// function delayedFunction(){
//     console.log("hello , cancel the meeting ");
// }
// const myWork = setTimeout(delayedFunction, 2000); 
// clearTimeout(myWork);

// clear interval :- 

// function repeatedFunction (){
//     console.log("ok bye");
// }
// const intervalId = setInterval(repeatedFunction , 1000); 

// setTimeout(()=>{
//     clearInterval(intervalId); 
// }, 5000); // it will print the output 4 times . 

