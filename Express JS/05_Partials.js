//in this , in the template folder we created a folder partial and views folder and we created a index file in views folder and added a {{>header}} , which means that the file created in the partial folder header , all of its data will be displayed there .. 
// hence two calculator are shown 


const express = require("express");
const app = express() ;
const path = require("path"); 
// require hbs 
const hbs = require("hbs"); 
const port = 8000 ; 

const staticPath = path.join(__dirname , "./Project");
const templatePath = path.join(__dirname , "./templates/views"); 
// create a path for partials
const partialsPath = path.join(__dirname , "./templates/partials");

app.set("view engine", "hbs"); 
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath)); 

app.get("" , (req, res)=>{
    res.render('index', {
        channelName : "vinod",
    }); 
}); 

app.get("/" , (req, res)=>{
    res.send("hello for the express server"); 
}); 

app.listen(3000 , ()=>{
    console.log("listening to the port");
}); 