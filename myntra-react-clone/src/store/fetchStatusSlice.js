import { createSlice} from "@reduxjs/toolkit";
import { DEFUALT_ITEMS } from "../data/items";
const fetchStatusSlice=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,//flase :pending true :done
        currentlyfetching:false,
    },
    reducers:{
       markedfetchDone:(state)=>{
            const store=state
            store.fetchDone=true;
            return store;
        },
        markedfetchingStarted:(state)=>{
            const store=state;
            store.currentlyfetching=true;
            return store;
        },
        markedfetchFinished:(state)=>{
            const store=state;
            store.currentlyfetching=false;
            return store;
         
        }
    }
});
export const fetchStatusActions=fetchStatusSlice.actions;
export default fetchStatusSlice;