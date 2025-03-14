// application level middleware

const express = require("express");
const app = express();
// const path = require("path"); 

// const staticPath = path.join(__dirname , "./Templates/views");

// app.set("view engine", "ejs") ;
// app.set("views", staticPath); 

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("please enter a valid age "); 
    }
    else if(req.query.age < 18){
        res.send("You can not access this page"); 
    }
    else{
        next(); 
    }
}
// this is used if we want to access middleware in all pages of the website 

// app.use(reqFilter); 


// we can add the above filter in many pages as well , this is known as route level middleware 
app.get("/profile", reqFilter, (req, res)=>{
    const user= {
        name : "Sneha",
        email : 'sneha@gmail.com', 
        city : "noida", 
        skills: ['php' , 'js' , 'c++' , 'java'], 
    }
    res.render("profile", {user}); 
});

app.get("" , (req , res)=>{
    res.send(`<h1>Welcome to teh home page <a href = "/contact">Contact Page</a></h1>`)
})

app.get("/contact", (req, res)=>{
    res.send(`<input type="text" placeholder= "enter your name" value = ${req.query.name}>
        <button>Submit</button>`); 
})


// using middleware from external pages : good practice

const reqFilters = require("./Checker"); 

app.get("/help",reqFilters , (req, res)=>{
    res.send({
        name : "anil", 
        email : "anil@gmail.com",
    }) ;
}); 





app.all("*", (req , res)=>{
    res.send("404 Error , page not found "); 
}); 
app.listen(5000 , ()=>{
    console.log("listening to the port : "); 
})

// here I linked the profile page in views folder with the header page 
