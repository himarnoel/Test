import React from 'react'
import {useNavigate} from  'react-router-dom';
const About = () => {
    const navigate= useNavigate();
    const redirect=()=>{
        navigate('/home')
    }
  return (
    <div>
<h1>About</h1>
        <div>
            <button onClick={()=>redirect()} className="btn btn-primary"> Redirect</button>
        </div>
    </div>
  )
}

export default About