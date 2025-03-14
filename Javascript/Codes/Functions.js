// sum of two numbers 
function sum(a, b){  // function keyword and function declaration 
    return a + b ;  // function body 
}
console.log(sum(3,6));

// another way of declaring a function 
var result = function sum(a , b){
    console.log(a + b);
}

result(34, 90);  // 124 

// greet someone 
function greet(name){
    console.log("hello " + name + " ," + "welcome to our show");
}
greet("ram"); 

// IIEE : immediately invoked function expression 
// syntax :- 
(function(a,b){
    console.log(a+b);
})(23,90);

// default parameters will have less priority over given values 
function sum(a = 20 , b = 10){
    return a + b ; 
}
console.log(sum(5,6)); // 11 

// another way of defining function : arrow function 
const sum2 = (a , b) => {
    let result = console.log(`sum = ${a+b} .`) ; 
};
sum2(3,9); 

// calculator :
function calculator(a , b , operator){
    let result ;
    switch(operator){
        case '+' :
            return a + b ;
        case '-' :
            return a -b ;
        case '*' :
            return a * b ;
        case '/' :
            if(b == 0) return 0 ; 
            else return a / b ;
        default :
            return "not a valid operation " ; 
    }
}
console.log(calculator(10, 20, '+') );

// reverse string 
const reverse = (str) => {
    for(let char = str.length-1 ; char >=0 ; char--){
        console.log(str[char]);
    }
}
reverse("sneha arora");

