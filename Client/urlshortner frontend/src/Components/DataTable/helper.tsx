export const serverUrl = import.meta?.env?.SERVER_URL ?? "http://localhost:8080/api";

export  interface responseType {
    _id:string;
    fullUrl:string;
    shortUrl:string;
    createdAt: Date;
    updatedAt:Date;
    clicks:number;
}


export function debounce(callback:(e:Event)=> void,delay:number){
    let timer:number| undefined;
    return  function (...args:any){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            console.log(args,args[0]);
            callback(args[0]);
        },delay);

    }
}