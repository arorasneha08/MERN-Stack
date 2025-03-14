// check even or odd 
var num = 90 ;
if(num % 2 == 0 ){
    console.log("number is even");
}
else{
    console.log("number is odd"); 
}

// check positive , negative or zero :
var num = -3 ;
if(num > 0) console.log("number is positive");
else if(num < 0 ) console.log("number is negative");
else{
    console.log("number is zero");
}

// switch case statement  :
var day = 3 ;
switch(day){
    case 1 : 
        console.log("monday");
        break ; 
    case 2 :
        console.log("tuesday") ;
        break ;
    case 3 : 
        console.log("wednesday");
        break ;
    case 4 :
        console.log("thursday");
        break ;
    case 5 :
        console.log("friday");
        break ; 
    case 6 :
        console.log("saturday");
        break; 
    case 7 :
        console.log("sunday")
        break ;
    default :
        console.log("not a valid day");
}

// find area of shapes using switch case 
var shapes = "circle" ; 
var a = 5 ;
var b = 10 ;
switch(shapes){
    case "square" :
        var result  = a * a ;
        console.log(result) ; 
        break ;
    case "rectangle" :
        var result = l * b ;
        console.log(result);
        break ; 
    case "circle" : 
        var r  = 2 ; 
        var result = 3.14 * r *r ;
        console.log(result);
        break ;  
    default : 
        console.log("no shapes");
    }

// while loop 
var num = 1 ;
while(num <= 10){
    console.log('5 * ' + num + ' = ' + (5*num));
    num ++ ;
}

// check positive number 
// let userInput ;
// let posnum ; 
// do{
//     userInput = prompt("enter any positive number"); 
//     posnum = parseFloat(userInput) ;
// }while(isNaN(posnum) || posnum < 0) ;
// console.log("you entered a positive number"); 

// sum of natural numbers 
var sum = 0 ;
for(var i = 1 ; i<= 10 ; i++){
    sum = sum + i ;
}
console.log(sum);

// check prime number 
var num = 12 ;
var isprime = true ;
for(var i = 2 ; i< num ; i++){
    if(num % i == 0){
        isprime = false ;
        break ; 
    }
}
if(isprime) {
    console.log("numer is a prime");
}
else{
    console.log("number is not a prime");
}

// leap year 
var year = 2004 ;
if(year % 4 == 0 && year % 100 != 0){
    console.log("leap year");
}
else if(year % 400 == 0){
    console.log("leap year");
}
else{
    console.log("not a leap year");
}

// pattern : increasing star pattern 
var n = 5 ;
for(var i = 1 ; i<= 5 ; i++){
    var line = "" ; 
    for(var j = 1 ; j<= i ; j++){
        line += "*" ; 
    }
    console.log(line);
}