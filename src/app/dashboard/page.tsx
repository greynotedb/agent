"use client";

import { FC } from "react";
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
  Table,
  TableContainer,
  Thead,
  Tr,
  Td,
  Th,
  Tbody,
  Badge,
  Card,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import StatisticsCard from "@/components/statisticsCard";
import { format } from "date-fns";
import LeaderBoardItem from "@/components/leaderboardItem";

interface pageProps {}

const tabData = [
  {
    label: "This Month",
  },
  {
    label: "Overall",
  },
];

const tableData = {
  columnNames: [
    "Referral ID",
    "First Name",
    "Last Name",
    "School Name",
    "Status",
    "Package",
  ],
  columnData: [
    {
      id: "157752",
      firstName: "Bukayo",
      lastName: "Chinedu",
      schoolName: "Atlas Private School",
      status: "Paid",
      package: "Monthly",
    },
    {
      id: "159865",
      firstName: "Alabi",
      lastName: "Kazeem",
      schoolName: "New Dawn Boarding School",
      status: "Paid",
      package: "Yearly",
    },
    {
      id: "128625",
      firstName: "Jonathan",
      lastName: "Philips",
      schoolName: "Greater Evangelical",
      status: "Processing",
      package: "Monthly",
    },
    {
      id: "153429",
      firstName: "Adebayo",
      lastName: "Adewale",
      schoolName: "Covenant college",
      status: "Processing",
      package: "Monthly",
    },
    {
      id: "132258",
      firstName: "Michael",
      lastName: "Stones",
      schoolName: "Gold compass school",
      status: "Failed",
      package: "Yearly",
    },
  ],
};

const leaderboardData = [
  {
    position: 1,
    profileUrl:
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    firstName: "Kemi",
    lastName: "Olaniyi",
    email: "kemi.olaniyi@greynote.app",
    positionChange: "up",
  },
  {
    position: 3,
    profileUrl:
      "https://th.bing.com/th/id/OIP.0yi26fO0azz9oRCE5I59zgHaE8?pid=ImgDet&rs=1",
    firstName: "Kemi",
    lastName: "Olaniyi",
    email: "kemi.olaniyi@greynote.app",
    positionChange: "down",
  },
  {
    position: 3,
    profileUrl:
      "https://www.americanbrainfoundation.org/wp-content/uploads/2021/01/Porter-2018-2048x1365.jpg",
    firstName: "Kemi",
    lastName: "Olaniyi",
    email: "kemi.olaniyi@greynote.app",
    positionChange: "up",
  },
  {
    position: 4,
    profileUrl:
      "https://th.bing.com/th/id/R.5d2640166fb9248ee7ae20cbc19a9141?rik=QcfC8%2ft8rnv%2foQ&pid=ImgRaw&r=0",
    firstName: "Kemi",
    lastName: "Olaniyi",
    email: "kemi.olaniyi@greynote.app",
    positionChange: "same",
  },
];

