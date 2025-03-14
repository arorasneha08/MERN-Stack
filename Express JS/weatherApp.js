const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const request = require("requests"); 
const port = 8000;

const staticPath = path.join(__dirname, "./Project");
const templatePath = path.join(__dirname, "./templates/views");
const partialsPath = path.join(__dirname, "./templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render('index');
});

// about page with API call
app.get('/about', (req, res) => {
    const city = req.query.city;  // Expecting ?city=London

    if (!city) {
        return res.render("404Error", {
            errorComment: "City name not provided in the query. Please add ?city=<your-city> in the URL."
        });
    }

    // Fetch weather data from API
    request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03a0a088f9b914b9681f83ea1fd09272`)
        .on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];

            console.log(`City name: ${arrData[0].name}, Temperature: ${arrData[0].main.temp}`);

            // Send data back in the response (no need for res.write)
            res.render('about', {
                cityName: arrData[0].name,
                temperature: arrData[0].main.temp
            });
        })
        .on("end", (err) => {
            if (err) {
                console.log("Connection closed due to errors", err);
                return res.render("404Error", {
                    errorComment: "Error fetching data from API!"
                });
            }
        });
});

// 404 Error page for any invalid route
app.get('*', (req, res) => {
    res.render("404Error", {
        errorComment: "Oops, page not found!"
    });
});

app.listen(port, () => {
    console.log("listening to the port");
});
