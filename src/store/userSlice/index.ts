import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../types/user";
import type { RootState } from "../types";
import getCurrentAuthenticatedUser from "../../utility/auth/getCurrentAuthenticatedUser";

const currentAuthenticatedUser: User | null = getCurrentAuthenticatedUser();

const initialState: User = {
    name: currentAuthenticatedUser?.name || "",
    email: currentAuthenticatedUser?.email || "",
    role: currentAuthenticatedUser?.role || null,
    token: currentAuthenticatedUser?.token || ""
}

const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login(state, action: PayloadAction<User>){
            return action.payload
        }
    },

});

export default useSlice.reducer;
export const { 
    login,
} = useSlice.actions;

export const selectIsLogged = (state: RootState) => Boolean(state.user.token);