const page: FC<pageProps> = () => {
  const date = new Date();
  const formattedDate = format(date, "EEEE, do MMMM yyyy");

  return (
    <Box mx={5}>
      <Grid maxW={"520px"}>
        <Text color={"#fff"} fontSize={24} fontWeight={600}>
          {`Today is ${formattedDate}.`}
        </Text>

        <Text color={"#fff"} mt={{ base: "6" }}>
          Momentum Builder: Keep the referrals coming to keep the momentum
          growing!
        </Text>
      </Grid>

      <Box display={{ base: "col", lg: "flex" }} mt={{ base: "16" }} gap={5}>
        {/* Styling for first card */}
        <StatisticsCard bgImage="/images/bluegradientbg.png">
          <Box w={"full"}>
            <Tabs align="end" variant="unstyled">
              <TabList>
                {tabData.map((tab, index) => (
                  <Tab
                    key={index}
                    color={"#D8D8D8"}
                    borderRadius="4"
                    padding={{
                      base: "5, 5",
                      md: "0.7rem 2rem",
                    }}
                    mx="2"
                    fontSize={'xs'}
                    _selected={{
                      bg: "#4444447D",
                      color: "#D8D8D8",
                    }}
                  >
                    <Box pr="1">
                      <Icon as={HiOutlineCalendarDays} color={'#8D8D8D'} />
                    </Box>
                    {tab.label}
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                <TabPanel p={4} textAlign={"start"}>
                  <Box>
                    <Box>
                      <Text color={"#B4B4B4"}>Total Value</Text>
                      <Text color={"#fff"} fontSize={"32"}>
                        ₦ 252,500.25
                      </Text>
                    </Box>

                    <HStack pt={4} gap={20} lineHeight={"8"}>
                      <Text color="#818181" fontSize={{ base: "lg" }} pb={9}>
                        You are among the{" "}
                        <Text as="span" color="#fff">
                          top 2%
                        </Text>{" "}
                        of agents, keep this up and you’ll be eligible for Gold
                        Tier
                      </Text>

                      <Image
                        alt="badge"
                        src="/images/badge2.png"
                        display={{
                          xl: "block",
                          base: "none",
                        }}
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
        <StatisticsCard bgImage="/images/greengradientbg.png">
          <Box w="100%" h="100%">
            <Tabs align="end" variant="unstyled">
              <TabList>
                {tabData.map((tab, index) => (
                  <Tab
                    key={index}
                    color={"#D8D8D8"}
                    borderRadius="4"
                    padding={{
                      base: "5, 5",
                      md: "0.7rem 2rem",
                      sm: "0.3rem 1rem",
                    }}
                    mx="2"
                    fontSize={'xs'}
                    _selected={{
                      bg: "#4444447D",
                      color: "#D8D8D8",
                    }}
                  >
                    <Box pr="1">
                      <Icon as={HiOutlineCalendarDays} color={'#8D8D8D'} />
                    </Box>

                    {tab.label}
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                <TabPanel p={4} textAlign={"start"}>
                  <Box
                    display={{ base: "col", xl: "flex" }}
                    pt={4}
                    pb={7}
                    gap={10}
                    lineHeight={"8"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box textAlign={"center"}>
                      <Stack>
                        <Text
                          color={"#fff"}
                          fontSize={{ base: "16", lg: "32", md: "26" }}
                          pb={2}
                          fontWeight={"bold"}
                        >
                          231
                        </Text>
                        <Text color={"#B4B4B4"}>Total Referrals</Text>
                      </Stack>
                    </Box>

                    <Divider
                      display={{ base: "none", xl: "block" }}
                      orientation="vertical"
                      h={"100px"}
                    />

                    <Box textAlign={"center"} my={{ base: "50px", md: "0px" }}>
                      <Box
                        backgroundImage="/images/badge1.png"
                        minW={"100px"}
                        minH={"110px"}
                        backgroundRepeat={"no-repeat"}
                        backgroundPosition={"center"}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Text
                          color={"#fff"}
                          fontSize={{ base: "12", md: "32" }}
                          fontWeight={"bold"}
                        >
                          6
                        </Text>
                      </Box>
                      <Text color={"#B4B4B4"} fontSize={{ base: "18" }}>
                        Referral Streak
                      </Text>
                      <Text color={"#fff"} fontSize={{ base: "20" }}>
                        You&apos;re on a roll 🔥
                      </Text>
                    </Box>

                    <Divider
                      display={{ base: "none", xl: "block" }}
                      orientation="vertical"
                      h={"100px"}
                    />

                    <Box textAlign={"center"}>
                      <Text
                        color={"#fff"}
                        fontSize={{ base: "16", lg: "32", md: "26" }}
                        pb={2}
                        fontWeight={"bold"}
                      >
                        20
                      </Text>
                      <Text color={"#B4B4B4"}>Longest Referrals Streak</Text>
                    </Box>
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
      </Box>

      {/* Container for referrals and leaderboard */}
      <Box
        mt={{ base: "6" }}
        display={{ base: "column", lg: "flex" }}
        gap={5}
        justifyContent={"space-between"}
      >
        {/* Table component */}
        <Card
          bg={"#313131"}
          borderRadius={"md"}
          padding={{ base: "2rem 1rem", md: "3rem 1.5rem" }}
          w={{ base: "full", lg: "170%" }}
        >
          <Box>
            <Text color={"#B4B4B4"} fontSize={{ base: "16px" }}>
              Referrals
            </Text>
            <Text
              color={"#F1F1F1"}
              fontSize={{ base: "30px" }}
              fontWeight={"bold"}
            >
              Recent Signups
            </Text>
          </Box>

          <Box mt={{ base: "12" }}>
            <TableContainer>
              <Table size="md" borderColor={"#454545"}>
                <Thead>
                  <Tr>
                    {tableData.columnNames.map((column, index) => {
                      return (
                        <Th
                          key={index}
                          color={"#B4B4B4"}
                          textTransform={"none"}
                          fontWeight={"400"}
                          fontSize={{ base: "16" }}
                        >
                          {column}
                        </Th>
                      );
                    })}
                  </Tr>
                </Thead>
                <Tbody>
                  {tableData.columnData.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td key={index} color={"#EEEEEE"}>
                          {data.id}
                        </Td>
                        <Td key={index} color={"#EEEEEE"}>
                          {data.firstName}
                        </Td>
                        <Td key={index} color={"#EEEEEE"}>
                          {data.lastName}
                        </Td>
                        <Td key={index} color={"#EEEEEE"}>
                          {data.schoolName}
                        </Td>
                        <Td key={index}>
                          <Badge
                            variant="outline"
                            fontSize={{ base: "12" }}
                            colorScheme={
                              data.status == "Paid"
                                ? "green"
                                : data.status == "Processing"
                                ? "yellow"
                                : "gray"
                            }
                          >
                            {data.status}
                          </Badge>
                        </Td>
                        <Td key={index} color={"#EEEEEE"}>
                          {data.package}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Card>

        {/* Leaderboard Component */}
        <Card
          bg={"#313131"}
          borderRadius={"md"}
          py={"3rem"}
          px={"2rem"}
          width={"full"}
          mt={{ base: "1rem", lg: "0px" }}
        >
          <Box>
            <Text color={"#B4B4B4"} fontSize={{ md: "16px" }}>
              Leaderboard
            </Text>
            <Text
              color={"#F1F1F1"}
              fontSize={{ md: "30px" }}
              fontWeight={"bold"}
            >
              Top Agents
            </Text>
          </Box>

          <Box mt={2}>
            {leaderboardData.map((data, index) => {
              return <LeaderBoardItem key={index} leaderboardData={data} />;
            })}
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default page;
