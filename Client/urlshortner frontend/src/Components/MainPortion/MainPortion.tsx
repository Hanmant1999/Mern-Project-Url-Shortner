import axios from "axios";
import { DataTable } from "../DataTable/DataTable";
import { debounce, serverUrl } from "../DataTable/helper";
import * as React from "react";




export function MainPortion(){
    const [enteredUrl,setEnteredUrl] = React.useState<string>();
    const debouncedOnchange = React.useRef(debounce(handleChange,1000))
    const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        // this can be used  if the data dependent fields  are not in the forms
        // console.log(e);
        // let dataToBeSend:string = "" ;
        // const formData  = new FormData(e.target);
        // for(const pair of formData.entries()){
        //    dataToBeSend = pair[1] as string;
        // }
        if(enteredUrl){
        const response:Response = await axios.post(`${serverUrl}/createShortUrl`,{fullUrl:enteredUrl});
        console.log(response);
        }
        setEnteredUrl("");
    }

    function handleChange(e){
        setEnteredUrl(e.target.value);
    }

    
    return (
        <div>
        <div style = {{backgroundImage:"url('../../../public/BackgroundImage.jpg')",height:"500px",backgroundSize:"contain",backgroundRepeat:"none",backgroundPositionX:"center"
    }}>     <form style={{position:"relative" , left:"30%",top:"50%"}} onSubmit={handleSubmit}>
            <input type="text" name="enteredUrl" style={{border:"5px solid lightgrey",width:"40%"}} placeholder="https://www.urlShortner.link/" onChange={debouncedOnchange.current}/>
            <button  disabled={!enteredUrl} style ={{color:"white",backgroundColor:"green",textAlign:"center",margin:"0px 20px",padding:"0px 10px"}}>Submit</button>
            </form>
        </div>
        <DataTable  />
        </div>
    )
}