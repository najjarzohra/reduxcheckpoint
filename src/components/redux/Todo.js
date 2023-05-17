import { createSlice } from '@reduxjs/toolkit';
import  {v4 as uuidv4} from 'uuid';
import { PayloadAction } from '@reduxjs/toolkit';

const TodoSlice=createSlice({

name:'Todos',
initialState:[{
    id:uuidv4(),
    description:"",
    isDone:true,
},
{
    id:uuidv4(),
    description:"",
    isDone:false,
},
 {
     id:uuidv4(),
    description:"",
    isDone:true,
 }],
reducers:{

    add:(state,action)=>{
    const newTask={
        id:uuidv4(),
        description:action.payload,
        isDone:false,
}
state.push(newTask)
},
     delet:(state,action)=>{
    return state.filter ((e) =>e.id !==action.payload)
     },

    
     edittodo:(state,action)=>{ 
        const index = state.findIndex((e)=>e.id === action.payload)
        state[index].description =prompt('Test');

},
    togueltodo:(state,action)=>{
return state.map((e)=>{
    if(e.id===action/payload){
return{ ...e,isDone : !e.isDone}

    }else   {return e}
})
    }
},
})

export const{add,delet,edittodo,togueltodo}=TodoSlice.actions;
export default TodoSlice.reducer;