const str = "hello " + "world"; 
console.log(str) ; // hello world

// type coersion : only in subtraction 
let sum = "5" - 5 ;
console.log(sum) ; // 0 
console.log(typeof sum);

// here the value of the string is converted to a number to perform a specific fucnction

let d = "5"+ 10 ;
console.log(d); // 510  : string concatenation  

let n = "  " ;   
console.log(typeof n); // string 

console.log("sneha" - "arora") ; // NaN
console.log(true + true );  // 2 
console.log(true + false) ; // 1 
console.log(false - true) ; // -1 
// here by default true = 1 and false = 0 

