import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../types/user";
import type { RootState } from "../types";

const initialState: User = {
    name: "",
    email: "",
    role: null,
    token: ""
}

const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(){

        }
    },

});

export default useSlice.reducer;
export const { 
    login,
} = useSlice.actions;

export const selectIsLogged = (state: RootState) => Boolean(state.user.token);