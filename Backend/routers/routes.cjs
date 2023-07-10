const express = require("express");

const router = express.Router();

const Model = require("../model/model");

module.exports = router;

//Post Method
router.post("/post", (req, res) => {
  res.send("Post API");
});

//Get all Method
router.get("/getOne/:id", (req, res) => {
  res.send(req.params.id);
});

//Get by ID Method
router.get("/getOne/:id", (req, res) => {
  res.send("Get by ID API");
});

//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
