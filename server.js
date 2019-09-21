var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

var pageCounter2 = 0;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
];

var waitList = [

];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    pageCounter2++;
});

app.get("/home.html", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
    pageCounter2++;
});

app.get("/reserve.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    pageCounter2++;
});

app.get("/tables.html", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    pageCounter2++;
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

app.get("/api/pageviews2", function(req, res) {
    return res.json(pageCounter2);
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



const accountSid = 'AC4fd3b1b1829b3f4f21463b064a4ead7f';
const authToken = 'a153f9e5a528ac72052849de519cfe4c';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: 'Hello there!',
         from: '+12529438275',
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         to: '+12529438275'
       })
      .then(message => console.log(message.sid));