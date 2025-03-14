const express = require("express"); 
const app = express(); 

app.get("/" , (req , res)=>{
    res.send("hello World from express"); 
});

app.get("/about" , (req, res)=>{
    res.send("hello from about us page"); 
}); 
app.get("/contact", (req, res)=>{
    res.sendStatus(200).send("Welcome to channel"); 
}); 
app.get("/object" , (req, res)=>{
    res.json([{
        id : 1 ,
        name : "vinod", 
    }])
}); 
app.listen(8000 , ()=>{
    console.log("listening to the port");
}); 


// res.json and res.send both can be used to send a msg to the server , however .json converts the whole of the object even null , undefined to json format , this is invalid .. 