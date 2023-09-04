'use client'

import { FC } from 'react'
import {
    Box,
    Text,
    Grid,
} from '@chakra-ui/react'
import {format} from 'date-fns'

interface pageProps {
  
}

const page: FC<pageProps> = () => {
    const date = new Date()
    const formattedDate = format(date, 'EEEE, do MMMM yyyy')
  return (
  <Box>
    <Grid
    maxW={'520px'}>
    <Text 
    color={'#fff'}
    fontSize={28}
    fontWeight={600}
    >
    { `Today is ${formattedDate}.`}
    </Text>

    <Text
    color={'#fff'}
    mt={{base:'6'}}
    >
        Momentum Builder: Keep the referrals coming to keep the momentum growing!
    </Text>
    </Grid>

    
  </Box>
  )
}

export default page