// object properties :-

var name = "vinod";
var age = 30;
const person = { name, age };
console.log(person); // { name: 'vinod', age: 30 }

// destructuring specific elements :-

const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(first); // 10

// ignoring elements :-
const [, , thirs] = numbers;
console.log(thirs); // 30 

// swapping :-
var a = 10;
var b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10 

// destructuring :-
const user = { name1: "vinod", age1: 30 };
const { name1, age1 } = user;
console.log(name1, age1); //  vinod 30
console.log(age1, name1); //  30 vinod

// renaming properties :-
const user1 = { name1: "vinod", age1: 30 };
const { name1: fullName, age2 } = user1;
console.log(fullName); // vinod

// spread operator :-
// copying the array :-
let fruits = ["apple", "mango", "grapes"];
let newFruits = [...fruits];
console.log(newFruits); // [ 'apple', 'mango', 'grapes' ]

// concatenating numbers :-
const num1 = [1, 2, 3];
const num2 = [3, 5, 6];
const newNum = [...num1, ...num2];
console.log(newNum); // [ 1, 2, 3, 3, 5, 6 ]

// adding elements to existing array 
let fruit = ["apple", "mango", "grapes"];
fruit.push("guava", "banana");
console.log(fruit); // [ 'apple', 'mango', 'grapes', 'guava' , 'banana']

// or 
fruit.push(...["kiwi", "strawberry"]);
console.log(fruit);  //  [ 'apple', 'mango', 'grapes', 'guava', 'banana', 'kiwi', 'strawberry' ]

// split method 
const country = "India";
console.log(country.split("")); // [ 'I', 'n', 'd', 'i', 'a' ]
console.log([...country]); // [ 'I', 'n', 'd', 'i', 'a' ]

// rest parameters :-this is used when we have n number of operators 
const sum = (...numbers) => {
    return numbers.reduce((accum, currElem) =>
        (accum += currElem), 0);
    }
console.log(sum(1, 2, 3, 4)); // 10

// note :-
// 1) a function definition can only have one rest parameter and the rest parameter must be the last parameter in the function definition 

// example:-
// function wrong1(...one , ...wrong){};
// function wrong2(...wrong , arg2 , arg3);

// ECMAScript 2016 :-
// Math.pow():-
let base = 2 ;
let exp = 3 ;
console.log(Math.pow(base , exp)); // 8 
console.log(base ** exp); // 8 

// padding :-
const companyName = "Kodyfier";
const paddedName = companyName.padStart(15 , "*");
console.log(paddedName); // *******Kodyfier
console.log(paddedName.length); // 15

const paddedEnd = companyName.padEnd(10 , "&");
console.log(paddedEnd); // Kodyfier&&        .

// ECMAScript 2018 :- spread operators also started working on the objects :-

const student = {
    age3 : 10 ,
    name : "Vinod",
    isStudent : true , 
};

const {age3 , ...others} = student;
console.log(others); // { name: 'Vinod', isStudent: true }

// concatenating two objects :-
const obj1 = {a : 10 , b : 20 , c : 50};
const obj2 = {c : 60 , d : 90};
const newObj = {...obj1 , ...obj2};
console.log(newObj);  // { a: 10, b: 20, c: 60, d: 90 }

// ECMAScript 2019
// flat() :- is a new array instance method that can create a 1D array from a multidimensinal array 

const nestedArray = [1,2,[3,4],5];
const nestedArray1 = [1,[2,[3,4]],5];
const flattenedArray = nestedArray.flat(); 
const flattenedArray1 = nestedArray1.flat(); 
const flattenedArray2 = nestedArray1.flat(2);  // adding three will remove the three brackets 

console.log(flattenedArray);  // [ 1, 2, 3, 4, 5 ]
console.log(flattenedArray1); // [ 1, 2, [ 3, 4 ], 5 ]
console.log(flattenedArray2); // [ 1, 2, 3, 4, 5 ]

const arr = ["My name " , "is Vinod", "Thapa"];
const newArr = arr.flatMap((curVal)=> curVal);
console.log(newArr); // [ 'My name ', 'is Vinod', 'Thapa' ]

// map creates an array of each object passed to it whereas the flatMap returns a new array 

