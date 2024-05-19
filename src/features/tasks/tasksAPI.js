import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const tasksAPI = createApi({
    reducerPath: 'tasksApi',
    baseQuery: getBaseQuery('tasks'),
    endpoints: (builder) => ({
        getUserTasks: builder.query({
            query: (courseId) => `/${courseId}/me`,
            providesTags: ['UserTasks']
        }),
        sendTaskForReview: builder.mutation({
            query: (taskId) => ({
                url: `/send/${taskId}`,
                method: 'POST',
            }),
            invalidatesTags: ['UserTasks']
        }),
        getTaskById: builder.query({
            query: (taskId) => `/${taskId}`,
        }),
        createTask: builder.mutation({
            query: (body) => ({
                url: `/`,
                method: 'POST',
                body
            }),
        }),
        deleteTask: builder.mutation({
            query: (taskId) => ({
                url: `/${taskId}`,
                method: 'DELETE',
            }),
        }),
        editTask: builder.mutation({
            query: ({taskId, ...body}) => ({
                url: `/${taskId}`,
                method: 'PUT',
                body
            }),
        })

    }),
});

export const {
    useGetUserTasksQuery,
    useSendTaskForReviewMutation,
    useCreateTaskMutation,
    useDeleteTaskMutation,
    useGetTaskByIdQuery,
    useEditTaskMutation
} = tasksAPI;
