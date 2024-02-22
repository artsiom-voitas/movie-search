'use client'

import { Header, Movies } from '@/components'

export default function Page({
  params,
}: {
  params: {
    searchQuery: string
    page: string
  }
}) {
  return (
    <>
      <Header />
      <main className='flex flex-wrap gap-6 gap-x-20 items-center justify-center p-7'>
        <Movies searchQuery={params.searchQuery} page={params.page} />
      </main>
    </>
  )
}
