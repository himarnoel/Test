import React from 'react';
import Logo from './logo512.png';
import './App.css';
import Portal from './component/Portal.js';
import Display from './component/display.js'
import { useState } from "react";
import  Add from './component/add.js'

import { Routes  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NotFound from './component/NotFound';
import {Navigate} from  'react-router-dom';
import Single from './component/Single';
function App() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
 
  const Add=()=>{
if(data!=""){
  setTodo([...todo, data]);
  setData("");
}else{
  alert("enter the");
}
  }
  return (
    <div className="App">
  <h1 className="fs-2 mt-3 text-success">Todo List </h1>
  <Display func={Add} name={setData}  list={todo} value={data} array={setTodo} />
    
    </div>
  );
}

export default App;
