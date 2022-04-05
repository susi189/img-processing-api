import express from "express";

const image1 = express.Router();

image1.get("/", (req, res) => {
  res.send("Image 1!");
});

export default image1;
