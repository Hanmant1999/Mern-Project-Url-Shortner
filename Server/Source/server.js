import dotenv from "dotenv";
import express from "express";
import  cors from "cors";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
process.on("SIGIO",()=>{process.exit()});
const server = app.listen(parseInt(port),()=>{
    console.log(`server is running successfully on port ${port}`);
});

app.get("/",(req,res)=>{
    // res.writeHead(200);
    res.header(()=> {"name","Hanmant"}) ;
    // res.send("Hello World !")
    res.status(200).json({"Name":"Hello"});
})

console.log("Hello");

 server.on("connect",()=>{
    console.log("server is running");
 });