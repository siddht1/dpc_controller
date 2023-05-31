// In src/index.js 
// import fetch from 'node-fetch';
const express = require("express"); 
const app = express(); 

const PORT = process.env.PORT || 3002; 


// const response = await fetch(_url);
// const data = await response.json();
// For testing purposes 
app.get("/", (req, res) => { 
//     res.send('{"status":"working"}');
    app.use(express.static(__dirname));
});

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});
