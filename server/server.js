const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const accountSid = "AC2b79da6d54ca014e370bc9a820c18951";
const authToken = "16dc5d680a5ed158178752de799ef8a9";
const client = require("twilio")(accountSid, authToken);
const twilioPhone = "+12055123933";
const port = 3001;
const ip = "micha";
const httpServer = require("http").Server(app);
const socketServer = require("socket.io")(httpServer);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello Gennadey!` }));
});

app.get("/api/messages", (req, res, next) => {
  client.messages.create({
    body: `Hello there`,
    from: "+14086699401",
    to: "+14083960398"
  });
});

socketServer.on("connection", socket => {
  console.log("A client has connected");
  socket.on("disconnect", () => {
    console.log("A Client has disconnected");
  });
});

app.listen(port, ip, () => console.log(`port: ${port}; ip: ${ip}`));
