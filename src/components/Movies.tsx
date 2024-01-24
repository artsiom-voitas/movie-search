'use client'

import { CustomPagination, MovieCard } from '@/components'
import { fetchMovies, fetchedMovies, moviesAreLoading, setSearchQuerry } from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import capitalizeFirstLetters from '@/services/capitalizeFirstLetters'
import { redirect, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Movies() {
  const dispatch = useDispatch<AppDispatch>()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = searchParams.get('search')
  const page = searchParams.get('page')

  const movies = useSelector(fetchedMovies)
  const isLoading = useSelector(moviesAreLoading)

  if (search === null || search.length === 0 || page === null || page.length === 0) {
    redirect('/error')
  }

  useEffect(() => {
    const searchData = {
      searchValue: search,
      page,
    }
    dispatch(setSearchQuerry(search))
    setTimeout(() => {
      dispatch(fetchMovies(searchData))
    }, 1000)

    const title = capitalizeFirstLetters(search)
    document.title = `AV | ${title}`
  }, [dispatch, search, page])

  return (
    <>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <MovieCard
            key={movie?.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))}
      {!isLoading && <CustomPagination pathname={pathname} urlValue={search} />}
    </>
  )
}
