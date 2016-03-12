var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var cparser = require('cookie-parser');
var esession = require('express-session');

// Setup the view engine
app.set("view engine", "vash");

app.use(bodyParser.urlencoded()); 

// set the public static resource folder
app.use(express.static(__dirname + "/public"));
app.use(cparser());
app.use(flash());
app.use(esession({ secret: "PluralSightBoard" }));
// Map the routes 
controllers.init(app); 

//Create the server 
var server = http.createServer(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json"); 
    res.send({ name: "Neeraj", isValid: true, group: "admin" });
});

app.get("/users/:uid/photos/:photo", function (req, res) {
    res.status(200).send(req.params.uid + req.params.photo); 
});

// Listen for connections
server.listen(3000); 