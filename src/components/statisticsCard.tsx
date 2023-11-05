import { FC } from 'react'
import {
    Box,
} from '@chakra-ui/react'

interface StatisticsCardProps {
  children: React.ReactNode
  bgImage: string
}

const StatisticsCard: FC<StatisticsCardProps> = ({children, bgImage}) => {
  return (
    <Box
    backgroundImage={bgImage}
    borderRadius={10}
    backgroundSize={'cover'}
    backgroundPosition={'center'}
    width={'100%'}
    height={'100%'}
    bgRepeat={'no-repeat'}
    bgColor={'#0C0C0C'}
    padding={'1rem 1rem'}
    mb={{base:'1rem', lg:'0px'}}
    >
    {children}
    </Box>
  )
}

export default StatisticsCard