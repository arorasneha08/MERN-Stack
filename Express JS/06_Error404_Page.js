const express = require("express");
const app = express() ;
const path = require("path"); 
const hbs = require("hbs"); 
// const port = 8000 ; 

const staticPath = path.join(__dirname , "./Project");
const templatePath = path.join(__dirname , "./templates/views"); 
const partialsPath = path.join(__dirname , "./templates/partials")

app.set("view engine", "hbs"); 
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath)); 

app.get("" , (req, res)=>{
    res.render('index'); 
}); 

// in case if in the about us page the user is searching again for a invalid page then the error page is display  there as well 
app.get('/about/*' , (req , res)=>{
    res.render("404Error", {
        errorComment : "Oops page not found !!", 
    }); 
}); 

// create a call for the error page 
app.get('*' , (req , res)=>{
    res.render("404Error", {
        errorComment : "Oops page not found !!", 
    }); 
}); 

app.listen(3000 , ()=>{
    console.log("listening to the port");
}); 