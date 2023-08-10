import SentimentVeryDissatisfiedSharpIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp'
import Card from '@mui/material/Card'

interface ErrorProps {
  message: string
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className='flex justify-center'>
      <Card
        variant='outlined'
        sx={{backgroundColor: '#15202b'}}
        className='absolute top-[50%] translate-y-[-50%] flex flex-col items-center justify-between gap-10 p-12
        max-w-[375px] w-full text-center'
      >
        <SentimentVeryDissatisfiedSharpIcon sx={{ fontSize: '150px' }} />
        <h1 className='font-bold text-xl capitalize tracking-widest'>{message}</h1>
      </Card>
    </div>
  )
}
