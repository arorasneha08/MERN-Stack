const fs = require("fs"); 
fs.writeFile("read.txt", "today is rainy day", (error)=>{
    console.log("file is created ");
    console.log(error);
}); 

// append file
fs.appendFile("read.txt", "subscribe plz", (error)=>{
    console.log("text appended");
});

// read data 
fs.readFile("read.txt", (error , data)=>{
    console.log(data); // get buffer data
})

fs.readFile("read.txt", "UTF-8", (error , data)=>{
    console.log(data); // today is rainy daysubscribe plz
})

// example question  :- 
// const fs = require("fs");

// create a folder : - 
fs.mkdir("thapa", (error)=>{
    console.log("folder created");
});

// write file
fs.writeFile("./thapa/bio.txt", "my name is sneha", (error)=>{
    console.log("files created");
})

// append data: - 
fs.appendFile("./thapa/bio.txt" , " plz like share", (eror)=>{
    console.log("files data appendded");
})

// read file :- 
fs.readFile("./thapa/bio.txt", "utf-8", (error, data)=>{
    console.log("file is readed");
    console.log(data);
});

// rename:- 
fs.rename("./thapa/bio.txt", "./thapa.mybio.txt", (error)=>{
    console.log("rename done");
}); 

// delete file:
fs.unlink("./thapa/mybio.txt", (error)=>{
    console.log("file deleted");
}); 

// delete folder: -
fs.rmdir("thapa" , (error)=>{
    console.log("folder deleted");
}); 