import { MovieResponse } from '@/redux/sliceTypes'

interface DataToRender {
  name: string
  value: string
}

export function createShortFacts(movie: MovieResponse): DataToRender[] {
  return [
    {
      name: 'Released',
      value: movie.Released,
    },
    {
      name: 'Country',
      value: movie.Country,
    },
    {
      name: 'Language',
      value: movie.Language,
    },
    {
      name: 'Runtime',
      value: movie.Runtime,
    },
    {
      name: 'Genre',
      value: movie.Genre,
    },
    {
      name: 'Director',
      value: movie.Director,
    },
    {
      name: 'Writer',
      value: movie.Writer,
    },
    {
      name: 'Actors',
      value: movie.Actors,
    },
    {
      name: 'Writer',
      value: movie.Writer,
    },
    {
      name: 'Box Office',
      value: movie.BoxOffice || '-',
    },
    {
      name: 'Rated',
      value: movie.Rated,
    },
    {
      name: 'IMDb Votes',
      value: movie.imdbVotes,
    },
  ]
}

export function createLongFacts(movie: MovieResponse): DataToRender[] {
  return [
    { name: 'About', value: movie.Plot },
    { name: 'Awards', value: movie.Awards },
  ]
}
