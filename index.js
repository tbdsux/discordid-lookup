const fetch = require("cross-fetch");
const express = require("express");
const cors = require("cors");

const app = express();

const apiUrl = "https://discord.com/api/v10/users/";
const TOKEN = process.env.TOKEN;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Discord Id Lookup");
});

app.get("/id/:id", async (req, res) => {
  const { id } = req.params;

  const r = await fetch(apiUrl + id, {
    method: "GET",
    headers: {
      Authorization: "Bot " + TOKEN,
    },
  });

  const response = await r.json();

  res.status(r.status).json(response);
});

app.listen(3000, () => {
  console.log("Listening on port http://localhost:3000");
});

module.exports = app;
