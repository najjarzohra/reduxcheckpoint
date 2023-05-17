import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { delet,togueltodo,edittodo } from "./redux/Todo";
function Task(Todo){
const Dispatch=useDispatch
const handelTogel=(id)=>{

    Dispatch(togueltodo(id))
}
const handelDelet=(id)=>{
    Dispatch(delet(id))
}

const handelEdit=(id)=>{
    Dispatch(edittodo(id))
}
    return(
 <div className="d-flex align-items-center justify-content-between nb-3">
           <div style={{flex:"1", padding:".3em",border:"1px solid black ", marginRight:"1em",border:"1px solid black "}}>
                <div className="d-flex justify-content-between align-items-center">
                    {Todo.description}
                    <input style={{width:"1.3em",height:"1.3em"}} type="checkbox"  onClick={()=>handelTogel(Todo.id)}  checked={Todo.isDone}/>
                </div> 
            </div>
         <div className="d-flex" style={{gap:"1em"}} >
          <Button variant="info" onClick={()=>handelEdit(Todo.id)}>Edit</Button>
            <Button variant="info" onClick={()=>handelDelet(Todo.id)}>Delet</Button>

        </div>


</div>

    )
}
export default Task;