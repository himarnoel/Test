import { useState } from "react"

const Portal= ()=> {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [allstudents, setallstudents] = useState([])
    const signup = ()=>{
        let newStudent = {firstname,lastname,email,password}
        setallstudents([...allstudents,newStudent])
    }
    var gender = "female"
  return (
    <>  
        <h1 className={gender=="male"?'bg-warning':'bg-danger'}>This is me</h1>
        {gender=="female"?<h1>Hello male</h1>:<h1>Hello other gender</h1>}
        <div className="container-fluid">
            <div className="row  ">
                <div className="col-9 mx-auto shadow-sm">
                    <h1 className="text-center">Sign Up Page</h1>
                    <input 
                        type="text" 
                        placeholder="First Name" className="form-control my-2" onChange={(e)=>setfirstname(e.target.value)}
                    />
                    <input 
                        type="text"  
                        placeholder="Last Name" className="form-control my-2" onChange={(e)=>setlastname(e.target.value)}/>
                    <input 
                        type="text"  
                        placeholder="Email" className="form-control my-2" onChange={(e)=>setemail(e.target.value)}/>
                    <input 
                        type="text"  placeholder="Password" className="form-control my-2" onChange={(e)=>setpassword(e.target.value)}/>
                    <button 
                        className="btn btn-info w-100 my-2 py-4" 
                        onClick={signup}>Sign Up
                    </button>
                </div>
                <div className="col-12">
                    <table className="table table-striped">
                        <tr>
                            <td>S/N</td>
                            <td>First Name</td>
                            <td>Lastname</td>
                            <td>Email</td>
                            <td>Actions</td>
                        </tr>
                        {
                            allstudents.map((student,index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{student.firstname}</td>
                                    <td>{student.lastname}</td>
                                    <td>{student.email}</td>
                                    <td>
                                        <button className="btn btn-warning mx-2">Edit</button>
                                        <button className="btn btn-danger mx-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portal