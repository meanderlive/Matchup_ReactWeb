    // userSlice.js

import { createSlice } from '@reduxjs/toolkit';

const memberSlice = createSlice({
  name: 'member',
  initialState: {
    following: [], // Array to store followed users
  },
  reducers: {
    followUser: (state, action) => {
        const userId = action.payload;
        if (!state.following.includes(userId)) {
          state.following.push(userId);
          // Save to local storage
          localStorage.setItem('following', JSON.stringify(state.following));
        }
      },
    // Add more reducers if needed
  },
});

export const { followUser } = memberSlice.actions;

export default memberSlice.reducer;
