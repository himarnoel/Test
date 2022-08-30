import React from 'react'
import { useState } from "react";
const Counter = () => {
    const [count, setMyNumber] = useState(0);
    
   const  increment=(val)=>{
setMyNumber(count+val);
 
   }
   const decrement=()=>{
    setMyNumber(count-1);
       }
  return (
    <div>
 <h1>{count}</h1>
 <button onClick={()=>increment(20)}>increment</button>
 <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter