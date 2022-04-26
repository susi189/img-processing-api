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
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require(".."));
const transform_1 = __importDefault(require("../utilities/transform"));
const request = (0, supertest_1.default)(__1.default);
describe("Test endpoints", () => {
    it("gets the api endpoint", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("api/image?");
        expect(response.status).toBe(200);
    }));
});
describe("Test image processing", () => {
    it("should receive 3 parameters", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, transform_1.default)("beach", 200, 200);
        expect(transform_1.default).not.toThrow();
    }));
});
