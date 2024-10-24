import { createSlice} from "@reduxjs/toolkit";

const itemSlice=createSlice({
    name:"items",
    initialState:[],
    reducers:{
        addInitialItems:(state,action)=>{//state = initialState of Slice
            console.log(action.payload);
            return action.payload;
        }
    }
});
export const itemsActions=itemSlice.actions;
export default itemSlice;