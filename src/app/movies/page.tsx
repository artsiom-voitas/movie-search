'use client'

import { Header, Movies } from '@/components'
import MovieCardSkeletton from '@/components/MovieCardSkeletton'
import { Suspense } from 'react'

export default function Page() {
  let Skeletons = []
  for (let index = 0; index < 11; index++) {
    Skeletons.push(<MovieCardSkeletton key={index} />)
  }
  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7'>
        <Suspense fallback={Skeletons}>
          <Movies />
        </Suspense>
      </main>
    </>
  )
}
