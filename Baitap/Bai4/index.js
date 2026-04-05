const express = require("express");
const PORT = 3000;
const app = express();

app.use("/", (req, res) => {
  return res.json("hello");
});

app.listen(PORT, () => {
  console.log("Server running at port 3000");
});
