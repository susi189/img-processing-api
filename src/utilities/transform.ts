import sharp from "sharp";

//transform the picture with sharp

const transform = async (fileName: string, width: number, height: number) => {
  try {
    const newFile = await sharp("./images/full/" + fileName + ".jpg")
      .resize(width, height)
      .toFile(
        "./images/thumb/" + fileName + width + "x" + height + "_thumb.jpg"
      );
    return newFile;
  } catch (err) {
    return err;
  }
};

export default transform;
