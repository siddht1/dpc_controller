// In src/index.js 
// import fetch from 'node-fetch';
const express = require("express"); 
const app = express(); 

const PORT = process.env.PORT || 3002; 

// serve your css as static
app.use(express.static(__dirname));
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
  res.send("Thank you for subscribing");
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
