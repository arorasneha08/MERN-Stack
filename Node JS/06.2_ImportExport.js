const oper = require("./06.1_ImportExport");
console.log(oper);

// one function 
console.log(add(5,5));


// for multiple functions 
// console.log(oper.add(5,5)); // 10
// console.log(oper.sub(5,5)); // 0 
// console.log(oper.name); // sneha


// the above approach is inconvienent to write the module export everytime ,
// shortcut : - destructuring 

const {add, sub , name} = require("./06.1_ImportExport")
console.log(add(5,5)); // 10
console.log(sub(4,6)); // -2
console.log(name); //sneha

