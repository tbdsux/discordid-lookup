import fetch from "cross-fetch";
import express from "express";

const app = express();

const apiUrl = "https://discord.com/api/v10/users/";
const TOKEN = process.env.TOKEN;

app.get("/", (req, res) => {
  res.send("Hello");
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

  res.status(200).json(response);
});

app.listen(3000, () => {
  console.log("Listening on port :3000");
});
