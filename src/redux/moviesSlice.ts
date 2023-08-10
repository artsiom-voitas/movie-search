import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { RootState } from './store'
import { MoviesSearchInitialState, MoviesSearchResponse } from './sliceTypes';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchQuerry: { searchValue: string; page: string }, thunkAPI) => {
    const { searchValue, page } = searchQuerry
    try {
      const { data } = await axios.get<MoviesSearchResponse>(
        `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=50d54205`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch movies.')
    }
  },
)

const initialState: MoviesSearchInitialState = {
  searchQuerry: '',
  isLoading: true,
  results: [],
  totalAmount: '',
  currentPage: '1',
  errorMessage: null,
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true
      state.errorMessage = null
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoading = false
        state.results = action.payload.Search
        state.totalAmount = action.payload.totalResults
        state.errorMessage = action.payload?.Error
      }
    })
    builder.addCase(fetchMovies.rejected, (state) => {
      state.isLoading = false
      state.errorMessage = 'Failed to fetch movies. Try to reload your page!'
    })
  },
  reducers: {
    setSearchQuerry: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: true, errorMessage: null, searchQuerry: action.payload }
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: true, currentPage: action.payload }
    },
  },
})

export const moviesAreLoading = (state: RootState) => state.movies.isLoading
export const fetchedMovies = (state: RootState) => state.movies.results
export const currentMoviesPage = (state: RootState) => state.movies.currentPage
export const searchMoviesError = (state: RootState) => state.movies.errorMessage
export const searchMovieQuerry = (state: RootState) => state.movies.searchQuerry
export const totalMoviesAmount = (state: RootState) => state.movies.totalAmount

export const { setCurrentPage, setSearchQuerry } = moviesSlice.actions
export default moviesSlice.reducer
