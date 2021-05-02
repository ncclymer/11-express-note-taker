const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 8080;
const primeData = path.join(__dirname, "/public")

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// paths //
app.get("/notes", function(req, res) {
    res.sendFile(path.join(primeData, "notes.html"));
});

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});


// server init //
app.listen(PORT, function() {
    console.log(`Now listening to port ${PORT}. Now listening on port 8080`);
})