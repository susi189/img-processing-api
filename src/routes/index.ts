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
    try {
      const fileNameStr = req.query.filename as string;
      const widthStr = req.query.width as string;
      const heightStr = req.query.height as string;

      let fileName = fileNameStr;
      let width = parseInt(widthStr);
      let height = parseInt(heightStr);

      //check parameters
      if (isNaN(width) || isNaN(height)) {
        throw "Expected parameter width and height as number";
      } else if (width <= 0 || height <= 0) {
        throw "Parameter width and height need to be > 0";
      } else if (!fileName) {
        throw "Missing parameter filename";
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
    } catch (error) {
      console.log(error);
    }
  }
);

export default routes;
