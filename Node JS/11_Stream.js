// In Node.js, streams are a way to handle asynchronous data flow efficiently, especially for large data sets. Instead of reading or writing an entire file or data chunk at once, streams process data in smaller chunks, reducing memory usage and improving performance.

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
    var fs = require("fs");

    // reading a stream  
    fs.readFile("input.txt", (error, data) => {
        if (error) return console.error(error);
        res.end(data.toString()); // this will print the whole data of the txt file on the page
    });
});

server.listen(8000, "127.0.0.1");

// create stream 
const rstream = fs.createReadStream("input.txt");
server.on("request", (req, res) => {
    // to read data when available 
    rstream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    // writing the data in the document 
    rstream.on("end", () => {
        res.end();
    });
    // for file not found  
    rstream.on("error", (error) => {
        console.log(error);
        res.end("file not found ");
    });
}); 
server.listen(8000,"127.0.0.1"); 


// to do the above lengthy code in one line we use pipe ()

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res); 
});
server.listen(8000, "127.0.0.1"); 