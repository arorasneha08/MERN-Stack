var arr =[1,2,3,4,5];
arr.push(6); 
console.log(arr);
console.log(arr.push(9));  // length of thearray 
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(7); // add elemeent to the begining 
console.log(arr);

arr.shift(); // remove first element 
console.log(arr);

arr.splice(1,2);
console.log(arr);

var arr =[1,2,3,4,5];
var result= arr.map((currElem)=>{
    return currElem * currElem ; 
})
console.log(result);

const words = ["apple" , "banana" , "cherry" , "date"] ;
const a = words.map((currElem)=>{
    return currElem.toUpperCase();
})
console.log(a);

var arr =[1,2,3,4,5];
var result = arr.map((currElem)=>{
    if(currElem % 2 == 0) return currElem * currElem ; 
}).filter((currElem)=>{
    return currElem != undefined ;
})
console.log(result);

var num = [1,2,3,4,5,6,7,8,9];
const p = num.filter((currElem)=>{
    return currElem > 5 ; 
})
console.log(p);

var val = 6 ;
let updatedCart = num.filter((currElem)=>{
    return currElem != val ;
})
console.log(updatedCart);

var num = [1,2,3,4,5,6,7,6,8];
var result = num.filter((currElem, index , num)=>{
    // console.log(index);
    // console.log(num.indexOf(currElem));
    return num.indexOf(currElem) == index; 
})
console.log(result);

num.sort((a,b)=>{
    if(a>b) return -1 ;
    if(b > a)  return 1 ;  
});
console.log(num);

let pr = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("Hi I am missing you"); 
    },2000);
});

pr.then((response)=>{
    console.log(response);
})
pr.catch((error)=>{
    console.log(error);
})
pr.finally(()=>{
    console.log("finallly");
}); 