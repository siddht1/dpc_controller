// In src/index.js 
// import fetch from 'node-fetch';
const express = require("express"); 
const bodyParser = require("body-parser");
const app = express(); 

const PORT = process.env.PORT || 3002; 

// serve your css as static
app.use(express.static(__dirname));

// get our app to use body parser 
app.use(bodyParser.urlencoded({ extended: true }))

// const response = await fetch(_url);
// const data = await response.json();
// For testing purposes 
app.get("/", (req, res) => { 
//     res.send('{"status":"working"}');
   // app.use(express.static(__dirname));
    //res.send(__dirname);
    res.sendFile(__dirname + "/index.html");
   var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
res.send({"status":"OK","API":"WORKING @ V1","API_V1":"/API/V1","url":fullUrl,"CORS":"allowed"});
});

// app.post("/", (req, res) => {
//    console.log(req.body)
//   res.send(req.body);
// });
app.post("/", (req, res) => {
  var subName = req.body.yourname
  var subEmail = req.body.youremail;
 res.send("Hello " + subName + ", Thank you for subcribing. You email is " + subEmail);
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
