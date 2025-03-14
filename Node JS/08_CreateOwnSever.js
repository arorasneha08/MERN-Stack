const http = require("http"); 
const fs = require("fs"); 

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.end("hello from the other sides"); 
    }
    else if(req.url == "/about"){
        res.end("hello from the about us page"); 
    }
    else if(req.url == "/contact"){
        res.end("hello from the contact Us page")
    }
    else if(req.url == "/userapi"){
        // here with this we fetched the whole data of the userAPI.json file
        res.end("Hello from the userAPI sides"); 
        fs.readFile(`${__dirname}/userAPI.json` , "utf-8", (error, data)=>{
            console.log(data);
            res.end(data); 
        })
    }
    else{
        res.writeHead(404 , {"content-type" : "text/html"}); 
        res.end("404 page , error found "); 
    }
});

server.listen(8000 , "127.0.0.1", ()=>{
    console.log("listening to the port no 8000");
}); 

// http://localhost:8000/ check at this link you will see the output there 