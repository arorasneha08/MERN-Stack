const http = require("http");

const data = [
    {name : "Sneha" , age : 18} , 
    {name : "riya" , age : 19} , 
    {name : "khushi" , age : 15} 
]
const server  = http.createServer((req , res)=>{
    res.writeHead(200 , {"Content-Type" : "application\json"});
    res.write(JSON.stringify(data)); 
    // res.write(data); 
    res.end("completed work");
});


server.listen(5000); 
