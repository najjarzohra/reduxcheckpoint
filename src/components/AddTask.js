import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from './redux/Todo';
  function AddTask(){
const Dispatch =useDispatch();
   
const[input,setInput]=useState('')
  const handelAdd=()=>{
    Dispatch(add(input))
  }


return (
    <div className="d-flex justify-content-center p-2 mb-3" style={{gap :"1em"}}>
<input placeholder="ENTER YOUR TASK" onChange={(e)=>setInput(e.target.value)}></input>
    <Button variant="success" onClick={handelAdd}> Add task</Button>
    
    </div>
  )
};

export default AddTask;