var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require("./routes/appRoutes");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://admin:gfweT1yyeI5A33AL@recetario.cltqy48.mongodb.net/?retryWrites=true&w=majority"
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", appRoutes);
http.createServer(app).listen(port);

console.log("Backend running on port:", port);