import shortUrlModel from "../Models/urlShort";
import express from "express" ;

export const createShortUrl = async (request:express.Request,response:express.Response)=>{
     const {fullUrl} = request.body ;
     console.log(fullUrl);
    try{
        const checkShortUrlExistance = await shortUrlModel.find({fullUrl});
        if(checkShortUrlExistance.length > 0){
            console.log(checkShortUrlExistance);
            response.status(403).json({message:"this url already  availiable in database",shortUrl:checkShortUrlExistance.at(0)});
        }
        else{
            const shorturl = shortUrlModel.create({fullUrl});
            console.log(shorturl);
            response.status(200).json({message:"url has been shortened successfully",shorturl:shorturl});
        }
    }
    catch(error){
        console.log(error);
    }
}


export const getAllShortUrl= async (req:express.Request,res:express.Response)=>{
    try {
      const allShortUrl = await shortUrlModel.find();
      if(allShortUrl.length < 0){
        res.status(404).json({message:"no short urls found"});
      }
      else{
        res.status(200).json({message:"short urls found",shortAllUrls:allShortUrl});
      }

    }
    catch(error){
        console.log(error);
    }

}

export const getShortUrl= async(req:express.Request,res:express.Response)=>{
    try {
        const shortUrl = await shortUrlModel.findOne({_id:req.params.id});
        if(shortUrl){
            shortUrl.clicks++;
            shortUrl.save();
            console.log(shortUrl);
            res.redirect(`${shortUrl.fullUrl}`);
        }
        else{
            res.status(404).json({message:"something went wrong !!"});
        }

    }
    catch(error){
        res.status(404).json({mesage:"something went wroong !!"});
    }
}


export const deleteShortUrl= async (req:express.Request,res:express.Response)=>{
    
    try {
        const shortUrl = await shortUrlModel.findOneAndDelete({_id:req.params.id});
        if(shortUrl){
            res.status(200).json({message:`short url with ${req.params.id} deleted successfully`});
        }
        else{
            res.status(404).json({message:"something went wrong !!"});
        }

    }
    catch(error){
        res.status(404).json({mesage:"something went wroong !!"});
    }
    
}

