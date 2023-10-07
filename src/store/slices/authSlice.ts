import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { TOKEN_NAME } from "../../utils/constants";
interface User {
  id: string,
  name: string,
  email: string,
  phone_number: number
}
export interface AuthState {
  loading: boolean;
  user: User | null;
  isLoggedin: boolean;
}
const initialState: AuthState = {
  loading: true,
  user: null,
  isLoggedin: false
}
const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string, user: User }>) => {
      state.user = action.payload.user;
      state.isLoggedin = true;
    },
    // Action to log out
    logout: (state) => {
      localStorage.removeItem(TOKEN_NAME)
      state.user = null;
      state.isLoggedin = false;
    },
    setLoading:(state,action)=>{
      state.loading=action.payload
    }
  }
})
export const { login, logout,setLoading } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;