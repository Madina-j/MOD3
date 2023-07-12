const express = require("express");
const router = express.Router();
const axios = require("axios");

const Image = require("../model/Image.cjs");

module.exports = router;

//Post Method
router.post("/image", async (req, res) => {
  try {
    const title = req.body.title;

    // const image = new Image({ ...body });

    const { data } = await axios.get(
      `https://api.unsplash.com/photos/random/?query=${title}&client_id=${process.env.UNSPLASH_KEY}`
    );

    const image = new Image({
      title: title,
      id: data.id,
      description: data.description,
      alt_description: data.alt_description,
      urls: {
        small: data.urls.small,
      },
    });

    const imageToBeSaved = await image.save();

    res.status(200).json(imageToBeSaved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/images", async (req, res) => {
  try {
    const images = await Image.find();

    res.status(200).json(images);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "error" });
  }
});

router.delete("/images/:imageId", async (req, res) => {
  try {
    const imageId = req.params.imageId;
    await Image.findByIdAndDelete(imageId);

    const images = await Image.find();
    res.status(200).json(images);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "error while deleting imageg" });
  }
});
router.get("/images/:imageId", async (req, res) => {
  try {
    const imageId = req.params.imageId;

    const { data } = await axios.get(
      `https://api.unsplash.com/photos/${imageId}/?client_id=${process.env.UNSPLASH_KEY}`
    );
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "error while deleting imageg" });
  }
});
