'use client'

import { MovieCard } from '@/components/'
import { setCurrentPage, setIsLoaded, setMovies, setTotalAmount } from '@/redux/movieSlice'
import { RootState } from '@/redux/store'
import fetchMovies from '@/services/fetchMovies'
import { CircularProgress } from '@mui/material'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface DiscoveredMoviesProps {
  searchQuerry: string
  page: string
}

export default function DiscoveredMovies({ searchQuerry, page }: DiscoveredMoviesProps) {
  const dispatch = useDispatch()
  const movies = useSelector((state: RootState) => state.movies.results)
  const isLoading = useSelector((state: RootState) => state.movies.isLoading)

  useEffect(() => {
    fetchMovies(searchQuerry, page).then((res) => {
      if (res.Response) {
        dispatch(setMovies(res.Search))
        dispatch(setTotalAmount(res.totalResults))
        dispatch(setCurrentPage(page))
        setTimeout(() => {
          dispatch(setIsLoaded())
        }, 500)
      } else {
        redirect('/')
      }
    })
  }, [searchQuerry, page])

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center '>
          <CircularProgress size={150} className='absolute top-[50%] translate-y-[-50%]' />
        </div>
      ) : (
        <div className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7 mt-6'>
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={{
                  poster: movie.Poster,
                  title: movie.Title,
                  year: movie.Year,
                }}
              />
            ))}
        </div>
      )}
    </>
  )
}
