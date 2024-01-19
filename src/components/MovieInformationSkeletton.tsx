import { createLongFacts, createShortFacts } from '@/services/createDataToRender'
import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react'

export default function MovieInformationSkeletton() {
  const shortFacts = createShortFacts()
  const longFacts = createLongFacts()
  return (
    <Card className='max-w-[1001px] w-full'>
      <CardBody className='flex-col md:flex-row items-center flex p-5 lg:gap-20 gap-10 lg:p-14 lg:pb-5'>
        <Skeleton className='rounded-xl'>
          <Image className='h-auto w-[375px]' src='/placeholder.png' />
        </Skeleton>
        <div className='w-full md:w-auto'>
          <Skeleton
            className='text-center text-[34px] md:text-left font-bold mb-6 h-[51px]'
            rounded-xl
          />
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
}
