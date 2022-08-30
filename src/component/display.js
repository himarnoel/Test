import React from 'react'
import  Add from '../component/add.js'
import { useState } from "react";
import Portal from './Portal';
const Display= (props) => {
 
 const [todos,  setTodo] = useState("");
 const [index,  setindex] = useState(0);
 const [edittodo, setedittodo] = useState("");
 const data=(tods, ind)=>{
  setTodo(tods);
  setindex(ind);
 }
const edit=()=>{
  props.list[index]=edittodo;
  props.array([...props.list]);
setedittodo("")
 }
 const del=()=>{
  props.list.splice(index,1);
  props.array([...props.list]);
 }
  return (
    <div>
      <div className="row h-100 w-100">
      <Add func={props.func} name={props.name} value={props.value}/>
        <div className="col-12 mt-5">
        <div className="container-fluid overflow-auto hu w-75">


          {
              props.list.map((todo, i)=> (
              <div className="container shadow-sm w-50 mt-3 mb-3  pt-4 pb-4 rounded-4 ">
              <div className="row">
              <div className="col-12 mx-auto justify-content-evenly ">{props.list[props.list.length-(i+1)]}
              <button className="btn btn-warning ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
               onClick={()=>data(props.list[props.list.length-(i+1)],props.list.length-(i+1))}>Edit</button> 
              <button className="btn btn-danger ms-2"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>data(props.list[props.list.length-(i+1)],props.list.length-(i+1))}>Delete</button></div>
              </div>  
             </div> 
            ))
          }
         

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Todo:</label>
            <input type="text" class="form-control" id="recipient-name" placeholder={todos} value={edittodo} onChange={(e)=>setedittodo(e.target.value)}/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>edit()}>Save Changes</button>
      </div>
    </div>
  </div>
</div>





<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Notice</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  Are you sure you want to delete this todo?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>del()} > Yes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Display