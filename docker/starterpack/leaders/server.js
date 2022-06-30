// Import required modules
const express = require("express");
const { exec } = require("child_process");


// App
const app = express();
app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

let jsonText = {}

// Only route
app.get("/", function (req, res) {
  res.render(__dirname + "/index.ejs");
});

// Start server
app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);
