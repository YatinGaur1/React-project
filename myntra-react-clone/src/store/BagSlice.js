import { createSlice} from "@reduxjs/toolkit";

const bagSlice=createSlice({
    name:"bag",
    initialState:[],
    reducers:{
        addtobag:(state,action)=>{ //state = initialState of Slice
           state.push(action.payload);
        },
        removefrombag:(state,action)=>{
         return state.filter(itemId=>itemId!==action.payload);
        }
    }
});
export const bagActions=bagSlice.actions;
export default bagSlice;