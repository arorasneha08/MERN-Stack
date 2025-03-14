// this is used to dynamically access any page 

const express = require("express");
const app = express() ;
const path = require("path"); 


const staticPath = path.join(__dirname , "./Project");

// to set up the view engine :- 
app.set("view engine", "hbs"); 


app.use(express.static(staticPath)); 

// template engine route 
app.get("" , (req, res)=>{
    res.render('index' , {
        // to add dynamimc data to any element of html 
        channelName : "Sneha", 
    }); 
}); 

// this "/" function will not run now because the server always execute the first come content 

app.get("/" , (req, res)=>{
    res.send("hello for the express server"); 
}); 

app.listen(3000 , ()=>{
    console.log("listening to the port");
}); 