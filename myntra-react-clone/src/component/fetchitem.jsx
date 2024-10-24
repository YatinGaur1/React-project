import { useEffect } from "react";
import {useDispatch, useSelector}from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

 const Fetchitem=()=>{
 const fetchstatus=useSelector(store=>store.fetchStatus);
 const dispatch=useDispatch();

 useEffect(()=>{
   if(fetchstatus.fetchDone) {
      return;
   }
 const controller=new AbortController();
 const signal=controller.signal;
 dispatch(fetchStatusActions.markedfetchingStarted());
 fetch("http://localhost:8080/items",{signal})
      .then((res) => res.json())
      .then(({items}) => {
         dispatch(fetchStatusActions.markedfetchDone());
         dispatch(itemsActions.addInitialItems(items[0])) 
         dispatch(fetchStatusActions.markedfetchFinished());
      });
      return ()=>{
        controller.abort();
      }
 },[fetchstatus])
 
 return <></> //this is headless component where ui not present
}
export default Fetchitem;