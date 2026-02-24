import { createSlice } from "@reduxjs/toolkit";
const counterslice=createSlice(
    {
        name:"mycounter",
        initialState:{
            count:0
        },
        reducers:{
            Increment:(state)=>{
                state.count++;
            },
            Decrement :(state)=>{
                state.count--;
            }
        }
    }
)
export const{Increment,Decrement} =counterslice.actions;
export default counterslice.reducer;