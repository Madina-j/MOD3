const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const routes = require("./routers/routes.cjs");
const cors = require("cors");
const path = require("path");
// app.get("/*", function (req, res) {
//   res.sendFile("index.html", {
//     root: path.join(__dirname, "./dist"),
//   });
// });
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../Backend/dist")));

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
    app.listen(5000, () => {
      console.log("server serves static files");
    });
  } catch (e) {}
};

start();
