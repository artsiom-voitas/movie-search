'use client'

import { MovieInformation } from '@/components'
import { fetchMovie, fetchedMovie } from '@/redux/movieSlice'
import { currentMoviesPage, setCurrentPage } from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Movie() {
  const dispatch = useDispatch<AppDispatch>()
  const previousPage = useSelector(currentMoviesPage)
  const movie = useSelector(fetchedMovie)
  const searchParams = useSearchParams()
  const imdbID = searchParams.get('imdbid')

  if (imdbID === null || imdbID.length === 0) {
    redirect('/error')
  }

  useEffect(() => {
    dispatch(fetchMovie(imdbID))
    document.title = `AV | ${movie.Title}`
    return () => {
      dispatch(setCurrentPage(previousPage))
    }
  }, [imdbID, movie.Title])

  return <MovieInformation movie={movie} />
}
