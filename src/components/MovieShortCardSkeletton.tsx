import { Card, CardFooter, Skeleton } from '@nextui-org/react'

export default function MovieShortCardSkeletton() {
  return (
    <Card isFooterBlurred radius='lg' className='border-none w-[280px] lg:w-[300px]'>
      <Skeleton className='rounded-lg h-[430px] lg:h-[470px] w-300'></Skeleton>
    </Card>
  )
}
