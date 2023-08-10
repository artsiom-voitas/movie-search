'use client'

import getFiveRandomTweets from '@/services/getFiveRandomTweets'
import { Metadata } from 'next'
import { Tweet } from 'react-tweet'

export const metadata: Metadata = {
  title: 'AV | Movie Search',
  description: 'Search the movie to Watch now!',
}

export default function Home() {
  const tweets: string[] = getFiveRandomTweets()

  return (
    <div className='flex flex-col justify-center items-center px-3'>
      {tweets.map((tweet, index) => (
        <Tweet id={tweet} key={index} />
      ))}
    </div>
  )
}
