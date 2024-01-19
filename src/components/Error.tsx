import { Card } from '@nextui-org/react'
import { Frown } from 'lucide-react'

interface ErrorProps {
  message: string
}

export default function Error({ message }: ErrorProps) {
  return (
    <div className='flex justify-center'>
      <Card
        className='absolute top-[50%] translate-y-[-50%] flex flex-col items-center justify-between gap-10 p-12
        max-w-[375px] w-full text-center'
      >
        <Frown size={150} />
        <h1 className='font-bold text-xl capitalize tracking-widest'>{message}</h1>
      </Card>
    </div>
  )
}
