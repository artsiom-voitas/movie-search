'use client'

import { Error, Loader, MovieCard } from '@/components'
import CustomPagination from '@/components/CustomPagination'
import {
  fetchMovies,
  fetchedMovies,
  moviesAreLoading,
  searchMoviesError,
  setCurrentPage,
} from '@/redux/moviesSlice'
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

  const isLoading = useSelector(moviesAreLoading)
  const movies = useSelector(fetchedMovies)

  const errorMessage = useSelector(searchMoviesError)

  if (search === null || search.length === 0 || page === null || page.length === 0) {
    redirect('/')
  }

  useEffect(() => {
    const searchData = {
      searchValue: search,
      page,
    }
    setTimeout(() => {
      dispatch(fetchMovies(searchData))
    }, 1000)
    dispatch(setCurrentPage(page))

    const title = capitalizeFirstLetters(search)
    document.title = `AV | ${title}`
  }, [dispatch, search, page])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {errorMessage ? (
            <Error message={errorMessage} />
          ) : (
            <>
              <div className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7 mt-6'>
                {movies.length > 0 &&
                  movies.map((movie) => (
                    <MovieCard
                      key={movie?.imdbID}
                      Poster={movie.Poster}
                      Title={movie.Title}
                      Year={movie.Year}
                      imdbID={movie.imdbID}
                    />
                  ))}
              </div>
              <CustomPagination pathname={pathname} urlParam='search' urlValue={search} />
            </>
          )}
        </div>
      )}
    </>
  )
}
