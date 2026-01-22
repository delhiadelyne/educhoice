const express = require("express");
const cors = require("cors");
const schools = require("./data/schools");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EduChoice API is running");
});

app.get("/schools", (req, res) => {
  res.json(schools);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
