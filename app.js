const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
  res.send("Home page");
});

const port = process.env.port || 3000;
app.listen(port, () => console.log("Hello world"));
