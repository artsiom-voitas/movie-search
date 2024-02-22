'use client'

import { CustomPagination, MovieCard } from '@/components'
import {
  fetchMovies,
  fetchedMovies,
  moviesAreLoading,
  setCurrentPage,
  setSearchQuery,
} from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import capitalizeFirstLetters from '@/services/capitalizeFirstLetters'
import { redirect, usePathname } from 'next/navigation'
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

  if (searchQuery === null || searchQuery.length === 0 || page === null || page.length === 0) {
    redirect('/error')
  }

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

  return (
    <>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <MovieCard
            isLoading={isLoading}
            key={movie?.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
      {!isLoading && <CustomPagination pathname='movies' query={searchQuery} />}
    </>
  )
}
