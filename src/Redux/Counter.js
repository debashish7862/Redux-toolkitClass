import { createSlice } from "@reduxjs/toolkit";





 const  counter=createSlice({
    name:'data',
    initialState:{
        counter:0,
        data:1,
        name:"debashish"
    },reducers:{
        increment:(s)=>{
            s.counter=s.counter+1
            s.data=s.data+1
            s.name="Prabhas"
        },
        decrement:(s)=>{
            s.counter=s.counter-1
            s.data=s.data-1
            s.name="Bhubaneswar"
        }
       
        
    }
})
export default counter.reducer;
export const{increment,decrement}=counter.actions
