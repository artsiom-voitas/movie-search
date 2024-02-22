'use client'

import { currentMoviesPage, setCurrentPage, totalMoviesAmount } from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { Pagination } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

interface CustomPaginationProps {
  pathname: string
  query: string
  isLoading: boolean
}

export default function CustomPagination({ pathname, query, isLoading }: CustomPaginationProps) {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const totalAmount = Number(useSelector(totalMoviesAmount))
  const currentPage = Number(useSelector(currentMoviesPage))

  let pagesCount: number = Number((totalAmount / 10).toFixed())
  if (totalAmount >= 1 && totalAmount <= 10) {
    return pagesCount === 1
  }
  if (pagesCount > 100) {
    return pagesCount === 100
  }

  const handleChange = (value: number) => {
    dispatch(setCurrentPage(String(value)))
    const newUrl: string = `/${pathname}/${query}/${value}`
    router.push(newUrl)
  }

  if (isLoading || totalAmount <= 10 || Number.isNaN(totalAmount)) {
    return null
  } else {
    return (
      <Pagination
        total={pagesCount}
        page={currentPage}
        showControls
        onChange={handleChange}
        className='flex w-full items-center justify-center'
      />
    )
  }
}
