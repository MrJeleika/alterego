import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAppInitialState, INews } from '../../types/types'

const initialState:IAppInitialState = {
  news: [],
  loadedNews: 10,
  isFetching: false,
  isFetchingError: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setFetching: (state, action:PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setFetchingError: (state, action:PayloadAction<boolean>) => {
      state.isFetchingError = action.payload;
    },
    setNews: (state, action:PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    
    setLoadedNews: (state, action:PayloadAction<number>) => {
      state.loadedNews = action.payload;
    },
    
  },
})

export default appSlice.reducer

export const {
  setFetching,setFetchingError,setNews,
  setLoadedNews
} = appSlice.actions
