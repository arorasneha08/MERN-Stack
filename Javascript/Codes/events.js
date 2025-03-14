// to call a function in event listener without arguments  
mybutton.addEventListener("click" , handleMouseEvents); // if no arguments to be passed 

// to call a function in event listener with arguments 
mybutton.addEventListener("click" , (e)=>{
    handleMouseEvents(e.target); 
}); 

