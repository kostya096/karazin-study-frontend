import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from "./user/userSlice.js";
import {userAPI} from "./user/userAPI.js";
import {adminSlice} from "./admin/slices.js";
import {coursesAPI} from "./courses/coursesAPI.js";
import {timetableAPI} from "./timetable/timetableAPI.js";
import {tasksAPI} from "./tasks/tasksAPI.js";
import {groupsAPI} from "./groups/groupsAPI.js";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [coursesAPI.reducerPath]: coursesAPI.reducer,
        [timetableAPI.reducerPath]: timetableAPI.reducer,
        [tasksAPI.reducerPath]: tasksAPI.reducer,
        [groupsAPI.reducerPath]: groupsAPI.reducer,
        admin: adminSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userAPI.middleware)
            .concat(coursesAPI.middleware)
            .concat(timetableAPI.middleware)
            .concat(tasksAPI.middleware)
            .concat(groupsAPI.middleware),

});

