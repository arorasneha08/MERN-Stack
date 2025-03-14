// const chalk = require("chalk");
import chalk from "chalk";

console.log(chalk.blue.italic("hello world"));
console.log(chalk.blue.underline("hello world"));
// background colr change hoga 
console.log(chalk.blue.inverse("hello world"));

console.log(chalk.green.underline.inverse('true'));
console.log(chalk.red.underline.inverse('false'));


