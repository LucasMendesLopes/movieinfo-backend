const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://lucas_lopes:Bloco740HFF12@cluster0.nlz7p.mongodb.net/movieInfo"
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
