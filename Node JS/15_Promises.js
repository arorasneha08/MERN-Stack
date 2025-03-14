// here in this example we got 10 because b is called after 2 seconds and it did not waited for b , it just executed the next function .. 

// this is the disadvantage as we did not get our value and got wrong result , to solve this we use promises 
let a = 10 ;
let b = 0 ; 

setInterval(()=>{
    b = 20 ; 
}, 2000); 

console.log(a+b); // 10 

// promises :- 

let c = 20 ; 
let d = 0 ;

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30); 
    },2000)
})

waitingData.then((data)=>{
    console.log(c + data); // c + d 
});