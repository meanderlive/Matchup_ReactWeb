import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, getbyiduser, sentOtpApi, updateUserByIdMetri, userLogin, verifyOTPApi } from "../api/AuthAPI";

//login Api slice
export const loginSlice = createAsyncThunk(
  "Users_User/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await userLogin(credentials);
      return response;
    } catch (error) {
      throw error;
    }
  }
);

//create user Api slice
export const createUserAsync = async (userData) => {
    try {
      const response = await createUser(userData);
      return response;
    } catch (error) {
      return error?.response?.data;
    }
  }

  // user get by id slice 
  export const getByIdUsersAsync = createAsyncThunk(
    'user/getByIdUsersAsync',
    async (userData) => {
      try {
        const response = await getbyiduser(userData);
        return response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
    }
  );


  export const getByIdviewUsersAsync = createAsyncThunk(
    'user/getByIdviewUsersAsync',
    async (userData) => {
     
      try {
        const response = await getbyiduser(userData);
        return response.data;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
    }
  );

// send otp
export const sendOtpAsync = createAsyncThunk(
  "UsersUser/sendOtp",
  async (userData) => {
    try {
      const response = await sentOtpApi(userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
)

// send otp
export const verifyOtpAsync = createAsyncThunk(
  "Users_Usr/verifyOtpAsync",
  async (userData) => {
    try {
      const response = await verifyOTPApi(userData);
     
      return response;
    } catch (error) {
      throw error;
    }
  }
)


//update user by id
export const updateUserById = createAsyncThunk(
  'user/updateById',
  async (userData) => {
    try {
      const response = await updateUserByIdMetri(userData);
      return response.data;
    } catch (error) {
     throw error;
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    Viewuser: {},
    loading: false,
    error: null,
    userOtp: [],
    isAuth:false,
    interests: [],
    getByIDUser : []
  },
  reducers: {    logout:(state)=>{
    state.isAuth = false
  }},
  extraReducers: (builder) => {
    builder
      .addCase(loginSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true
        state.user = action.payload;
      //   const tokenn = action.payload.data.token
      //   if (action && action.payload && action.payload.data && action.payload.data.token) {
      //     localStorage.setItem("token", JSON.stringify(action?.payload?.data?.token));
      // } else {
      //     console.error("Invalid action or payload structure");
      // }
      
      })
      .addCase(loginSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // .addCase(createUserAsync.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(createUserAsync.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.user = action.payload.user;
      //   state.error = action.payload.response.data;
      // })
      // .addCase(createUserAsync.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      .addCase(getByIdUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByIdUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getByIdUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getByIdviewUsersAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getByIdviewUsersAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.Viewuser = action.payload;
      })
      .addCase(getByIdviewUsersAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendOtpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOtpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userOtp = action.payload;
      })
      .addCase(sendOtpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(verifyOtpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuth = true
        // state.userOtp = action.payload;
      })
      .addCase(verifyOtpAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserById.pending, (state) => {
        state.status = false;
      })
      .addCase(updateUserById.fulfilled, (state, action) => {
        state.status = true;
        state.user = action.payload;
      })
      .addCase(updateUserById.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});
export const { logout} = userSlice.actions
export default userSlice.reducer;

