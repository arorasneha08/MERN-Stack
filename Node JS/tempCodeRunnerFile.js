const data = fs.readFileSync("thapa/bio.txt", "utf8");
console.log(data); // my name is snehaPlz subscribe my channel

// renaming a file :- 
fs.renameSync("thapa/bio.txt" , "thapa/mybio.txt"); 

// deleting a file
fs.unlinkSync("thapa/mybio.txt"); 

// deleting a folder:-  
fs.rmdirSync("thapa"); 