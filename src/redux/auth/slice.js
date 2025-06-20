import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
            .addCase(logIn.rejected, handleRejected)
            .addCase(logOut.pending, handlePending)
          .addCase(logOut.fulfilled, (state) => {
              state.user = {
                  name: "",
                  email: "",
              }
              state.isLoggedIn = false;
              state.token = null;

  })
        
    });

      
    export default authSlice.reducer;