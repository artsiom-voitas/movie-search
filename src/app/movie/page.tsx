'use client'

import { Header, Movie, MovieInformationSkeletton } from '@/components'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7 mt-6'>
        <Suspense fallback={<MovieInformationSkeletton />}>
          <Movie />
        </Suspense>
      </main>
    </>
  )
}
