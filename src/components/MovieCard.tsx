import { MoviesSearchResults } from '@/redux/sliceTypes'
import { Card, CardFooter, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default async function MovieCard({ Poster, Title, Year, imdbID }: MoviesSearchResults) {
  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster
  if (Title.length > 45) {
    Title = `${Title.substring(0, 45)}...`
  }

  const AnimatedLink = motion(Link)

  return (
    <AnimatedLink
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.9 }}
      href={`
       /movie?imdbid=${imdbID}
     `}
    >
      <Card isFooterBlurred radius='lg' className='border-none w-[280px] lg:w-[300px]'>
        <Image
          alt='Woman listing to music'
          className='object-cover h-[430px] lg:h-[470px]'
          src={Poster}
          width={300}
        />
        <CardFooter className='justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex flex-col'>
          <p className='text-sm text-white'>{Title}</p>
          <p className='text-sm text-white'>{Year}</p>
        </CardFooter>
      </Card>
    </AnimatedLink>
  )
}
