'use client'

import { Header, Movie } from '@/components'

export default function Page({ params }: { params: { imdbID: string } }) {
  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7 mt-6'>
        <Movie imdbID={params.imdbID} />
      </main>
    </>
  )
}
