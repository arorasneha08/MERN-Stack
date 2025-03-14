import chalk from "chalk";
import validator from "validator";
// const validator = require("validator"); 

// check if it is a email or not 
const res = validator.isEmail("sneha@sneha.com");
const res1 = validator.isEmail("snehasneha.com");
console.log(res); // true 
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res)); // true
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1)); // false 
 