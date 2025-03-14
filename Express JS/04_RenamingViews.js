
const express = require("express");
const app = express() ;
const path = require("path"); 

const staticPath = path.join(__dirname , "./Project");
// creating a path for the new position 
const templatePath = path.join(__dirname , "./templates"); 

app.set("view engine", "hbs"); 
// if we change the name of the views folder to templates , it gives eror , so define the below path 
app.set("views", templatePath); 

app.use(express.static(staticPath)); 

// template engine route 
app.get("" , (req, res)=>{
    res.render('index'); 
}); 

// this "/" function will not run now because the server always execute the first come content 

app.get("/" , (req, res)=>{
    res.send("hello for the express server"); 
}); 

app.listen(3000 , ()=>{
    console.log("listening to the port");
}); 

// now we can access the same project 