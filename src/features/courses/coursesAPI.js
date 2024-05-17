import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const coursesAPI = createApi({
    reducerPath: 'coursesApi',
    baseQuery: getBaseQuery('courses'),
    endpoints: (builder) => ({
        getUserCourses: builder.query({
            query: () => '/my',
        }),
        getCourseById: builder.query({
            query: (courseId) => `/${courseId}`,
        }),
        createCourse: builder.mutation({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body
            }),
        }),
        uploadCourseImage : builder.mutation({
            query: ({file}) => ({
                url: `../files/upload`,
                method: 'POST',
                body: file,
            }),
        }),
        getAdminCourses: builder.query({
            query: () => '/',
        }),

    }),
});

export const {
    useGetUserCoursesQuery,
    useGetCourseByIdQuery,
    useCreateCourseMutation,
    useUploadCourseImageMutation,
    useGetAdminCoursesQuery
} = coursesAPI;
