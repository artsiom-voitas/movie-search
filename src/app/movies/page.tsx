'use client'

import CustomPagination from '@/components/CustomPagination'
import DiscoveredMovies from '@/components/DiscoveredMovies'
import capitalizeFirstLetters from '@/services/capitalizeFirstLetters'
import { redirect, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Movies() {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const search = searchParams.get('search')
  const page = searchParams.get('page')

  if (search === null || search.length === 0 || page === null || page.length === 0) {
    redirect('/')
  }

  useEffect(() => {
    const title = capitalizeFirstLetters(search)
    document.title = `AV | ${title}`
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
