'use client'

import { Header, Movie } from '@/components'

export default function Page({ params }: { params: { imdbID: string } }) {
  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center py-7 px-3 md:p-7'>
        <Movie imdbID={params.imdbID} />
      </main>
    </>
  )
}
