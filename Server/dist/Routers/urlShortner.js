"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers_1 = require("../Controllers/Controllers");
const urlShortrouter = express_1.default.Router();
urlShortrouter.post("/createShortUrl", Controllers_1.createShortUrl);
urlShortrouter.get("/getAllShortUrl", Controllers_1.getAllShortUrl);
urlShortrouter.get("/getShortUrl/:id", Controllers_1.getShortUrl);
urlShortrouter.delete("/deleteShortUrl/:id", Controllers_1.deleteShortUrl);
exports.default = urlShortrouter;
