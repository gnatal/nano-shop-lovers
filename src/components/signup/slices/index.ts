import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ISignUpForm, ISignUpState } from '../types';

const initialFormState: ISignUpForm = {
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
}

// Define the initial state using that type
const initialState: ISignUpState = {
    formState: initialFormState
};

const reducers = {
  setAdminToken: (state: IAuthState, action: PayloadAction<string>) => {
    state.adminToken = action.payload;
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      const user = action.payload?.auth?.userToken;
      const admin = action.payload?.auth?.adminToken;
      return { userToken: user ? user : state.userToken, adminToken: admin ? admin : state.adminToken };
    })
  },
});

export const { setAdminToken } = authSlice.actions;

export default authSlice.reducer;
