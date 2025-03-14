// length of string : 
var str= "hello world";
console.log(str.length); // 11 

// escape sequence characters : 
//   \'  :- single quote 
//   \"  :- double quote 
//   \\ :- backslash 

let text = "my name is \"sneha\". I am \\ fine "
console.log(text); // my name is "sneha". I am \ fine

// indexOf(searchString , position ) // this method is case sensitive
var str = "sneha arora";
console.log(str.indexOf("a")); // 4 
console.log(str.indexOf("A")); // -1  

// Array.from() method returns an array from an object with a length property
var s = Array.from(str); 
console.log(s); // ['s', 'n', 'e', 'h', 'a', ' ', 'a', 'r', 'o', 'r', 'a' ]

// printing index and string elements of an string using map function 
var s = "sneha "; 
let strArr = Array.from(s) ; 
let strmap = strArr.map((currElem , index)=>{
    return `${currElem} - ${index}` ; 
}) ;
console.log(strmap); // [ 's - 0', 'n - 1', 'e - 2', 'h - 3', 'a - 4', '  - 5' ]

// lastIndexOf() :- returns index of last occurence of the specified string
var tex = "hello js , wecome to the best js course ";
var ix = tex.indexOf("js");
var index = tex.lastIndexOf("js");
console.log(index); // 30 
console.log(ix); // 6 

// search() : it searches for the string in the string
var t = "hello jS, welcome to our jS course" ; 
var result = t.search(/js/i); // adding i will remove the case senstivity of the string
console.log(result); // 6 

// match() : it returns null if the string is not found and it returns the additional information like the index , input string and groups
var t = "hello jS, welcome to our jS course" ; 
var result = t.match("jS"); 
console.log(result); // ['jS', index: 6, input: 'hello jS, welcome to our jS course', groups: undefined ]
var result = t.match(/jS/g);  // g will provide all the occurence of the strings
console.log(result); // [ 'jS', 'jS' ]

// matchAll() : it returns an empty iterator when the element is not found
var t = "hello jS, welcome to our jS course" ; 
var result = t.matchAll("jS"); 
console.log(result); // Object [RegExp String Iterator] {}
console.log(...result); 
//  output :- // it gives all the occurences of the element
//[ 'jS', 'jS' ]
// [
//  'jS',
//  index: 6,
//  input: 'hello jS, welcome to our jS course',
//  groups: undefined
// ] [
//  'jS',
//  index: 25,
//  input: 'hello jS, welcome to our jS course',
//  groups: undefined
//]

for(let item of result){
    console.log(item); 
} // it gives the same output as above 

for(let item of result){
    console.log(item[0]); 
} 

// includes() :- returns true if the string contains the specified value 
var t = "hello jS, welcome to our jS course" ; 
var result  = t.includes("jS");
console.log(result); // true 

// startsWith() :-  
var result = t.startsWith("he"); 
var result = t.startsWith("he", 0); // search position can also be added  
console.log(result) // true 

// endsWith() :- 
var result = t.endsWith("e");
console.log(result); // true 

// slice(start , end) :- returns the substring from the end when negative index is added 
// it does not include the last index 
var t = "hello jS, welcome to our jS course" ; 
var result = t.slice(2);
console.log(result); // llo jS, welcome to our jS course
var result = t.slice(-6);
console.log(result); // course

// substring() :- returns the complete string if the negative index is added 
var t = "hello jS, welcome to our jS course" ; 
var result = t.substring(-6);
console.log(result); // hello jS, welcome to our jS course
// this is the major difference between substring and slice 

// charAt():- it gives the char at a specified index
// it doesnot give any value for negative indexing 
var t = "hello jS, welcome to our jS course" ; 
var result = t.charAt(1);
console.log(result); // e
var result = t.charAt(-1);
console.log(result); // "" it returns a empty string 

// charCodeAt() :- 
// A -> 65 , a -> 97 , 0 -> 32
var t = "hello jS, welcome to our jS course" ; 
var result = t.charCodeAt(1);
console.log(result); // 101  

// at() :- it allows the use of negative indexes and returns value
var t = "hello jS, welcome to our jS course" ; 
var result = t.at(6);
console.log(result); // j 
var result = t.at(-6); 
console.log(result); // c 

// replace():
var str = "hello world";
var result = str.replace("world" ,"sneha") ;
console.log(result) ; // hello sneha

// using the global (g) and (i) for the replacing all the occurences and ignoring the case senstivity of the word 
var t = "hello jS, welcome to our jS course" ; 
var replacedStr = t.replace(/jS/gi , "vinod");
console.log(replacedStr); // hello vinod, welcome to our vinod course

// toUpperCase();
var str = "JavaScript"
var result = str.toLowerCase(); 
console.log(result); // javascript

// toLowerCase();
var result = str.toUpperCase(); 
console.log(result);  // JAVASCRIPT

// trim : to remove whitespaces from both the ends of the string 
var str = "  hello   "; 
console.log(str.trim()); // hello

// split() : it makes a array of the string 
var str = "apple , orange , banana" ;
var result = str.split(","); 
console.log(result); // [ 'apple ', ' orange ', ' banana' ]

// join() : it is used to convert a array to string 
var str = "apple , orange , banana" ;
var result = str.split(",").reverse().join() ;
console.log(result);  //  banana, orange ,apple

// fromCharCode() :- to convert char code to alphabet 
// write a code to print the alphabets from a to z ;

for(let char = 97 ; char <= 122 ; char ++ ){
    console.log(String.fromCharCode(char)); // a to z is printed
}

// check vowels in a string 
var checkVowels = ((str)=>{
    var vowels  = "aeiou" ; 
    for(let char of vowels){
        if(!(str.includes(char))){
            return false ; 
        }
    }
    return true ; 
})
console.log(checkVowels("my name is sneha")); // false because u is not present 

// count vowels in the string :
var countVowels =((str)=>{
    var vowels = "aeiou" ;
    var count = 0 ; 
    for(let char of str){
        if(vowels.includes(char)){
            count ++ ; 
        }
    }
    return count ; 
})
console.log(countVowels("my name is sneha")); // 5

// check pangram : contains all the alphabets :- 
var pangramChecker = ((str)=>{
    var inputArr = str.toLowerCase().split("");
    // console.log(inputArr); 
    // console.log("thapa".charCodeAt()); 
    const values = inputArr.filter((currElem)=>{
        currElem.charCodeAt() >= "a".charCodeAt() && currElem.charCodeAt() <= "z".charCodeAt()
    }); 
    console.log(values); 
    // console.log([...new Set (values)].length); 
    return new Set (values).size == 26 ; 
})
console.log(pangramChecker("The quick brown fox jumps ove the lazy dog")); // 116

