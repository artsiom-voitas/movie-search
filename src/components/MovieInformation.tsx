import { MovieResponse } from '@/redux/sliceTypes'
import { createLongFacts, createShortFacts } from '@/services/createDataToRender'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import { motion } from 'framer-motion'

import { Imdb } from './icons'

interface MovieProps {
  movie: MovieResponse
}

export default function MovieInformation({ movie }: MovieProps) {
  let { Title, Poster, Ratings, imdbID } = movie
  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster
  const shortFacts = createShortFacts(movie)
  const longFacts = createLongFacts(movie)

  return (
    <Card>
      <CardBody className='flex-col md:flex-row items-center flex p-5 lg:gap-20 gap-10 lg:p-14 lg:pb-5'>
        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Image className='h-auto w-[375px]' src={Poster} alt={`${Title} poster`} />
        </motion.div>
        <div>
          <h1 className='text-center text-[34px] md:text-left font-bold mb-6'>{Title}</h1>
          <div className='flex flex-col gap-4 w-full md:w-[330px] p-4 sm:p-10 sm:pt-1 md:p-0 pb-0 sm:pb-0 justify-start'>
            {shortFacts.map((fact, index) => (
              <div className='flex text-sm justify-between text-center items-center' key={index}>
                <h3 className='opacity-90'>{fact.name}</h3>
                <h3 className='w-1/2 text-left'>{fact.value}</h3>
              </div>
            ))}
            {Ratings?.map((Rating, index) => (
              <div className='flex text-sm justify-between text-center items-center' key={index}>
                <h3 className='opacity-90'>
                  {Rating.Source === 'Internet Movie Database' ? 'IMDb Rating' : Rating.Source}
                </h3>
                <h3 className='w-1/2 text-left'>{Rating.Value}</h3>
              </div>
            ))}
            <div className='flex text-sm justify-start items-center'>
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
