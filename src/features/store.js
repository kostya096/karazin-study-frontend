import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "./user/userSlice.js";
import {userApi} from "./user/userApi.js";
import {adminSlice} from "./admin/slices.js";
import {coursesApi} from "./courses/coursesApi.js";
import {timetableApi} from "./timetable/timetableApi.js";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [timetableApi.reducerPath]: timetableApi.reducer,
        admin: adminSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(coursesApi.middleware)
            .concat(timetableApi.middleware),

});

