import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTermAndCond,PrivacyPolicy } from "../api/commonAPI";



export const getAllTermAndConditionsAsync = createAsyncThunk(
  '/termsAndConditions/getall',
  async (modeId) => {
    try {
      const response = await getTermAndCond(modeId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

export const getAllPrivacyPolicy = createAsyncThunk(
  '/termsAndConditions/getAllPrivacyPolicy',
  async (modeId) => {
    try {
      const response = await PrivacyPolicy(modeId);
      return response;
    } catch (error) {
      throw error;
    }
  }
);


const termAndConditionSlice = createSlice({
  name: 'activies',
  initialState: {
    termAndCondition: [],
    PrivacyPolicy:[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTermAndConditionsAsync.pending, (state) => {
        state.loading =true
      })
      .addCase(getAllTermAndConditionsAsync.fulfilled, (state,action) => {
        state.activies = action.payload
        state.loading =false
      })
      .addCase(getAllTermAndConditionsAsync.rejected, (state, action) => {
      state.loading = true
      })
      .addCase(getAllPrivacyPolicy.pending, (state) => {
        state.loading =true
      })
      .addCase(getAllPrivacyPolicy.fulfilled, (state,action) => {
        state.PrivacyPolicy = action.payload
        state.loading =false
      })
      .addCase(getAllPrivacyPolicy.rejected, (state, action) => {
      state.loading = true
      })
 
  },
});

export default termAndConditionSlice.reducer;
