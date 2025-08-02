// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      // Your product list goes here
    ],
  },
  reducers: {
    // Add any product-related reducers as needed
  },
});

export const { actions: productActions, reducer: productReducer } = productSlice;
