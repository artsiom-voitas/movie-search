import { setCurrentPage } from '@/redux/movieSlice'
import { RootState } from '@/redux/store'
import { Pagination, PaginationItem } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

interface CustomPaginationProps {
  pathname: string
  urlParam: string
  urlValue: string
}

export default function CustomPagination({ pathname, urlParam, urlValue }: CustomPaginationProps) {
  const dispatch = useDispatch()
  const totalAmount = Number(useSelector((state: RootState) => state.movies.totalAmount))
  const currentPage = Number(useSelector((state: RootState) => state.movies.currentPage))
  const isLoading = useSelector((state: RootState) => state.movies.isLoading)

  let pagesCount: number = Number((totalAmount / 10).toFixed())
  if (pagesCount > 100) {
    return pagesCount === 100
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
