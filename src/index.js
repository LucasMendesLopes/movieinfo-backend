const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

const { MONGO_URL } = process.env;

mongoose.connect(MONGO_URL);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
