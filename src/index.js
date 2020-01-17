const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();

const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-az520.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
