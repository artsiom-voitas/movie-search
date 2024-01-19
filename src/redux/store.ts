import { configureStore } from '@reduxjs/toolkit'

import MovieReducer from './movieSlice'
import MoviesReducer from './moviesSlice'

export const store = configureStore({
  reducer: {
    movies: MoviesReducer,
    movie: MovieReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
