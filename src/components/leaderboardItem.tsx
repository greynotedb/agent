import { FC } from 'react'
import {
    Flex,
    Text,
    HStack,
    VStack,
    Avatar,
    Box,
} from '@chakra-ui/react'
import { 
    BiSolidDownArrow,
    BiSolidUpArrow,
} from 'react-icons/bi'
import {
    FaEquals,
} from 'react-icons/fa'

interface leaderBoardItemProps {
  leaderboardData:
    {
          position: number,
          profileUrl: string,
          firstName: string,
          lastName: string,
          email: string,
          positionChange: string,
    }
}

const LeaderBoardItem: FC<leaderBoardItemProps> = ({leaderboardData}) => {
  return (
      <Flex gap={10} justifyContent={'center'} alignItems={'center'}>
          <Text fontSize={'42'} fontWeight={'700'} color={'#fff'}>{leaderboardData.position}</Text>
          <HStack>
              <Avatar
                  borderRadius={5}
                  size={'sm'}
                  src={
                      leaderboardData.profileUrl
                  }
              />
              <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm" color={'#fff'}>{leaderboardData.firstName + " " + leaderboardData.lastName}</Text>
                  <Text fontSize="xs" color="#A7A7A7">
                      {leaderboardData.email}
                  </Text>
              </VStack>
          </HStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            {
                leaderboardData.positionChange == 'up' ? 
                (<BiSolidUpArrow color='green' size='32' />) : 
                leaderboardData.positionChange == 'down' ? 
                (<BiSolidDownArrow color='red' size='32' />) :
                leaderboardData.positionChange == 'same' ?
                (<FaEquals color='#9D9D9D' size='32' />) :
                (<></>)
            }
          </Box>
      </Flex>
  )
}

export default LeaderBoardItem