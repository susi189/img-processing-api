"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
// const readFile = async () => {
//   const myFile = await fs.readFile("./images/full/beach.jpg");
// };
const transform = (width, height) => {
    (0, sharp_1.default)("./images/full/beach.jpg")
        .resize(width, height)
        .toFile("./images/beach_thumb.jpg");
};
exports.default = transform;
