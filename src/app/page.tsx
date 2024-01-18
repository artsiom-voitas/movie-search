'use client'

import { Header } from '@/components'
import getThreeRandomTweets from '@/services/getThreeRandomTweets'
import { Tweet } from 'react-tweet'

export default function Home() {
  const tweets: string[] = getThreeRandomTweets()

  return (
    <>
      <Header />
      <main className='container mx-auto pt-24'>
        <div className='flex flex-col justify-center items-center px-3'>
          {tweets.map((tweet, index) => (
            <Tweet id={tweet} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}
