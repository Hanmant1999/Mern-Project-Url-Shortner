import * as React from "react";
import axios, { AxiosResponse } from "axios";
import {responseType, serverUrl} from "./helper";



export function DataTable(){
    const[data,setData] = React.useState<responseType[]>([]);

     async function getDataTableData (){
        const response:AxiosResponse= await axios.get(`${serverUrl}/getAllShortUrl`);
            console.log(response.data.shortAllUrls);
           setData(response.data.shortAllUrls);
         }
     React.useEffect(()=>{
        getDataTableData();
     },[]);
     
    return (
        <table style={{border:"5px solid black",borderCollapse:"collapse",width:"80%", margin:"10px 200px",backgroundColor:"lightcyan"}}>
            <thead>
               <tr style={{border:"5px solid white"}}>
                <th style={{border:"5px solid white",textAlign:"center"}}>Full Url</th>
                <th style={{border:"5px solid white"}} >Shorten Url</th>
                <th style={{border:"5px solid white"}}>No.of Clicks</th>
                <th style={{border:"5px solid white"}}>Action</th>

               </tr>
            </thead>
            <tbody id="table-body">
            {data?.map((dataRow:responseType)=>{
              return (
                <tr style={{border:"5px solid white"}} key={dataRow._id} id={dataRow._id}>
                <td style={{borderTop:"5px solid white",textAlign:"center"}}>{dataRow.fullUrl}</td>
                <td style={{border:"5px solid white",textAlign:"center"}}>{dataRow.shortUrl}</td>
                <td style={{border:"5px solid white",textAlign:"center"}}>{dataRow.clicks}</td>
                <td style={{border:"5px solid white",textAlign:"center"}}><button >Delete</button></td>
               </tr>
              )
            })}
           
            </tbody>
        </table>
    )
}