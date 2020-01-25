const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const app = express();
const server = http.Server(app);

const routes = require("./routes");

const { setupWebSocket } = require("./websocket");

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-az520.mongodb.net/week10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
