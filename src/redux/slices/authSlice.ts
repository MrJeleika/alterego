
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthInitialState, IUser } from "../../types/types";


const initialState: IAuthInitialState = {
  isAuthorized: false,
  users: [{username: "admin", password: "12345"}],
  currentUser: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized: (state, action:PayloadAction<boolean>) => {
      state.isAuthorized = action.payload;
    },
    setCurrentUser: (state, action:PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
  }

})

export const { setAuthorized,setCurrentUser } = authSlice.actions;
export default authSlice.reducer
