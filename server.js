const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;
const primeData = path.join(__dirname, "/public")

app.use(express.static('public'));
app.use(express.urlencoded)



app.listen(PORT, function() {
    console.log(`Now listening to port ${PORT}. Now listening on port 8080`);
})