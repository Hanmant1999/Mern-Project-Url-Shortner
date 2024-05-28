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
exports.deleteShortUrl = exports.getShortUrl = exports.getAllShortUrl = exports.createShortUrl = void 0;
const urlShort_1 = __importDefault(require("../Models/urlShort"));
const createShortUrl = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullUrl } = request.body;
    console.log(fullUrl);
    try {
        const checkShortUrlExistance = yield urlShort_1.default.find({ fullUrl });
        if (checkShortUrlExistance.length > 0) {
            console.log(checkShortUrlExistance);
            response.status(403).json({ message: "this url already  availiable in database", shortUrl: checkShortUrlExistance.at(0) });
        }
        else {
            const shorturl = urlShort_1.default.create({ fullUrl });
            console.log(shorturl);
            response.status(200).json({ message: "url has been shortened successfully", shorturl: shorturl });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.createShortUrl = createShortUrl;
const getAllShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allShortUrl = yield urlShort_1.default.find();
        if (allShortUrl.length < 0) {
            res.status(404).json({ message: "no short urls found" });
        }
        else {
            res.status(200).json({ message: "short urls found", shortAllUrls: allShortUrl });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllShortUrl = getAllShortUrl;
const getShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield urlShort_1.default.findOne({ _id: req.params.id });
        if (shortUrl) {
            shortUrl.clicks++;
            shortUrl.save();
            console.log(shortUrl);
            res.redirect(`${shortUrl.fullUrl}`);
        }
        else {
            res.status(404).json({ message: "something went wrong !!" });
        }
    }
    catch (error) {
        res.status(404).json({ mesage: "something went wroong !!" });
    }
});
exports.getShortUrl = getShortUrl;
const deleteShortUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield urlShort_1.default.findOneAndDelete({ _id: req.params.id });
        if (shortUrl) {
            res.status(200).json({ message: `short url with ${req.params.id} deleted successfully` });
        }
        else {
            res.status(404).json({ message: "something went wrong !!" });
        }
    }
    catch (error) {
        res.status(404).json({ mesage: "something went wroong !!" });
    }
});
exports.deleteShortUrl = deleteShortUrl;
