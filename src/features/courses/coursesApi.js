import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: getBaseQuery('courses'),
    endpoints: (builder) => ({
        getUserCourses: builder.query({
            query: () => '/my',
            // onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
            //     try {
            //         const {data} = await queryFulfilled;
            //         console.log(data)
            //         dispatch(setUser({user: data}))
            //     } catch(e) {
            //         dispatch(logoutUser())
            //     }
            // }
        }),

    }),
});

export const {useGetUserCoursesQuery} = coursesApi;
