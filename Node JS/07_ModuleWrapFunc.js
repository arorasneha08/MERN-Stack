console.log(__dirname);
// c:\Users\sneha\Desktop\Node JS

console.log(__filename);
// c:\Users\sneha\Desktop\Node JS\07_ModuleWrapFunc.js

// this module wrapper function tells us how all the modules are private inside their functions 

// the data name inside it is private and is not accessed by other person and not output on the console
(function(exports , require, module, __filename , __dirname){
    const name = "vinod"; 
    console.log(name);
}); 