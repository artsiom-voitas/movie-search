import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface MoviesSearchInitialState {
  isLoading: boolean
  results: MoviesSearchResults[]
  totalAmount: string
  currentPage: string
}

export interface MoviesSearchResults {
  Poster: string
  Title: string
  Type: string
  Year: string
}

const initialState: MoviesSearchInitialState = {
  isLoading: false,
  results: [],
  totalAmount: '',
  currentPage: '1',
}

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMoviesRequest: (state) => {
      return { ...state, isLoading: true }
    },
    setMovies: (state, action: PayloadAction<MoviesSearchResults[]>) => {
      return { ...state, isLoading: false, results: action.payload }
    },
    setTotalAmount: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: false, totalAmount: action.payload }
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: true, currentPage: action.payload }
    },
    setIsLoaded: (state) => {
      return { ...state, isLoading: false }
    },
  },
})

export const { getMoviesRequest, setMovies, setTotalAmount, setCurrentPage, setIsLoaded } =
  moviesSlice.actions
export default moviesSlice.reducer
