const mystring = "43" ; 
const mynum = parseInt(mystring);
console.log(typeof mynum); // number
console.log(mynum); // 43

const a = "90.89" ; 
const b = parseFloat(a); // 90.89
const b1 = parseInt(a); // 90
console.log(typeof b);  // number

console.log(parseInt("   123   ")); // 123
console.log(parseInt("077")); // 77 
console.log(parseFloat("077")); // 77 
console.log(parseInt("1.9")) ; //1 
console.log(parseInt("&123"));  // NaN : it means not a number 
console.log(parseInt("-123")); // -123
console.log(parseInt("xyz"));  //NaN

console.log(isNaN("5"))  // false 
console.log(isNaN("vinod"))  // true 

// NAN : important because the origin of not a number can be from anywhere  
// Example : console.log(isNaN("vinod"))  and console.log(parseInt("xyz")) , in both the values he term vinod and xyz are not a integer but also both are not equal ...

if(NaN == NaN){   // both are not equal 
    console.log("both are equal"); 
}
else{
    console.log("not equal"); 
}

