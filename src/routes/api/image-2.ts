import express from "express";

const image2 = express.Router();

image2.get("/", (req, res) => {
  res.send("Image 2!");
});

export default image2;
