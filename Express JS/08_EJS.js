const express = require("express");
const app = express();
const path = require("path"); 

const staticPath = path.join(__dirname , "./Templates/views");

app.set("view engine", "ejs") ;
app.set("views", staticPath); 
// app.use(express.static(staticPath)); 

// accessing the ejs page 
app.get("/profile", (req, res)=>{
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
app.get("/help",(req, res)=>{
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