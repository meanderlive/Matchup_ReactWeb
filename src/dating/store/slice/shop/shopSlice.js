// shopSlice.js

import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    // Your shop-related state goes here
  },
  reducers: {
    // Add shop-related reducers as needed
  },
});

export const { actions: shopActions, reducer: shopReducer } = shopSlice;
