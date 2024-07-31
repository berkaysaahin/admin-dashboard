
import { Card, Flex } from '@tremor/react';


const CardItem = () => {
  return (
        <Card className='w-xs ' >
            <Flex justifyContent='between' alignItems='center'>
            <dt className=" text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Recurring Revenue
            </dt>
              <span
                className='text-emerald-700 dark:text-emerald-500 text-tremor-default font-medium'>+6.4%</span>
            </Flex>
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong ">$ 34.9k</span>
            
          </Card>
  )
}
//35.54

export default CardItem