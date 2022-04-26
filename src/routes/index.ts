import express from "express";
import path from "path";
import transform from "../utilities/transform";
import fs from "fs";

//Create a Router object
const routes = express.Router();

//create a primary endpoint with Get request

//check again on the typoe of response and request
routes.get(
  "/image",
  async (req: express.Request, res: express.Response): Promise<void> => {
    //extract the parameters form the URL
    const fileNameStr = req.query.filename as string;
    const widthStr = req.query.width as string;
    const heightStr = req.query.height as string;

    let fileName = fileNameStr;
    let width = parseInt(widthStr);
    let height = parseInt(heightStr);

    //check if width and height are numbers

    if (isNaN(width) || isNaN(height)) {
      throw "Height and width need to be a number";
    } else {
      const thumbFilePath = `${path.resolve(
        __dirname,
        `../../images/thumb/${fileName}${width}x${height}_thumb.jpg`
      )}`;

      // check if transformed file with the same parameters aready exists if not transform current file
      if (!fs.existsSync(thumbFilePath)) {
        const transformFile = await transform(fileName, width, height);
      }
      //send the transformed file
      res.sendFile(thumbFilePath);
    }
  }
);

export default routes;
