import sharp from "sharp";
import { promises as fs } from "fs";

// const readFile = async () => {
//   const myFile = await fs.readFile("./images/full/beach.jpg");
// };

const transform = (width: unknown, height: unknown): void => {
  sharp("./images/full/beach.jpg")
    .resize(width as number, height as number)
    .toFile("./images/beach_thumb.jpg");
};

export default transform;
