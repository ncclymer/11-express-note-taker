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

// writes user entries to db.json

app.post("/api/notes", function(req, res) {
    let saveData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newData = req.body;
    let uniqueID = (saveData.length).toString();
    newData.id = uniqueID;
    saveData.push(newData);

    fs.writeFileSync("./db/db.json", JSON.stringify(saveData));
    console.log("Note saved to db.json. Content: ", newData);
    res.json(saveData);
})


// server init //
app.listen(PORT, function() {
    console.log(`Now listening on port ${PORT}.`);
})