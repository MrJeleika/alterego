
import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../slices/authSlice'

import appSlice from '../slices/appSlice'
import { apiSlice } from '../api/api'



export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware)
  },

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
