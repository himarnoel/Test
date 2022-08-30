import React from 'react'
import { useParams } from "react-router";
const Single = () => {
    const {username}= useParams()
  return (
    <div>
    
        <h1> I am {username} </h1>
    </div>
  )
}

export default Single