import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const groupsAPI = createApi({
    reducerPath: 'groupsApi',
    baseQuery: getBaseQuery('groups'),
    endpoints: (builder) => ({
        getGroupsUsers: builder.query({
            query: () => '/with_users',
            providesTags: ['Groups']
        }),

        createGroup: builder.mutation({
            query: (body) => ({
                url: '/create',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Groups']
        }),

        deleteGroup: builder.mutation({
            query: (group_id) => ({
                url: `/${group_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Groups']
        }),

        editGroup: builder.mutation({
            query: ({id: group_id, ...body}) => ({
                url: `/${group_id}`,
                method: 'PUT',
                body
            }),
            invalidatesTags: ['Groups']
        }),
    }),
});

export const {useGetGroupsUsersQuery, useCreateGroupMutation, useDeleteGroupMutation, useEditGroupMutation} = groupsAPI;
