import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : "user",
    initialState:{
        userName : "",
        currentUser :{},
        isFetching : false,
        isError : false,
        isSuc : false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.userName = action.payload.firstName
            state.isFetching = false
            state.isError = false
            state.isSuc = true
        },
        loginFailure:(state)=>{
            state.isFetching = false
            state.isError = true
            state.isSuc = false
        },
        logout:(state)=>{
            state.userName=""
            state.currentUser={}
            state.isError = false
            state.isSuc = false
        }
    },
});

export const {loginStart,loginSuccess,loginFailure,logout} =userSlice.actions;
export default userSlice.reducer