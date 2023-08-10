'use client'

import { Loader } from '@/components'
import MovieCard from '@/components/MovieCard'
import { fetchMovie, fetchedMovie, movieIsLoading } from '@/redux/movieSlice'
import { AppDispatch } from '@/redux/store'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page() {
    const dispatch = useDispatch<AppDispatch>()
    const movie = useSelector(fetchedMovie)
    const isLoading = useSelector(movieIsLoading)
    const searchParams = useSearchParams()
    const imdbID = searchParams.get('imdbid')

    if (imdbID === null || imdbID.length === 0 ) {
        redirect('/error')
    }

    useEffect(() => {
        dispatch(fetchMovie(imdbID))
    }, [dispatch, imdbID])

  return (
    <>
    {isLoading ? (<Loader/>) : (
        <MovieCard movie={movie}/>
    )}
    </>
  )
}
