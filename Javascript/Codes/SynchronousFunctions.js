// // // Asynchronous :- the cpu does not wait for the set time out intervals it just executes the code further 

// const func2 = () =>{
//     setTimeout(()=>{
//         console.log("func 2 starts and ends");
//     },2000);
// };
// const func1 = () =>{
//     console.log("func 1 starts");
//     func2();
//     console.log("func 1 ends");
// }
// func1(); 
// // func 1 starts
// // func 1 ends
// // func 2 starts and ends

// // synchronous :- all the lines execute line by line 

// const func4 = ()=>{
//     console.log("func 4 starts and ends");
// }
// const func3= ()=>{
//     console.log("func 3 starts ");
//     func4(); 
//     console.log("func 3 ends");
// }
// func3();
// // func 3 starts 
// // func 4 starts and ends
// // func 3 ends

// hoisting :-
// it is a js mechanism where variables and function declarations are moved to the top of their scope before code execution . This means thta no matter where functions and variables are declared , they are moved to the top of their scope regardless of whether their scope is global or local.

// console.log(myVar);
// greet();
// var myVar = 90 ;
// function greet(){
//     console.log("Welcome to the js course");
// }

// Here, even if the myVar variable is not defined but still its existence is there as it is moved to the top and in a similar way function is called before defining it but there are no error due to hoisting 

// hoisting is only possible if the variable is var but when let is used it throws an error 

// lexical scoping in js :- it is a set of rules that determines where a variable can be used in your code . If a variable is declared inside the function or block , it can be used only within that function or block . 

// scope chaining :-
// it is the process by which js when looking for the value of a variable, checks the current scope and then looks in the outer scopes until it finds the variable or reaches the global scope . 

// global variable :- 

const globalVariable = "I 'm a global variable";
function myFunc(){
    const functionVariable = "I 'm a function variable";
    if(true){
        const blockVariable = "I 'm a block variable";
        console.log(blockVariable);
        console.log(functionVariable);
        console.log(globalVariable);
    }
}
myFunc(); 

//closure :- it is created when an inner function has access to the variables of its outer function even after the outer function has finished executing 

function outerFunction(){
    var outerVar = "I'm outer";
    function innerFunction (){
        console.log(outerVar);
    }
    return innerFunction; 
}
var closureFunc = outerFunction();
closureFunc();  // i'm outer