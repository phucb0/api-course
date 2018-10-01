var express = require("express");
var app = express();
var morgan = require("morgan");
var bookRoute = require("./route/book");
//
// app.use(function (req,res,next) {
//     console.log("middleware 1");
//     next();
// });
//
// app.use(function (req,res,next) {
//     console.log("middleware 2");
//     // res.send("OK"); // falsch (k dc res 2 lan
//     next();
// })

// expressjs.com --> resource --> middleware

app.use(morgan("dev")); // npmjs.com --> search : Middleware

// app.get("/", function (req,res) {
//     res.send("Hello Express")
// });

app.use("/api",bookRoute);

app.listen(3000);