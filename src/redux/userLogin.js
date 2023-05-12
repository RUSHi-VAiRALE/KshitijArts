import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",
    initialState:{
        userName : "",
        currentUser :{},
        isFetching : false,
        isError : false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.userName = action.payload.firstName
            state.isFetching = false
        },
        loginFailure:(state)=>{
            state.isError = true
        },
        logout:(state)=>{
            state.userName=""
            state.currentUser={}
        }
    },
});

export const {loginStart,loginSuccess,loginFailure,logout} =userSlice.actions;
export default userSlice.reducer