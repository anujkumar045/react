import { createSlice } from "@reduxjs/toolkit";
const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            console.log(actions.payload);
            state.task.push(actions.payload)
        },
        recDel:(state,actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id);
        },
        taskComp:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].complete=true
                }
            }
        },
        taskIncomp:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].complete=false
                }
            }
        },
        editDataSave:(state,actions)=>{
            console.log(actions.payload);
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].work=actions.payload.work;
                }
            }
        }
    }
})

export const{addTask,recDel,taskComp,taskIncomp,editDataSave}=todoSlice.actions;
export default todoSlice.reducer;