var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
        name: "Jeff",
        phone: "1234567890",
        email: "test@gmail.com",
        uniqueID: "420"
    },
    {
        name: "Jeff",
        phone: "1234567890",
        email: "test@gmail.com",
        uniqueID: "420"
    }
];

var waitList = [
    {
        name: "Jeff",
        phone: "1234567890",
        email: "test@gmail.com",
        uniqueID: "420"
    }
];

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.post("/api/reservation", function(req, res) {
    var newReservation = req.body;
  
    console.log(newReservation);
    if (tables.length <5 ) {
        tables.push(newReservation);
        return res.end("Yay! You are officially booked!");
    } else {
        waitList.push(newReservation);
        return res.end("Sorry you are on the wait list");
    };
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});