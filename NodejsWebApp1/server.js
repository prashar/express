var http = require("http");
var express = require("express");
var app = express();

var server = http.createServer(app);
app.get("/", function (req, res) {
    res.send("<html><body><h1>" + "Express says Hello" + "</h1></body></html>"); 
});

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json"); 
    res.send({ name: "Neeraj", isValid: true, group: "admin" });
});
server.listen(3000); 