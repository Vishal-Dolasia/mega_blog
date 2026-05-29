import { createSlice } from "@reduxjs/toolkit";


const initalState = {
    status : false,
    userData: null
}


const authSlice = createSlice({
    name :"auth",
    initalState,
    reducer:{
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (atate) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions;


export default authSlice.reducer;