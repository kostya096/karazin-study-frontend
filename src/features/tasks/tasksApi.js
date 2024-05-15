import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const tasksApi = createApi({
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

    }),
});

export const {useGetUserTasksQuery, useSendTaskForReviewMutation} = tasksApi;
