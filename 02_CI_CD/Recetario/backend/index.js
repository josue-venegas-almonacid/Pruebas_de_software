var http = require('http');
var express = require('express');
var port = process.env.PORT || 8083;
var app = express();
var appRoutes = require("./routes/appRoutes");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

mongoose.connect(
  "mongodb+srv://admin:gfweT1yyeI5A33AL@recetario.cltqy48.mongodb.net/?retryWrites=true&w=majority"
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", appRoutes);
app.use('/uploads', express.static('uploads'));
http.createServer(app).listen(port);

console.log("Backend running on port:", port);