const express = require("express");
const { json } = require("node:stream/consumers");

const app = express();
const port = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const id = req.params.id;
  res.status(200).send(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (req, res) => {
  const data = JSON.stringify({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
  res.status(200).send(data);
});

app.use(express.json()); // make request json
app.post("/login", (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
