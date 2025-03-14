const express = require("express");
const app = express() ;
const path = require("path"); 

const staticPath = path.join(__dirname , "./Project");

app.use(express.static(staticPath)); 


app.listen(5000 , ()=>{
    console.log("listening to the port");
}); 