import { MovieResponse } from '@/redux/sliceTypes'
import { createLongFacts, createShortFacts } from '@/services/createDataToRender'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'

import { Imdb } from './icons'

interface MovieProps {
  movie: MovieResponse
}

export default function MovieCard({ movie }: MovieProps) {
  let { Title, Poster, Ratings, imdbID } = movie
  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster
  const shortFacts = createShortFacts(movie)
  const longFacts = createLongFacts(movie)

  return (
    <Card className='xl:w-[80%] w-full mx-auto' sx={{ backgroundColor: '#15202b' }}>
      <div className='flex-col md:flex-row items-center flex p-5 lg:gap-20 gap-10 lg:p-14 lg:pb-5'>
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <CardMedia className='h-auto w-[375px]' image={Poster} component='img' />
        </motion.div>
        <div className=''>
          <Typography
            variant='h4'
            component='div'
            className='text-center md:text-left font-bold mb-6'
          >
            {Title}
          </Typography>
          <div className='flex flex-col gap-4 w-full md:w-[300px] p-4 sm:p-10 sm:pt-1 md:p-0 justify-start'>
            {shortFacts.map((fact, index) => (
              <div className='flex text-sm justify-between text-center items-center' key={index}>
                <h3 className='text-white/70'>{fact.name}</h3>
                <h3 className='w-1/2 text-left'>{fact.value}</h3>
              </div>
            ))}
            {Ratings?.map((Rating, index) => (
              <div className='flex text-sm justify-between text-center items-center' key={index}>
                <h3 className='text-white/70'>
                  {Rating.Source === 'Internet Movie Database' ? 'IMDb Rating' : Rating.Source}
                </h3>
                <h3 className='w-1/2 text-left'>{Rating.Value}</h3>
              </div>
            ))}
            <div className='flex text-sm justify-start items-center'>
              <h3 className='text-white/70 w-1/2'>More details</h3>
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
      </div>
      <CardContent className='p-5 sm:pt-0 sm:p-14 md:p-5 md:px-16'>
        {longFacts.map((fact) => (
          <>
            <Typography gutterBottom variant='h4' component='div' className='font-bold'>
              {fact.name}
            </Typography>
            <Typography variant='body1' color='text.secondary' className='mb-6'>
              {fact.value}
            </Typography>
          </>
        ))}
      </CardContent>
    </Card>
  )
}
