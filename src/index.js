// In src/index.js 
// import fetch from 'node-fetch';
const express = require("express"); 
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
});

app.post("/", (req, res) => {
   console.log(req.body)
  res.send(req.body);
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
