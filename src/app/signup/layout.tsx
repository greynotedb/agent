import { FC } from 'react'
import {
      Box,
} from '@chakra-ui/react'
import Signup from './page'

interface layoutProps {
  
}

const layout: FC<layoutProps> = ({}) => {
  return (
    <Box backgroundImage={'/images/signupbg.png'} minH={'100vh'} backgroundRepeat={'no-repeat'} bgSize={'cover'}>
      <Signup />
    </Box>
  )
}

export default layout