import express from "express";
import transform from "../utilities/transform";

//Create a Router object
const routes = express.Router();

//create a primary endpoint with Get request

routes.get("/image", (req, res) => {
  const fileNameStr = req.query.filename as string;
  const widthStr = req.query.width as string;
  const heightStr = req.query.height as string;

  let fileName: string;
  fileName = fileNameStr;
  let width: number;
  width = parseInt(widthStr);
  let height: number;
  height = parseInt(heightStr);

  if (fileName && width && height) {
    transform(fileName, width, height);

    res.sendFile(fileName + "_thumb.jpg", { root: "./images/thumb" });
  } else {
    throw "Missing parameter";
  }
});

export default routes;
