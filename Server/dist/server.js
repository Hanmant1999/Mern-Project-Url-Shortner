"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const urlShortner_1 = __importDefault(require("./Routers/urlShortner"));
const model_connector_1 = require("./config/model-connector");
dotenv_1.default.config();
console.log(process.env.MONGODB_CONNECTION_STRING);
(0, model_connector_1.connectToDatabase)((_a = process.env.MONGODB_CONNECTION_STRING) === null || _a === void 0 ? void 0 : _a.toString());
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use(express_1.default.json());
process.on("SIGIO", () => { process.exit(); });
const server = app.listen(parseInt(port.toString()), () => {
    console.log(`server is running successfully on port ${port}`);
});
app.use("/api", urlShortner_1.default);
console.log("Hello");
