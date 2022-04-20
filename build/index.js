"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { promises as fsPromises } from "fs";
const route_1 = __importDefault(require("./route"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/api", route_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
