import {createAsyncThunk} from "@reduxjs/toolkit";
import {serverURL} from "../config.js";


export const fetchUsers = createAsyncThunk('Admin/fetchUsers', async ({skip, limit, query, filters}) => {
    try {
        const params = new URLSearchParams();
        params.append('skip', skip);
        params.append('limit', limit);
        if (query.length > 0) {
            params.append('query', query);
        }

        const response = await fetch(`${serverURL}/users/get_list?${params.toString()}`);
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        return data
    } catch (error) {
        if (error.response && error.response.data && error.response.data.detail) {
            return error.response.data.detail
        } else {
            return 'An error occurred while fetching users'
        }
    }
});
export default fetchUsers;
