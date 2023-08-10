import { configureStore } from '@reduxjs/toolkit'

import MoviesReducer from './moviesSlice'
import MovieReducer from './movieSlice'

export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    movie: MovieReducer
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
