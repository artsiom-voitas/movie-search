import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface MovieCardProps {
  movie: {
    poster: string
    title: string
    year: string
  }
}

export default function MovieCard({ movie }: MovieCardProps) {
  let { poster, title, year } = movie
  poster = poster === 'N/A' ? '/placeholder.png' : poster
  if (title.length > 25) {
    title = `${title.substring(0, 25)}...`
  }
  const MotionCardMedia = motion(CardMedia)

  return (
    <Card className='w-[300px] lg:w-[330px]'>
      <CardActionArea>
        <MotionCardMedia
          className='h-[430px] lg:h-[470px]'
          image={poster}
          whileHover={{
            scale: 1.05,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
