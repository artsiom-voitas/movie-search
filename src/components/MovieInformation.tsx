import { ErrorMessage } from '@/components'
import { MovieResponse } from '@/redux/sliceTypes'
import { createLongFacts, createShortFacts } from '@/services/createDataToRender'
import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

import { Imdb } from './icons'

export interface MovieProps {
  movie: MovieResponse
  isLoading: boolean
}

export default function MovieInformation({ movie, isLoading }: MovieProps) {
  let { Title, Poster, Ratings, imdbID, Response, Error } = movie

  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster

  if (isLoading || Response === 'False') {
    if (Response === 'False') {
      return <ErrorMessage message={Error} />
    }
    const shortFacts = createShortFacts()
    const longFacts = createLongFacts()
    return (
      <Card className='max-w-[1001px] w-full'>
        <CardBody className='flex-col md:flex-row items-center flex p-5 lg:gap-20 gap-10 lg:p-14 lg:pb-5'>
          <Skeleton className='rounded-xl'>
            <Image className='h-auto w-[375px]' src='/placeholder.png' />
          </Skeleton>
          <div className='w-full md:w-auto'>
            <Skeleton className='text-center text-[34px] md:text-left font-bold mb-6 h-[51px] rounded-xl' />
            <div className='flex flex-col gap-4 w-full md:w-[330px] p-4 sm:p-10 sm:pt-1 md:p-0 pb-0 sm:pb-0 justify-start'>
              {shortFacts.map((fact, index) => (
                <div className='flex text-sm justify-between text-center items-center' key={index}>
                  <h3 className='rounded-xl opacity-90'>{fact.name}</h3>
                  <Skeleton className='w-1/2 rounded-xl h-[20px]' />
                </div>
              ))}
              <div className='flex text-sm justify-start items-center'>
                <h3 className='opacity-90 w-1/2 rounded-xl'>More details</h3>
                <Skeleton className='w-1/2 rounded-xl h-[20px]' />
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className='flex-col p-5 sm:pt-0 sm:p-14 md:p-5 md:px-16'>
          {longFacts.map((fact, index) => (
            <div className='mb-6 max-w-[867px] w-full' key={index}>
              <p className='text-3xl mb-3 rounded-xl'>{fact.name}</p>
              <Skeleton className='opacity-90 rounded-xl h-[60px]' />
            </div>
          ))}
        </CardFooter>
      </Card>
    )
  } else {
    const shortFacts = createShortFacts(movie)
    const longFacts = createLongFacts(movie)
    return (
      <Card>
        <CardBody className='flex-col md:flex-row items-center flex p-5 lg:gap-20 gap-10 lg:p-14 lg:pb-5'>
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className='w-full flex justify-center'
            whileTap={{ scale: 0.9 }}
          >
            <Image className='h-auto w-[375px]' src={Poster} alt={`${Title} poster`} />
          </motion.div>
          <div className='w-full'>
            <h1 className='text-center text-[34px] max-w-full md:max-w-[400px] md:text-end font-bold mb-6'>
              {Title}
            </h1>
            <div className='flex flex-col gap-4 w-full p-4 sm:p-10 sm:pt-1 md:p-0 pb-0 sm:pb-0 justify-start'>
              {shortFacts.map((fact, index) => (
                <div className='flex text-sm justify-between text-start items-center' key={index}>
                  <h3 className='w-1/2 opacity-90'>{fact.name}</h3>
                  <h3 className='w-1/2 text-end'>{fact.value}</h3>
                </div>
              ))}
              {Ratings?.map((Rating, index) => (
                <div className='flex text-sm justify-between text-start items-center' key={index}>
                  <h3 className='opacity-90 w-1/2'>
                    {Rating.Source === 'Internet Movie Database' ? 'IMDb Rating' : Rating.Source}
                  </h3>
                  <h3 className='w-1/2 text-end'>{Rating.Value}</h3>
                </div>
              ))}
              <div className='flex text-sm justify-between items-center'>
                <h3 className='opacity-90 w-1/2'>More details</h3>
                <motion.a
                  href={`https://www.imdb.com/title/${imdbID}`}
                  target='_blank'
                  className='w-[25px]'
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Imdb />
                </motion.a>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className='flex-col p-5 sm:pt-0 sm:p-14 md:p-5 md:px-16'>
          {longFacts.map((fact, index) => (
            <div className='mb-6 max-w-[867px] w-full' key={index}>
              <p className='text-3xl mb-3'>{fact.name}</p>
              <p className='opacity-90'>{fact.value}</p>
            </div>
          ))}
        </CardFooter>
      </Card>
    )
  }
}
