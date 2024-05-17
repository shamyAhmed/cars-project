import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";


const store = configureStore({
    reducer: {
        user
    },
    devTools: {
        trace: true
    }
});

export default store;