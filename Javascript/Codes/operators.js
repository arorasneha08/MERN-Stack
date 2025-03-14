var result = "hello" / 2 ;
console.log(result) ; //NaN
 
var x = 0.1 + 0.2 ; 
console.log(x);  // 0.30000000000000004
// it is due to the decimal to the binary conversion 

var y = 0.1 + 0.2 ; 
console.log(y.toFixed(2)); // 0.30 
// it fixes te deciaml to two places 

var result = 55 * "hello" ;
console.log(result); // NaN

console.log(5 == 5) ; // true 
console.log(5 != 10) ; // true 
console.log("5" === 5); // false 
// it also checks the data type 

// console.log(5 < xhc);  // error 

// ternary operator 
var age = 19 ;
var result = (age >= 18) ? "yes" : "no" ;
console.log(result) ; 

console.log(2<12<5); // true 
// the expression is evaluated from left to right 

console.log("20" + 10 + 10) ; // 201010
console.log(10 + 10 + "20"); // 2020

