'use client'

import {
  currentMoviesPage,
  moviesAreLoading,
  setCurrentPage,
  totalMoviesAmount,
} from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { Pagination } from '@nextui-org/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

interface CustomPaginationProps {
  pathname: string
  urlParam: string
  urlValue: string
}

export default function CustomPagination({ pathname, urlParam, urlValue }: CustomPaginationProps) {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const totalAmount = Number(useSelector(totalMoviesAmount))
  const currentPage = Number(useSelector(currentMoviesPage))
  const isLoading = useSelector(moviesAreLoading)
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  let pagesCount: number = Number((totalAmount / 10).toFixed())
  if (totalAmount >= 1 && totalAmount <= 10) {
    return pagesCount === 1
  }
  if (pagesCount > 100) {
    return pagesCount === 100
  }

  if (Number(page) > pagesCount) {
    router.push('/error')
  }

  const handleChange = (value: number) => {
    dispatch(setCurrentPage(String(value)))
    const newUrl: string = `${pathname}?${urlParam}=${urlValue}&page=${value}`
    router.push(newUrl)
  }

  return (
    <>
      {totalAmount <= 10 || isLoading ? (
        <></>
      ) : (
        <Pagination
          total={pagesCount}
          page={currentPage}
          showControls
          onChange={handleChange}
          className='flex w-full items-center justify-center'
        />
      )}
    </>
  )
}
