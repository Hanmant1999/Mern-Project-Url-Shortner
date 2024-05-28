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
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDatabase = (connectionString) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (connectionString) {
            const connection = yield mongoose_1.default.connect(connectionString === null || connectionString === void 0 ? void 0 : connectionString.toString());
            console.log(`database has been connected to host ${connection.connection.host} at ${connection.connection.name}`);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.connectToDatabase = connectToDatabase;