const Arr = arr.flatMap((currVal)=> currVal.split("")); 
// output :- 
// [
//   'M', 'y', ' ', 'n', 'a',
//   'm', 'e', ' ', 'i', 's',
//   ' ', 'V', 'i', 'n', 'o',
//   'd', 'T', 'h', 'a', 'p',
//   'a'
// ]
const Arr1 = arr.flatMap((currVal)=> currVal.split(" "));
// [ 'My', 'name', '', 'is', 'Vinod', 'Thapa' ]
console.log(Arr);
console.log(Arr1);

// Object.fromEntries():-
// it returns an array containing all the object own properties as an array of [key , value] pairs 
const person1 = {name : "sneha" , age :39};
const entries = Object.entries(person1);
console.log(entries);  // [ [ 'name', 'sneha' ], [ 'age', 39 ] ]

const newPerson = Object.fromEntries(entries);
console.log(newPerson);  // { name: 'sneha', age: 39 }
console.log(person1); // { name: 'sneha', age: 39 }

// is person1 and newperson same ? No 
console.log(person1 === newPerson); // false 

// trim prototype() :- 
let str = "   thapa   "; 
console.log(str);  //    thapa   
console.log(str.length); // 11

console.log(str.trim()); // thapa
console.log(str.trim().length); // 5
console.log(str.trimStart()); // thapa
console.log(str.trimEnd()); //    thapa

// SymbolPrototype.description ():-
const mySymbol = Symbol("This is my symbol"); 
console.log(mySymbol); // Symbol(This is my symbol)
console.log(mySymbol.description);  // This is my symbol

// Nullish Coalescing Operator :- if we have to give the value 0 to the user but the compiler treats the value as false , so we have to use this operator 
let favNum = 0 ; 
var userFavNum = favNum || 10;
console.log(userFavNum); // 10 because it treated 0 as false and the actuual data of the user is terminated due to 0 being treated false 
// to avoid this we use ,
var userFavNum = favNum ?? 10 ; 
console.log(userFavNum); // 0 

// accessing properties without the optional chaining :-
const per = {
    name : "John",
    address :{
        city : "New York",
        zipCode : 12345  , 
    },
};

const city = per.address ? per.address.city : "Unknown city "; 
console.log(city); // New York 

const city1 = per.address?.city || "unknown city" ;
console.log(city1);
// This operator safely accesses per.address.city, meaning if per.address is null or undefined, it will not throw an error; instead, it will return undefined.

// example 2 :- 
const per2 = {
    name : "John",
    address :{
        city : "New York",
        zipCode : 12345 , 
        coordinates :{
            latitude : 40.9093,
            longitude : -74.002, 
        },
    },
};
const lat = per2.address ?.coordinates?.latitude ?? "not present";
console.log(lat); // 40.9093

// replacing multiple spaces with a single space :-
const text = "This   has     an       space   ";
const normalizedText = text.replaceAll(/\s+/g, " ");
console.log(normalizedText);  // This has an space

// logical assignment operator :-
let x = false;
x = x || true ;
console.log(x); // true 
x &&= false ;
console.log(x);// false 

let y = 10 ;
y||= 20; 
console.log(y); // 10 

// allows to read big numbers easily 
const bigNum = 1_00_000;
console.log(bigNum);  // 100000

// hasOwnProperty() :- this property does not work if we had created an object using the Object.create(null) ;  

const stud = Object.create(null);
console.log(typeof stud);
stud.name = "Vinod";
// console.log(stud.hasOwnProperty("name"));  // throws an error 
console.log(Object.hasOwn(stud , "name")); // true 

// ECMAScript 2023

//array.findLast() AND Array.findLastIndex() ;
const array = [1,2,3,4,5,6];
console.log(array.findLast((elem) => elem)); // 6
console.log(array.findLast((elem) => elem < 3)); // 2
console.log(array.findLastIndex((elem) => elem)); // 5

// Array.prototype.toReversed();-
const reversedNum = array.toReversed();
console.log("Original : " , array); // Original :  [ 1, 2, 3, 4, 5, 6 ]
console.log("Reversed : " , reversedNum); // Reversed :  [ 6, 5, 4, 3, 2, 1 ]

const sortedArr = array.toSorted(); 
console.log("sorted array : " , sortedArr); //  [ 1, 2, 3, 4, 5, 6 ]

const splicedArr = array.toSpliced(1,1 , 9); 
console.log("spliced array : ", splicedArr);// spliced array :  [ 1, 9, 3, 4, 5, 6 ]

// Array.prototype.with(index , value ); it is used to change the value of an element at a specific index of an array 
