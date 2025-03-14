// for synchronous actions 

const fs  = require("fs");

// creating a new file 
fs.writeFileSync("read.txt", "Welcome to my channel"); 

// updating the text in the file by replacing the content of the previous file 
fs.writeFileSync("read.txt" , "Welcome to my channel thapa technical"); 

// append the content in the given file 
fs.appendFileSync("read.txt" , "How are u , I am fine tq :")

// reading a file gives its buffer data 
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data); // <Buffer 57 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 20 74 68 61 70 61 20 74 65 63 68 6e 69 63 61 6c 0d 0a 0d 0a 48 6f 77 20 61 72 65 20 75 ... 31 more bytes>

// to get the original data in the string
// const buf_data = fs.readFileSync("read.txt");
org_data = buf_data.toString(); 
console.log(org_data); 

// output : - 
// Welcome to my channel thapa technical
// How are u ?? How are u , I am fine tq :)

// rename a file 
fs.renameSync("read.txt", "readwrite.txt");

// creating folder
fs.mkdirSync("thapa"); 

// creating a file if not exists , if exists then new one is created 
fs.writeFileSync("thapa/bio.txt" , "my name is sneha");

// appending data in file
fs.appendFileSync("thapa/bio.txt", "Plz subscribe my channel");

// read file sync : - 
const data = fs.readFileSync("thapa/bio.txt", "utf8");
console.log(data); // my name is snehaPlz subscribe my channel

// renaming a file :- 
fs.renameSync("thapa/bio.txt" , "thapa/mybio.txt"); 

// deleting a file
fs.unlinkSync("thapa/mybio.txt"); 

// deleting a folder:-  
fs.rmdirSync("thapa"); 
