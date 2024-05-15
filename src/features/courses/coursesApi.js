import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: getBaseQuery('courses'),
    endpoints: (builder) => ({
        getUserCourses: builder.query({
            query: () => '/my',
        }),
        getCourseById: builder.query({
            query: (courseId) => `/${courseId}`,
        }),

    }),
});

export const {useGetUserCoursesQuery, useGetCourseByIdQuery} = coursesApi;
