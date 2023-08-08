import { configureStore } from '@reduxjs/toolkit'

import MoviesReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
