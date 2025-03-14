// console.log(process);
// console.log(process.argv);

const fs = require("fs");
const input = process.argv; 

// process.argv is an array containing the command-line arguments passed when running the script.
// process.argv[0] is the path to the Node.js executable.
// process.argv[1] is the path to the script file
// process.argv[2], process.argv[3], and so on represent additional arguments provided by the user when they run the script.

if(input[2] == "add"){
    fs.writeFileSync(input[3],input[4]); 
}
else if(input[2] == "remove"){
    fs.unlinkSync(input[3]); 
}
else{
    console.log("invalid input ");
}

// command on the input : -
// for add file 
// node 14_InputOnCommand.js add  orange.txt "this is not a orange

// for removal 
// node 14_InputOnCommand.js remove orange.txt         

