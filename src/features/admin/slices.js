import {createSlice} from '@reduxjs/toolkit';
import {fetchGroupsWithStudents, fetchUsers} from "./actions.js";

const initialState = {
    users: [],
    groups: [],
    has_next: true,
    loading: 'idle',
    error: null,
};


export const adminSlice = createSlice({
    name: 'Admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'pending';
                state.error = ''
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.users = action.payload.users;
                state.has_next = action.payload.has_next
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            })
            .addCase(fetchGroupsWithStudents.pending, (state) => {
                state.loading = 'pending';
                state.error = ''
            })
            .addCase(fetchGroupsWithStudents.fulfilled, (state, action) => {
                state.loading = 'idle';
                state.groups = action.payload;
            })
            .addCase(fetchGroupsWithStudents.rejected, (state, action) => {
                state.loading = 'idle';
                state.error = action.error.message;
            });
    },
});

export default adminSlice.reducer;
