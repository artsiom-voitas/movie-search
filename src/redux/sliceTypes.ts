export interface MoviesSearchResponse {
  Search: MoviesSearchResults[]
  totalResults: string
  Response: string
  Error: string
}

export interface MoviesSearchInitialState {
  searchQuery: string
  isLoading: boolean
  results: MoviesSearchResults[]
  totalAmount: string
  currentPage: string
  errorMessage: string | null | undefined
}

export interface MoviesSearchResults {
  Poster: string
  Title: string
  Type?: string
  Year: string
  imdbID: string
  isLoading?: boolean
}

export interface MovieResponse {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings?: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response?: string
  Error?: string
}

export interface MovieInitialState {
  isLoading: boolean
  movieInformation: MovieResponse
  errorMessage: null | string | undefined
}
