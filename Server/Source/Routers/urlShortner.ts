import express, { Router } from "express";
import {createShortUrl,getAllShortUrl,getShortUrl,deleteShortUrl} from "../Controllers/Controllers";


const urlShortrouter= express.Router();


urlShortrouter.post("/createShortUrl",createShortUrl);
urlShortrouter.get("/getAllShortUrl",getAllShortUrl);
urlShortrouter.get("/getShortUrl/:id",getShortUrl)
urlShortrouter.delete("/deleteShortUrl/:id",deleteShortUrl);


export default urlShortrouter ;

