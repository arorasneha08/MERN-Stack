// push() method : it is used to add element at the end 
// and it also returns the new length of the array 
var arr = [1,2,3,4,5]; 
arr.push(6);
console.log(arr); // 1 2 3 4 5 6
console.log(arr.push(7)); // 7 : length of array
console.log(arr); // 1 2 3 4 5 6 7

// pop() method : removes the last element 
console.log(arr.pop()); // 7 is poped out here 
console.log(arr); // 1 2 3 4 5 6 

// unshift() : adds element to the beginning 
console.log(arr.unshift(7)); // 7 
console.log(arr); // 7 1 2 3 4 5 6

// shift() : removes first element from the array 
console.log(arr.shift()); // 7
console.log(arr); // 1 2 3 4 5 6

// splice(start , end) : 
console.log(arr.splice()); // [] 

// accessing the elements : 
console.log(arr.splice(0,2)); // [1,2] 

// removing the elements :- 
arr.splice(1,2) ;  // (start index , no of elements to be deleted from the starting index)
console.log(arr); // 3 6 

// indexOf(element , fromIndex) :- 
const person = ["ram", "hari" , "sita" , "gita"] ;
console.log(person.indexOf("sita", 2)); // 2 
console.log(person.indexOf("sita", 3)); // -1 because not found 

// lastIndexOf(element , fromIndex) :- here it will go from this index to backward direction  
var arr = [1,2,3,4,2,4,1]; 
console.log(arr.lastIndexOf(2, 5)); // 4 
console.log(arr.lastIndexOf(2, 3)); // 1
// here mentioning 4 as index does not means that it will start from 4th index instead it means that it will work till the 4th index .

// includes(element) : checks if the current element is present in the array and returns a boolean as result 
console.log(arr.includes(4)); // true 
console.log(arr.includes(14)); // false 

// update/modify the values of the array : splice(index , countofNumToBeModified , element) 
const months = ["jan" , "feb" , "march" , "april" , "may" , "june"] ; 
const itemToUpdate = months.indexOf("march") ; 
months.splice(itemToUpdate , 1 , "December");
console.log(months); // [ 'jan', 'feb ', 'December', 'april', 'may', 'june' ]

// delete element from the array : splice(index , countofNumber to be deleted )
const indexToDelete = months.indexOf("feb");
months.splice(indexToDelete , 1) ; 
console.log(months); // [ 'jan', 'December', 'april', 'may', 'june' ]

// find method : it finds the first element in the array that satisfies the given condition 
var number = [1,2,3,4,5,6,7,8,9];
var result = number.find((currElem)=>{
    return currElem > 5 ; // 6 
})
console.log(result) ; 

// findIndex() :
var num = [1,2,3,4,5,6,7,8,9];
const r = num.findIndex((currElem)=>{
    return currElem > 5 ; 
})
console.log(r) ;  // 5 (index of 6 )

// map function : 
// it creates a new array from calling a function for every array element
// it doesnot change the original array 

const res = num.map((currElem)=>{
    return currElem * 5 ; 
}); 
console.log(res) ; //[5, 10, 15, 20, 25, 30, 35, 40, 45] 

// use map to square each element and create a new array : 
var num = [1,2,3,4,5] ;
var result = num.map((currElem)=>{
    return currElem * currElem ; 
})
console.log(result) ; // [ 1, 4, 9, 16, 25 ]
 
// using map , write a function that takes a array of strings and returns a new array where each string is uppercase
const words = ["apple" , "banana" , "cherry" , "date"] ;
const a = words.map((currElem)=>{
    return currElem.toUpperCase() ; 
})
console.log(a); // [ 'APPLE', 'BANANA', 'CHERRY', 'DATE' ]

// using map , square only those numbers which are even 
var numbers = [1,2,3,4,5,6];
var re = numbers.map((currElem)=>{
    if(currElem %2 == 0){
        return currElem * currElem ; 
    }
}).filter((currElem)=>{
    return currElem != undefined ; 
})

console.log(re) ; // [ 4, 16, 36 ]

// add a prefix Mr . to all the names in the  string 
const names = ["ram", "sham" , "gitesh" , "gopal"];
const prefixName = names.map((currElem)=>{
    return `Mr. ${currElem}`; 
})
console.log(prefixName); // [ 'Mr. ram', 'Mr. sham', 'Mr. gitesh', 'Mr. gopal' ]

// filter method : it will return all the elements which satisfies the condition 
// 
var num = [1,2,3,4,5,6,7,8,9];
const p = num.filter((currElem)=>{
    return currElem > 4 ; 
})
console.log(p);  // [ 5, 6, 7, 8, 9 ]

// delete all occurence of element in array : using filter method 
let val = 6 ;
var num = [1,2,3,4,5,6,6,7,8,9];
let updatedCart = num.filter((currElem)=>{
    return currElem != val ; 
})
console.log(updatedCart); // [1, 2, 3, 4, 5, 7, 8, 9]

// Ques : Given products name and their prices . filter the items less than and equal to 500
const products = [
    {name : "laptop" , price : 1200 },
    {name : "phone" , price : 800} ,
    {name : "tablet" , price : 300} ,
    {name : "watch" , price : 150} ,
]

const filterProduct = products.filter((currElem)=>{
    return currElem.price <= 500 ;  
})
console.log(filterProduct); // [ { name: 'tablet', price: 300 }, { name: 'watch', price: 150 } ]

// filter by removing duplicates from the array :

// method 1 :- 
var num = [1,2,3,4,5,6,7,6,8];
let uniqueVal = num.filter((currElem ,index,  arr)=>{
    // console.log(index); // 0 1 2 3 4 5 6 7 8 
    //console.log(arr.indexOf(currElem)); // 0 1 2 3 4 5 6 5 8
    return arr.indexOf(currElem) == index ; 
})
console.log(uniqueVal); 
// output : [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// method 2 :-
console.log(new Set(num)); // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }

// sorting array : 
const fruits = ["banana" , "apple" ,"orange" , "mango"] ; 
fruits.sort();
console.log(fruits); //[ 'apple', 'banana', 'mango', 'orange' ]

// compare and sort array in ascending order : 
var num = [1,6,4,2,7,0,8,3,1]; 
num.sort((a,b)=>{
    if(a > b) return 1; 
    if(b > a) return -1 ;
}); 
console.log(num) ; //[ 0, 1, 1, 2, 3, 4, 6, 7, 8 ]

// sort aray in desending order : 
num.sort((a,b)=>{
    if(a > b) return -1 ;
    if(b > a) return 1 ; 
});
console.log(num) ; //[ 8, 7, 6, 4, 3, 2, 1, 1, 0 ]

// reduce() function  : 
// it is used to accumulate or reduce the array to a single value .

// Ques : calculate the total price of items in the shopping cart 
const prices = [100,200,300,400,500,600]; 

// accum is like temp variable initially zero 
var totalprice = prices.reduce((accum , currElem)=>{
    return accum + currElem ; 
})
console.log(totalprice); // 2100 

