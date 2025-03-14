let companyName = "KodyFier"; 
const paddedName = companyName.padStart(15, "*");
console.log(paddedName);
console.log(paddedName.length); 

const arr = ["My name " , "is Vinod", "Thapa"];
const arr1= arr.flatMap((currVal)=>{
    return currVal.split(" "); 
})

console.log(arr1); 

const a = ["1" , "2" ,"3" ,"4"];
const a1 = a.map((val)=>{
    return val; 
})
console.log(a1); 