import { MoviesSearchResults } from '@/redux/sliceTypes'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function MovieShortCard({ Poster, Title, Year, imdbID }: MoviesSearchResults) {
  Poster = Poster === 'N/A' ? '/placeholder.png' : Poster
  if (Title.length > 25) {
    Title = `${Title.substring(0, 25)}...`
  }
  const MotionCardMedia = motion(CardMedia)

  return (
    <Link
      href={`
       /movie?imdbid=${imdbID}
     `}
    >
      <Card className='w-[300px] lg:w-[330px]' sx={{ backgroundColor: '#15202b' }}>
        <CardActionArea>
          <MotionCardMedia
            className='h-[430px] lg:h-[470px]'
            image={Poster}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='div'>
              {Title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {Year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
