import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { MovieInitialState, MovieResponse } from './sliceTypes'
import { RootState } from './store'

export const fetchMovie = createAsyncThunk(
  'movies/fetchMovies',
  async (imdbID: string, thunkAPI) => {
    try {
      const { data } = await axios.get<MovieResponse>(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=50d54205`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch movie.')
    }
  },
)

const initialState: MovieInitialState = {
  isLoading: true,
  movieInformation: {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: '',
  },
  errorMessage: null,
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true
      state.errorMessage = null
    })
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      if (action.payload) {
        state.isLoading = false
        state.movieInformation = action.payload
        state.errorMessage = null
      }
    })
    builder.addCase(fetchMovie.rejected, (state) => {
      state.isLoading = false
      state.errorMessage = 'Failed to fetch movies. Try to reload your page!'
    })
  },
  reducers: {},
})

export const movieIsLoading = (state: RootState) => state.movie.isLoading
export const fetchedMovie = (state: RootState) => state.movie.movieInformation
export const movieError = (state: RootState) => state.movie.errorMessage

export default movieSlice.reducer
