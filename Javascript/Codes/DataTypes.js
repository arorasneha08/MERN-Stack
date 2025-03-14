// string data type 
var myName = "sneha" ;
console.log(myName)  ; 

// int data type 
var num = 89 ;
console.log(num) ; 

// boolean 
var isRaining = true ;  // small letters for the boolean names
console.log(isRaining); 
let z = "";
console.log(Boolean (z)) ; // false for empty string

// undefined : for variable with no value 
var x ;
console.log(x); 

// null : empty 
var ok = null ;
console.log(ok); 

// bigInt : ends with n word 
let b = BigInt(23); 
console.log(b);  // 23n 

let b1 = BigInt("23");
console.log(b1);  // 23n 

// symbol :
let a = Symbol("sneha arora");
console.log(a);  //Symbol(sneha arora)

// calculating the max safe integer
const maxNumber = Number.MAX_SAFE_INTEGER; 
console.log(maxNumber); // 9007199254740991

