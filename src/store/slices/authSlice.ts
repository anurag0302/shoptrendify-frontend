import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { SITE_NAME } from "../../utils/constants";
import { User } from "../../utils/types/user";
export interface AuthState {
  user: User | null;
  isLoggedIn: boolean
}
const initialState: AuthState = {
  user: null,
  isLoggedIn: false
}
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{  user: User,token: string }>) => {
      state.user = action.payload.user;
      state.isLoggedIn=true;
      localStorage.setItem(SITE_NAME + 'token', action.payload.token)
    },
    // Action to log out
    logout: (state) => {
      localStorage.removeItem(SITE_NAME + 'token')
      state.isLoggedIn=false;
      state.user = null;
    },
  }
})
export const { login, logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;