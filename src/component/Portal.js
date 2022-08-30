import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

const Portal = () => {
const [update, setupdate] = useState(false)
const [dele, setdele] = useState(false)

const [added, setadded] = useState(false);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge]=useState("");
  const [allStudent, setAll] = useState([]);

  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editIndex, setindex] = useState("");
const signUp=()=>{
  if(email!=""&& name!=""&& age!="")
 {
  let newStudent ={email, name, age};
  setAll([...allStudent, newStudent]);
  setName("");
  setAge("");
  setEmail("");
  setupdate(false);
  setadded(true);
  setShow(true);
 }else{ 
  setShow(true);
  setupdate(false);
  setadded(false);
}
 
}
const getVal =(student, index)=>{
  setEditName(student.name);
  setEditAge(student.age);
  setEditEmail(student.email);
  setindex(index);
  setadded(false);
}
const edit=()=>{
  let newStudent ={email:editEmail, name:editName, age:editAge};
  allStudent[editIndex] = newStudent
  setAll([...allStudent]);
  setupdate(true);
  setShow(true);
  setdele(false);
}
const del=()=>{
  allStudent.splice(editIndex,1);
  setAll([...allStudent]);
  setShow(true);
  setdele(true)
  setupdate(true);
}

  return (
    <>
     <div className="container shadow mx-auto row w-50 mt-2 rounded">
      <h3 className="mt-3 float-end">Signup</h3>
  <div className="col-lg-12 mb-3 mt-2">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"  value={name}  onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="col-lg-12 mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </div><div className="col-lg-12 mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
  </div>
<button className="btn btn-success mb-3 mx-auto" onClick={()=>signUp()}>Signup</button>
</div>
<br />
<br />
<div className="container-fluid w-75 overflow-auto shadow-sm hu rounded">
 {allStudent.length !==0 ?<table className="table table-bordered mt-3 ">
    <thead>
      <tr> <th scope="col">S/N</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">Actions</th></tr>
    </thead>

    <tbody>
  {
  
  allStudent.map((student, i)=>(
    <tr>
    <td scope="row">{i+1}</td>
    <td>{student.name}</td>
    <td>{student.email}</td>
    <td>{student.age}</td>
    <td>  <button type="button" className="btn btn-warning me-4 " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" onClick={()=>getVal(student,i)}>Edit</button>
    <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>getVal(student,i)}>Delete</button></td>
  </tr>
  ))
  }
  </tbody>
  </table>:     <div className="container">No data</div>}
</div>
<div>
<div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit {name} details </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name</label>
            <input type="text" class="form-control" id="recipient-name" value={editName} onChange={(e)=>setEditName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Email</label>
            <input type="text" class="form-control" id="recipient-name" value={editEmail} onChange={(e)=>setEditEmail(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Age</label>
            <input type="text" class="form-control" id="recipient-name" value={editAge} onChange={(e)=>setEditAge(e.target.value)}/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>edit()}>Edit</button>
      </div>
    </div>
  </div>
</div></div>


<div>  
<div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Notice</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
  Are you sure you want to delete this user's data?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={()=>del()}> Yes</button>
      </div>
    </div>
  </div>
</div>
<ToastContainer className="p-3" position="top-end">
<Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Notice</strong>
        
          </Toast.Header>
          <Toast.Body className={update!==true?"text-danger fs-6":"text-success fs-6" }>{ added!==true?<span>{update!==true?<span> Fill up the empty field(s)</span>:<span>{dele==true?<span>Deleted </span>:<span>Saved </span>}<span>Successfully</span></span>}
          </span>: <span className="text-success">New user Added</span> }</Toast.Body>
        </Toast>
        </ToastContainer>
</div>
    </>
  )
}

export default Portal

