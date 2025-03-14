const EventEmitter = require("events"); 
const event = new EventEmitter(); 

event.on("sayMyName", ()=>{
    console.log("your first name is vinod");
}); 
event.on("sayMyName", ()=>{
    console.log("your middle name is bahadur");
}); 
event.on("sayMyName", ()=>{
    console.log("your last name is thapa");
}); 

// with this module , in only one function call , I can call all the functions in the code
event.emit("sayMyName"); 

// with parameters: 
event.on("checkPage", (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
})

event.emit("checkPage", 200 , "ok"); 