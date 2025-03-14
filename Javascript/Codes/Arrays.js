// creating an array : 
// method 1 
let fruits = new Array("apple" , "orange" , "banana" , 1) ;
console.log(fruits);  // [ 'apple', 'orange', 'banana' ]
console.log(fruits[0]);  // 'apple'
console.log(fruits[3]);  // 1

// method 2 
let fruit = ["apple" , "orange" , "banana"] ;
console.log(fruit);  // [ 'apple', 'orange', 'banana' ]

// creating an empty array : 
let a = [] ; 
console.log(a); // []

// modify elements :
let z = ["1" , "2" , "3" , "4" , "5"] ;
z[1] = "9" ;
console.log(z); // [ '1', '9', '3', '4', '5' ]

// for-of loop : to print all element using direct access to elements
let b = ["1" , "2" , "3" , "4" , "5"] ; 
for(let item of b){
    console.log(item); // 1 2 3 4 5 
}
// Normal loop : 
var f = new Array("apple" , "orange" , "banana" ) ;
for(let item = 0 ; item <f.length ; item++){
    console.log(f[item]); 
}

// for-in loop : gives the index of the array elements
var f = new Array("apple" , "orange" , "banana" ) ; 
for(let i in f){
    console.log(f[i]); 
}
// i gives the index and f[i] gives the element 

// for - each method 
f.forEach((currElem , index, arr)=>{
    console.log(`${currElem} + ${index} + ${arr}`); 
});
// output : 
// apple + 0 + apple,orange,banana
// orange + 1 + apple,orange,banana
// banana + 2 + apple,orange,banana

// Map function : 
f.map((currElem , index, arr)=>{
    console.log(`${currElem} + ${index} + ${arr}`); 
});
// output : 
// apple + 0 + apple,orange,banana
// orange + 1 + apple,orange,banana
// banana + 2 + apple,orange,banana

// Difference between for-each and map function 

// for each loop : when used in function , it returns undefined 
const mynum = f.forEach((currElem , index, arr)=>{
    return (`${currElem} + ${index} + ${arr}`); 
});
console.log(mynum) ; 
// output : undefined 

// map function :  when used in function return the array elements 
// it returns a new array and we can chain the other methods to ikt
const num = f.map((currElem , index, arr)=>{
    return (`${currElem} + ${index} + ${arr}`); 
});
console.log(num); 
//  output : [
//     'apple + 0 + apple,orange,banana',
//     'orange + 1 + apple,orange,banana',
//     'banana + 2 + apple,orange,banana'
//   ]

// Ques : multiply each element of array by 2 :

// method 1 : 
const n = [1,2,3,4,5];
n.forEach((currElem)=>{
    console.log(currElem * 2) ; 
}); 

// method 2 : 
let x = n.map((currElem)=>{
    return currElem * 2 ; 
})
console.log(x) ; 

