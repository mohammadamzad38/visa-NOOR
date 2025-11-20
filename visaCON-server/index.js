const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my first server. And thanked me later:--");
});

app.listen(port, () => {
  console.log(`'visaCON server running: ${port}`);
});
