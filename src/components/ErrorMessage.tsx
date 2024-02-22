import { Card } from '@nextui-org/react'
import { Frown } from 'lucide-react'

interface ErrorMessageProps {
  message?: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className='flex justify-center'>
      <Card
        className='absolute top-[50%] translate-y-[-50%] flex flex-col items-center justify-between gap-10 p-12
        max-w-[355px] sm:max-w-[580px] w-full text-center'
      >
        <Frown size={150} />
        <h1 className='font-bold text-xl capitalize tracking-widest text-md sm:text-2xl '>
          {message}
        </h1>
      </Card>
    </div>
  )
}
