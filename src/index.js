const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Monkeys are here and there!");
});

app.listen("8080", () => {
  console.log("App listening at http://localhost:8080");
});
