const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const routes = require("./routers/routes.cjs");

app.use("/api", routes);
app.get("/", (req, res) => {
  res.send("OK");
});
dotenv.config();
app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.xx4op9u.mongodb.net/`
    );
    app.listen(3000, () => {
      console.log(`Server Started at ${3000}`);
    });
  } catch (e) {}
};

start();
