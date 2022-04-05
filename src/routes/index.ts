import express from "express";
import image1 from "./api/image-1";
import image2 from "./api/image-2";

//Create a Router object
const routes = express.Router();

//create a primary endpoint with Get request

routes.get("/", (req, res) => {
  res.send("Hello there");
});

routes.use("/image1", image1);
routes.use("/image2", image2);

export default routes;
