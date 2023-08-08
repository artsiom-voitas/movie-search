import { MoviesSearchResults } from '@/redux/movieSlice'
import axios from 'axios'

export interface MoviesSearchResponse {
  Search: MoviesSearchResults[]
  totalResults: string
  Response?: boolean
}

export default async function fetchMovies(searchValue: string, page: string) {
  const { data } = await axios.get<MoviesSearchResponse>(
    `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=50d54205`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  )
  return data
}
