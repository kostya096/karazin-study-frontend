import {createApi} from "@reduxjs/toolkit/query/react";
import {getBaseQuery} from "../config.js";

export const timetableAPI = createApi({
    reducerPath: 'timetableApi',
    baseQuery: getBaseQuery('timetable'),
    endpoints: (builder) => ({
        getTimeTable: builder.query({
            query: (groupId) => `/get_by_group/${groupId}/current`,
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

export const {useGetTimeTableQuery} = timetableAPI;
