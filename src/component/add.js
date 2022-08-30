import React from 'react'

const Add = (props) => {
  return (
    <div>
          <div className="col-lg-10 mx-auto">
        <div className="container w-50 mt-5 ">
        <div class="input-group mb-3">
  <input type="text" class="form-control " 
  onChange={(e)=>props.name(e.target.value)}
  value={props.value}
  placeholder="Add a new todo" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-success w-25" type="button" id="button-addon2" onClick={()=>props.func()}>Add</button>
</div>
        </div>
        </div>
    </div>
  )
}

export default Add
