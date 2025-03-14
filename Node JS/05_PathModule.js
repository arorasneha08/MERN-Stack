// const path = require("path");
// to get the folder name 
// console.log(path.dirname("E:/Node JS/05_PathModule.js")); // " E:/Node JS

// get the extension of the file 
// console.log(path.extname("E:/Node JS/05_PathModule.js")); // .js

// get the name of the file 
// console.log(path.basename("E:/Node JS/05_PathModule.js")); // 05_PathModule.js

// to get all the info at the same time 
// console.log(path.parse("E:/Node JS/05_PathModule.js")) // {
//     root: 'E:/',
//     dir: 'E:/Node JS',
//     base: '05_PathModule.js',
//     ext: '.js',
//     name: '05_PathModule'
//   }

// const myPath = path.parse("E:/Node JS/05_PathModule.js");
// console.log(myPath.root); // E:/
// console.log(myPath.base); // 05_PathModule.js




// creating multiple files using path function :-

// console.log(__dirname); // c:\Users\sneha\Desktop\Node JS

const fs = require("fs");
const path = require("path");
// used .join to join the path of the current directory to the file we want 
//in other words selecting the folder 

const dirPath = path.join(__dirname, "thapa");
for(let i = 0 ; i<5 ; i++){
    fs.writeFileSync(dirPath + "/hello"+ i+ ".txt" , "A simple text files ")
}
fs.readdir(dirPath, (error , files)=>{
    console.log(files); // print files name in a directory 
    // accessing the file names 
    files.forEach((item, index)=>{
        console.log("file name "+ (index +1)+ " : " + item);
    })
}); 

