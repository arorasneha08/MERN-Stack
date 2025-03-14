const add = (a,b)=>{
    return a+b; 
};
const name = "sneha";

const sub = (a,b)=>{
    return a-b; 
};

// this function exports only a property at a time but if we want to export multiple functions then we need , below ...
// if multiple functions imported , it gives preference to last imported function
module.exports = add ; 
module.exports = name ; 

// to go export of multiple function use , 
module.exports.add = add ; 
module.exports.name = name; 
module.exports.sub = sub ;

// the above approach is inconvienent to write the module export everytime ,
// shortcut : - destructuring 
module.exports = {add , sub,  name}; 
