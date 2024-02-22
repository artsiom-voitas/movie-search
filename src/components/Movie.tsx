'use client'

import { MovieInformation } from '@/components'
import { fetchMovie, fetchedMovie, movieIsLoading } from '@/redux/movieSlice'
import { currentMoviesPage, setCurrentPage } from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface MovieProps {
  imdbID: string
}

export default function Movie({ imdbID }: MovieProps) {
  const dispatch = useDispatch<AppDispatch>()
  const previousPage = useSelector(currentMoviesPage)
  const movie = useSelector(fetchedMovie)
  const isLoading = useSelector(movieIsLoading)

  if (imdbID === null || imdbID.length === 0) {
    redirect('/error')
  }

  useEffect(() => {
    dispatch(fetchMovie(imdbID))
    if (movie.Title) {
      document.title = `AV | ${movie.Title}`
    }
    return () => {
      dispatch(setCurrentPage(previousPage))
    }
  }, [imdbID, movie.Title])

  return <MovieInformation movie={movie} isLoading={isLoading} />
}
