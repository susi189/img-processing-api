"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1_1 = __importDefault(require("./api/image-1"));
const image_2_1 = __importDefault(require("./api/image-2"));
//Create a Router object
const routes = express_1.default.Router();
//create a primary endpoint with Get request
routes.get("/", (req, res) => {
    res.send("Hello there");
});
routes.use("/image1", image_1_1.default);
routes.use("/image2", image_2_1.default);
exports.default = routes;
