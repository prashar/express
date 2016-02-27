var http = require("http");
var express = require("express");
var app = express();

// Setup the view engine
app.set("view engine", "vash"); 

var server = http.createServer(app);
app.get("/", function (req, res) {
    //res.send("<html><body><h1>" + "Express says Hello" + "</h1></body></html>"); 
    res.render("index", { title: "express + vash" }); 
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json"); 
    res.send({ name: "Neeraj", isValid: true, group: "admin" });
});
server.listen(3000); 