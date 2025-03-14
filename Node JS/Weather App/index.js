const http = require("http");
const fs = require("fs");
const request = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceValue = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp)
        .replace("{%tempmin%}", orgVal.main.temp_min)
        .replace("{%tempmax%}", orgVal.main.temp_max)
        .replace("{%location%}", orgVal.name)
        .replace("{%country%}", orgVal.sys.country)
        .replace("{%tempStatus%}", orgVal.weather[0].main)
        console.log(temperature);
        
    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        request("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=03a0a088f9b914b9681f83ea1fd09272")
            .on("data", (chunk) => {
                const objData = JSON.parse(chunk);
                const arrData = [objData];
                
                console.log(arrData);
                
                const realTimeData = arrData.map((val) => {
                    return replaceValue(homeFile, val);
                }).join(""); 
                
                // Send the response with the real-time data
                // res.writeHead(200, { "Content-Type": "text/html" });
                res.write(realTimeData);
            })
            .on("end", (err) => {
                if (err) {
                    console.log("Connection closed due to errors", err);
                }
                res.end();
            });
    }
});

server.listen(8000, "127.0.0.1");
