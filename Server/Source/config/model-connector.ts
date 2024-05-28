import mongoose, { Connection } from "mongoose" ;


export const connectToDatabase = async (connectionString:string| undefined)=>{
    try{
    if(connectionString){
    const connection  = await mongoose.connect(connectionString?.toString());
    console.log(`database has been connected to host ${connection.connection.host} at ${connection.connection.name}`);
    }
    }
    catch(error){
        console.log(error);
    }
};
