// in synchronous , it will first execute the task completely and then it will do the second task 

const fs = require("fs"); 
const data = fs.readFileSync("read.txt", "utf-8");
console.log(data); // today is rainy daysubscribe plz
console.log("hello "); // hello 


// in asynchronous , it will reach out both the tasks in the same time

// const fs = require("fs"); 
fs.readFile("read.txt", "utf-8", (error , data)=>{
    console.log(data);
}); 
console.log("hello ..."); // hello today is rainy daysubscribe plz
// here it will print hello first and then the data because the data is taking more time so it will execute the other task first in the time provided .. 


