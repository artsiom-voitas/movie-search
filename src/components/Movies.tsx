'use client'

import { CustomPagination, ErrorMessage, MovieCard } from '@/components'
import {
  fetchMovies,
  fetchedMovies,
  moviesAreLoading,
  setCurrentPage,
  setSearchQuery,
} from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import capitalizeFirstLetters from '@/services/capitalizeFirstLetters'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface MoviesProps {
  searchQuery: string
  page: string
}

export default function Movies({ searchQuery, page }: MoviesProps) {
  const dispatch = useDispatch<AppDispatch>()
  const movies = useSelector(fetchedMovies)
  const isLoading = useSelector(moviesAreLoading)
  console.log(movies)

  useEffect(() => {
    const searchData = {
      searchValue: searchQuery,
      page,
    }
    dispatch(setSearchQuery(searchQuery))
    dispatch(setCurrentPage(page))
    setTimeout(() => {
      dispatch(fetchMovies(searchData))
    }, 1000)

    const title = capitalizeFirstLetters(searchQuery)
    document.title = `AV | ${title}`
  }, [dispatch, searchQuery, page])
  console.log(page)

  if (Number(page) > 100 || !movies) {
    let message: string =
      Number(page) > 100 ? `Page doesn't exist` : `Movies with title «${searchQuery}» not found`
    return <ErrorMessage message={message} />
  } else {
    return (
      <>
        {movies.map((movie) => (
          <MovieCard
            isLoading={isLoading}
            key={movie?.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
        <CustomPagination isLoading={isLoading} pathname='movies' query={searchQuery} />
      </>
    )
  }
}
