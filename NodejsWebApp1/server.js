var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

// Setup the view engine
app.set("view engine", "vash");

// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes 
controllers.init(app); 

//Create the server 
var server = http.createServer(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json"); 
    res.send({ name: "Neeraj", isValid: true, group: "admin" });
});

// Listen for connections
server.listen(3000); 