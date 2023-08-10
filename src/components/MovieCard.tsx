import { MovieResponse } from '@/redux/sliceTypes';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface MovieProps {
  movie: MovieResponse
}

export default function MovieCard({ movie }: MovieProps) {
  let {Title, Rated, Released, Runtime, Genre, Director, Writer, Actors, Plot, Language, Country, Awards, Poster, Ratings, Metascore, imdbRating, imdbVotes, imdbID, Type, DVD, BoxOffice, Production, Website, Response} = movie;
  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster;

  return (
    <Card className='w-full' sx={{ backgroundColor: '#15202b' }}>
        <div className='flex-col md:flex-row items-center flex p-5 lg:gap-52 gap-10 lg:p-14'>
          <motion.div whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.9 }}>
          <CardMedia
          className='h-[430px] lg:h-[470px] w-[300px] lg:w-[330px]'
          image={Poster}
          component='img'
          />
          </motion.div>

            <div className='flex flex-col gap-2 w-full md:w-[300px] p-4 sm:p-10 sm:pt-1 md:p-0 justify-start'>
            <Typography variant='h3' component='div' className='mb-10 text-center md:text-left' >
              {Title}
            </Typography>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Released</h3>
              <h3 className='w-1/2 text-left'>{Released}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Country</h3>
              <h3 className='w-1/2 text-left'>{Country}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Language</h3>
              <h3 className='w-1/2 text-left'>{Language}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Runtime</h3>
              <h3 className='w-1/2 text-left'>{Runtime}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Genre</h3>
              <h3 className='w-1/2 text-left'>{Genre}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Director</h3>
              <h3 className='w-1/2 text-left'>{Director}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Writer</h3>
              <h3 className='w-1/2 text-left'>{Writer}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Actors</h3>
              <h3 className='w-1/2 text-left'>{Actors}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Box Office</h3>
              <h3 className='w-1/2 text-left'>{BoxOffice}</h3>
            </div>
            <div className='flex text-sm justify-between text-center'>
              <h3 className='text-white/70'>Rated</h3>
              <h3 className='w-1/2 text-left'>{Rated}</h3>
            </div>
            </div>
        </div>
        <CardContent className='p-5 sm:pt-0 sm:p-14 md:p-5'>
          <Typography gutterBottom variant='h6' component='div'>
            About
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {Plot}
          </Typography>
          <Typography gutterBottom variant='h6' component='div' className='mt-10'>
            Awards
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {Awards}
          </Typography>
        </CardContent>
    </Card>
  );
}
