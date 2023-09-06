'use client'

import { FC } from 'react'
import {
    Box,
    Text,
    Grid,
    TabList,
    Tabs,
    Tab,
    TabPanel,
    TabPanels,
    Image,
    Flex,
    HStack,
    Divider,
    Stack,
} from '@chakra-ui/react'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import StatisticsCard from './components/statisticsCard'
import {format} from 'date-fns'

interface pageProps {

}

const tabData = [
    {
        label: 'This Month',
    },
    {
        label: 'Overall',
    },
]

const page: FC<pageProps> = ({}) => {
    const date = new Date()
    const formattedDate = format(date, 'EEEE, do MMMM yyyy')
  return (
  <Box mx={5}>
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

    <Flex 
    flexDirection={{ base: 'column', lg:'row', md: 'row', sm:'row' }}
    mt={{base:'16'}}
    gap={10}>

        {/* Styling for first card */}
    <StatisticsCard bgImage='/images/bluegradientbg.png'> 
    <Box>
      <Tabs align='end' variant='unstyled'>
        <TabList>
          {tabData.map((tab, index) => (
            <Tab
             key={index} 
             color={ '#D8D8D8' }
             borderRadius="4"
             padding={{ base: "5, 5", md:"0.7rem 2rem", sm:'0.3rem 1rem' }}
             mx='2'
             fontSize={{ base:'12px', md:'16px', sm:'16px' }}
             _selected={{
             bg: '#4444447D',
             color: '#D8D8D8',
          }}
            >
            <Box pr='1'>
            <HiOutlineCalendarDays
            fontSize='26'
            color='#8D8D8D'
            />
            </Box>
            {tab.label}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
            <TabPanel p={4} textAlign={'start'}>
              <Box>

                <Box>
                <Text 
                color={'#B4B4B4'}>
                    Total Value
                </Text>
                <Text color={'#fff'} fontSize={'32'}>₦ 252,500.25</Text>
                </Box>

                <HStack 
                pt={4}
                gap={20} 
                lineHeight={'8'}
                >

                <Text 
                color={'#818181'} 
                fontSize={{base:'26'}}
                pb={'9'}
                >
                You are among the <span style={{color:'#fff'}}>top 2%</span> of agents, keep this up and you’ll be eligible for Gold Tier
                </Text>

                <Image 
                alt='badge' 
                src='/images/badge2.png'
                display={{lg:'block', md:'none', sm:'none', base:'none'}}
                />

                </HStack>
              </Box>
            </TabPanel>

            <TabPanel p={4}>
              <Box>
                <Text>Total Value</Text>
                <Text>₦ 252,500.25</Text>
              </Box>
            </TabPanel>
        </TabPanels>

      </Tabs>
    </Box>
    </StatisticsCard>

        {/* Second card */}
    <StatisticsCard bgImage='/images/greengradientbg.png'>
    <Box>  
      <Tabs align='end' variant='unstyled'>

        <TabList>
          {tabData.map((tab, index) => (
            <Tab
             key={index} 
             color={'#D8D8D8'}
             borderRadius="4"
             padding={{ base: "5, 5", md:"0.7rem 2rem", sm:'0.3rem 1rem'}}
             mx='2'
             fontSize={{base:'12px', md:'16px', sm:'16px'}}
             _selected={{
             bg: '#4444447D',
             color: '#D8D8D8',
          }}
            >

            <Box pr='1'>
            <HiOutlineCalendarDays
            fontSize={'26'}
            color='#8D8D8D'
            />
            </Box>

            {tab.label}

            </Tab>
          ))}
        </TabList>

        <TabPanels>
            <TabPanel p={4} textAlign={'start'}>
              <Stack 
                direction={'row'}
                pt={4}
                pb={7}
                gap={10} 
                lineHeight={'8'}
                justifyContent={'center'}
                alignItems={'center'}
                >

                <Box textAlign={'center'}>
                <Stack>
                <Text 
                color={'#fff'} 
                fontSize={{base:'16', lg:'32', md:'26'}}
                pb={2}
                fontWeight={'bold'}
                >
                231
                </Text>
                <Text color={'#B4B4B4'}>Total Referrals</Text>
                </Stack>
                </Box>
                
                    <Divider display={{base:'block', lg:'block', md:'block', sm:'none'}} orientation='vertical' h={'100px'}/>

                <Box textAlign={'center'}>
                    <Box 
                    backgroundImage='/images/badge1.png' 
                    minW={'100px'} 
                    minH={'110px'} 
                    backgroundRepeat={'no-repeat'} 
                    backgroundPosition={'center'} 
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'}>

                    <Text 
                    color={'#fff'} 
                    fontSize={{base:'12', md:'32'}} 
                    fontWeight={'bold'}>
                        6
                    </Text>

                    </Box>
                    <Text color={'#B4B4B4'} fontSize={{base:'18'}}>Referral Streak</Text>
                    <Text color={'#fff'} fontSize={{base:'20'}}>You&apos;re on a roll 🔥</Text>
                </Box>

                    <Divider display={{base:'block', lg:'block', md:'block', sm:'none'}} orientation='vertical' h={'100px'}/>
                
                <Box textAlign={'center'}>
                    <Text 
                        color={'#fff'} 
                        fontSize={{base:'16', lg:'32', md:'26'}}
                        pb={2}
                        fontWeight={'bold'}
                    >
                    20
                    </Text>
                    <Text color={'#B4B4B4'}>Longest Referrals Streak</Text>
                </Box>

                </Stack>
            </TabPanel>

            <TabPanel p={4}>
              <Box>
                <Text>Total Value</Text>
                <Text>₦ 252,500.25</Text>
              </Box>
            </TabPanel>
        </TabPanels>

      </Tabs>
    </Box>
    </StatisticsCard>
    </Flex>


    <Stack>
        {/* Table component */}
        <Box>

        </Box>

        {/* Leaderboard Component */}
        <Box>
            
        </Box>
    </Stack>
  </Box>
  )
}

export default page