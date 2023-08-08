'use client'

import CustomPagination from '@/components/CustomPagination'
import DiscoveredMovies from '@/components/DiscoveredMovies'
import { redirect, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function movies() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = searchParams.get('search')
  const page = searchParams.get('page')

  if (search === null || search.length === 0 || page === null || page.length === 0) {
    redirect('/')
  }

  useEffect(() => {
    document.title = `AV | ${search}`
  }, [search])

  return (
    <div>
      <>
        <DiscoveredMovies searchQuerry={search} page={page} />
        <CustomPagination pathname={pathname} urlParam='search' urlValue={search} />
      </>
    </div>
  )
}
