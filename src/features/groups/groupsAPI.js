import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const groupsAPI = createApi({
    reducerPath: 'groupsApi',
    baseQuery: getBaseQuery('groups'),
    endpoints: (builder) => ({
        getGroupsUsers: builder.query({
            query: () => '/with_users',
        })
    }),
});

export const {useGetGroupsWithUsers,} = groupsAPI;
