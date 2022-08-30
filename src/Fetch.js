import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react';
const Fetch = () => {
    const [response, setresponse] = useState([]);
    const [isloading, setisloading] = useState(true);
    const url="https://api.github.com/users";
 const getData= async()=>{
   let response=await axios.get(url);
console.log(response.data);
setresponse([...response.data]);
}
  return (
    <div>
        <button onClick={()=>getData()}>Fetch</button>
        <br />
        <br />
        <br />
        {
            response.map((data,i)=>(
          <div key={i}>
            <img src={data.avatar_url} alt="" />
              <div>
    {data.login}
    </div>


               <br />
               <br />
          </div>  
            ))
        }
    </div>
  )
}

export default Fetch