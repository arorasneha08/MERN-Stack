// Math.round() :- rounds to the nearest integer 
console.log(Math.round(4.5)); // 5

// Math.floor() :- rounds off to the nearest down value integer 
console.log(Math.floor(4.9)) ; // 4 
console.log(Math.floor(-3.7)); // -4

// Math.ceil() :- rounds off to the nearest up value integer 
console.log(Math.ceil(4.1)); // 5 

// Math.PI();
console.log(Math.PI);  // 3.141592653589793

// Math.abs() :- returns the absolute value of the number / or how far it is from 0
console.log(Math.abs(-5)); // 5 

// Math.trunc():- returns the integer part of the number 
console.log(Math.trunc(3.9)); // 3 
console.log(Math.trunc(-3.7)); // -3 

// Math.pow(x,y):- returns the value of x to the power y 
console.log(Math.pow(2,5));  // 32 
console.log(2 ** 5); // 32 

// Math.sqrt():- 
var sqrt = Math.sqrt(25); 
console.log(sqrt); // 5 

// Math.log(x):- 
var logResult = Math.log(1); 
console.log(logResult);  // 0

// Math.log2(x):- 
var logResult = Math.log2(8);
console.log(logResult); // 3

// Math.random():- always between 0 and 1 
console.log(Math.random()); 
// it will give value between 0 to 99 :
console.log(Math.round(Math.random()*100)); 

