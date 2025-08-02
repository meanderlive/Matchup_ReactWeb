// src/dating/store/slice/datingApiSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

export const fetchUsersByGender = createAsyncThunk(
  'dating/fetchUsersByGender',
  async ({ gender, userId }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/User/getByGender/${gender}/${userId}`
      );
      
      if (response.data && response.data.data) {
        return response.data; // Return the actual users array
      }
      return []; // Return empty array if no data
      
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const datingApiSlice = createSlice({
  name: 'datingApi',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersByGender.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersByGender.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersByGender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default datingApiSlice.reducer;