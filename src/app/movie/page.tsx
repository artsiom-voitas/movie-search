'use client'

import { Header, MovieInformation } from '@/components'
import MovieInformationSkeletton from '@/components/MovieInformationSkeletton'
import { fetchMovie, fetchedMovie, movieIsLoading } from '@/redux/movieSlice'
import { currentMoviesPage, setCurrentPage } from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { redirect, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const previousPage = useSelector(currentMoviesPage)
  const movie = useSelector(fetchedMovie)
  const isLoading = useSelector(movieIsLoading)
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
  }, [dispatch, imdbID, movie.Title])

  return (
    <Suspense>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7 mt-6'>
        {isLoading ? <MovieInformationSkeletton /> : <MovieInformation movie={movie} />}
      </main>
    </Suspense>
  )
}
