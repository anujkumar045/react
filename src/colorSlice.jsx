import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"green"
    },
    reducers:{
        colorChange:(state,actions)=>{
            state.color=actions.payload.color;
        }
    }
})
export const {colorChange} = colorSlice.actions;
export default colorSlice.reducer;