import {
  currentMoviesPage,
  moviesAreLoading,
  setCurrentPage,
  totalMoviesAmount,
} from '@/redux/moviesSlice'
import { AppDispatch } from '@/redux/store'
import { Pagination, PaginationItem } from '@mui/material'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

interface CustomPaginationProps {
  pathname: string
  urlParam: string
  urlValue: string
}

export default function CustomPagination({ pathname, urlParam, urlValue }: CustomPaginationProps) {
  const dispatch = useDispatch<AppDispatch>()
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
    redirect('/error')
  }

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(String(value)))
  }

  return (
    <>
      {totalAmount <= 10 || isLoading ? (
        <></>
      ) : (
        <Pagination
          count={pagesCount}
          page={Number(currentPage)}
          onChange={handleChange}
          color='primary'
          className='my-6 flex w-full items-center justify-center'
          renderItem={(item) =>
            item.page !== null && item.page !== 0 && item.page <= pagesCount ? (
              <Link href={`${pathname}?${urlParam}=${urlValue}&page=${item.page}`}>
                <PaginationItem {...item} />
              </Link>
            ) : (
              <PaginationItem {...item} />
            )
          }
        />
      )}
    </>
  )
}
