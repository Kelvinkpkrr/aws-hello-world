const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.writeFile("notes.json", JSON.stringify({ name: "Kelvin" }));
  res.send("Home page");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log("Hello world"));
