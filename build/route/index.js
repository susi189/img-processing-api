"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transform_1 = __importDefault(require("../utilities/transform"));
// import * as path from "path";
//Create a Router object
const routes = express_1.default.Router();
//create a primary endpoint with Get request
routes.get("/image", (req, res) => {
    const fileNameStr = req.query.filename;
    const widthStr = req.query.width;
    const heightStr = req.query.height;
    let fileName;
    fileName = fileNameStr;
    let width;
    width = parseInt(widthStr);
    let height;
    height = parseInt(heightStr);
    if (fileName && width && height) {
        (0, transform_1.default)(fileName, width, height);
        res.sendFile(fileName + "_thumb.jpg", { root: "./images/thumb" });
    }
    else {
        throw "Missing parameter";
    }
});
exports.default = routes;
