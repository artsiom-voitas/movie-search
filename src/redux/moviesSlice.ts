import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { MoviesSearchInitialState, MoviesSearchResponse } from './sliceTypes'
import { RootState } from './store'

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (SearchQuery: { searchValue: string; page: string }, thunkAPI) => {
    const { searchValue, page } = SearchQuery
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
  searchQuery: '',
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: true, errorMessage: null, searchQuery: action.payload }
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
export const searchMovieQuery = (state: RootState) => state.movies.searchQuery
export const totalMoviesAmount = (state: RootState) => state.movies.totalAmount

export const { setCurrentPage, setSearchQuery } = moviesSlice.actions
export default moviesSlice.reducer
