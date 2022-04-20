import express from "express";
import transform from "../utilities/transform";

//Create a Router object
const routes = express.Router();

//create a primary endpoint with Get request

routes.get("/image", (req, res) => {
  const widthStr = req.query.width as string;
  const heightStr = req.query.height as string;

  let width: number;
  width = parseInt(widthStr);
  let height: number;
  height = parseInt(heightStr);
  res.send(transform(width, height));
});

export default routes;
