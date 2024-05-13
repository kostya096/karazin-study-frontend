import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "./user/userSlice.js";
import {userApi} from "./user/userApi.js";
import {adminSlice} from "./admin/slices.js";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        admin: adminSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),

});

