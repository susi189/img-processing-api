"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const transform_1 = __importDefault(require("../utilities/transform"));
const fs_1 = __importDefault(require("fs"));
//Create a Router object
const routes = express_1.default.Router();
//create a primary endpoint with Get request
routes.get("/image", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //extract the parameters form the URL
    try {
        const fileNameStr = req.query.filename;
        const widthStr = req.query.width;
        const heightStr = req.query.height;
        const fileName = fileNameStr;
        const width = parseInt(widthStr);
        const height = parseInt(heightStr);
        //check parameters
        if (isNaN(width) || isNaN(height)) {
            throw "Expected parameter width and height as number";
        }
        else if (width <= 0 || height <= 0) {
            throw "Parameter width and height need to be > 0";
        }
        else if (!fileName) {
            throw "Missing parameter filename";
        }
        else {
            const thumbFilePath = `${path_1.default.resolve(__dirname, `../../images/thumb/${fileName}${width}x${height}_thumb.jpg`)}`;
            // check if transformed file with the same parameters aready exists if not transform current file
            if (!fs_1.default.existsSync(thumbFilePath)) {
                yield (0, transform_1.default)(fileName, width, height);
            }
            //send the transformed file
            res.sendFile(thumbFilePath);
        }
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = routes;
