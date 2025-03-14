const bioData = {
    name : "vinod", 
    age : 26 , 
    channel : "thapa technical", 
}
console.log(bioData.channel); // // thapa technical

const jsonData = JSON.stringify(bioData); 
console.log(jsonData); // {"name":"vinod","age":26,"channel":"thapa technical"}

// cannot access attributes in string format 
console.log(jsonData.channel); // undefined 

const objData = JSON.parse(jsonData);
console.log(objData); // { name: 'vinod', age: 26, channel: 'thapa technical' }


// creating a file in json
const fs = require("fs"); 
fs.writeFile("json1.json", jsonData , (error)=>{
    console.log("done");
});  // done  and a new file is created 

fs.readFile("json1.json" , "utf-8", (error , data)=>{
    const orgData = JSON.parse(data); 
    console.log(data); // {"name":"vinod","age":26,"channel":"thapa technical"}
}); 

// UTF-8 (Unicode Transformation Format - 8-bit) is a character encoding standard that represents all possible Unicode characters while being backward compatible with ASCII. It is the most widely used character encoding for text files, web pages, and databases.

