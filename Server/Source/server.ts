import dotenv from "dotenv";
import express from "express";
import  cors from "cors";
import urlShortrouter from "./Routers/urlShortner";
import { connectToDatabase } from "./config/model-connector";
dotenv.config();
console.log(process.env.MONGODB_CONNECTION_STRING);
connectToDatabase(process.env.MONGODB_CONNECTION_STRING?.toString());

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({
    origin:"*",
}));
app.use(express.json());
process.on("SIGIO",()=>{process.exit()});
const server = app.listen(parseInt(port.toString()),()=>{
    console.log(`server is running successfully on port ${port}`);
});

app.use("/api",urlShortrouter);

console.log("Hello");
