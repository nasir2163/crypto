import { createSlice } from "@reduxjs/toolkit";

export const loginSlice=createSlice({
    name:'login',
    initialState:{
        isLoggedIn:false,
        user:{}
    },
    reducers:{
        setIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload
        },
        setLoggedInUser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {setIsLoggedIn,setLoggedInUser}=loginSlice.actions
export default loginSlice.reducer;