"use client";
import { FC } from "react";
import {
  Box,
  Text,
  Icon,
  Image,
  Flex,
  Wrap,
  IconButton,
  WrapItem,
} from "@chakra-ui/react";
import { RxArrowTopRight, RxArrowBottomLeft } from "react-icons/rx";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import LeaderBoardItem from "@/components/leaderboardItem";
import { FaSquare } from "react-icons/fa6";

interface AnalyticsPageProps {}

const PieChartData = [
  { name: "Group A", value: 400, fill: "#ffc148" },
  { name: "Group B", value: 300, fill: "#18a0fb" },
  { name: "Group C", value: 300, fill: "#35e5aa" },
  { name: "Group D", value: 200, fill: "#ff83a8" },
];

const BarchartData = [
  {
    name: "Jan",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    pv: 2154,
    amt: 2100,
  },
  {
    name: "Sep",
    pv: 8640,
    amt: 2100,
  },
  {
    name: "Oct",
    pv: 1120,
    amt: 2100,
  },
  {
    name: "Nov",
    pv: 5398,
    amt: 2100,
  },
  {
    name: "Dec",
    pv: 4350,
    amt: 2100,
  },
];

const LineChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

const AnalyticsPage: FC<AnalyticsPageProps> = () => {
  return (
    <Box backgroundColor={"#313131"} h={"full"} p={"1rem"}>
      <Flex w={"full"} flexDir={"column"}>
        <Flex gap={3} flexDir={{ base: "column", lg: "row" }} w={"full"}>
          <Flex
            backgroundColor={"#1A1C24"}
            p={"0.7rem"}
            rounded={"md"}
            w={"full"}
          >
            <Flex justifyContent={"space-between"} w={"full"} mb={"0.7rem"}>
              <Box>
                <Flex alignItems={"center"} gap={2}>
                  <Text color={"#fff"} fontSize={"2xl"}>
                    ₦22,450
                  </Text>
                  <Text color={"green.400"} fontSize={"xs"}>
                    +3.5%
                  </Text>
                </Flex>
                <Text color={"#636986"} fontSize={"xs"}>
                  Monthly Earnings
                </Text>
              </Box>
              <IconButton
                icon={<RxArrowTopRight />}
                aria-label=""
                size={"sm"}
                backgroundColor={"#1d302b"}
                color={"green.300"}
                _hover={{ backgroundColor: "none" }}
              />
            </Flex>
          </Flex>

          <Flex
            backgroundColor={"#1A1C24"}
            p={"0.7rem"}
            rounded={"md"}
            w={"full"}
          >
            <Flex justifyContent={"space-between"} w={"full"} mb={"0.7rem"}>
              <Box>
                <Flex alignItems={"center"} gap={2}>
                  <Text color={"#fff"} fontSize={"2xl"}>
                    ₦18,200
                  </Text>
                  <Text color={"red.400"} fontSize={"xs"}>
                    -2.4%
                  </Text>
                </Flex>
                <Text color={"#636986"} fontSize={"xs"}>
                  Yearly Earnings
                </Text>
              </Box>
              <IconButton
                icon={<RxArrowBottomLeft />}
                aria-label=""
                size={"sm"}
                backgroundColor={"#342128"}
                color={"red.300"}
                _hover={{ backgroundColor: "none" }}
              />
            </Flex>
          </Flex>

          <Flex
            backgroundColor={"#1A1C24"}
            p={"0.7rem"}
            rounded={"md"}
            w={"full"}
          >
            <Flex justifyContent={"space-between"} mb={"0.7rem"} w={"full"}>
              <Box>
                <Flex alignItems={"center"} gap={2}>
                  <Text color={"#fff"} fontSize={"2xl"}>
                    ₦30,590
                  </Text>
                  <Text color={"green.400"} fontSize={"xs"}>
                    +11.7%
                  </Text>
                </Flex>
                <Text color={"#636986"} fontSize={"xs"}>
                  Total Earnings
                </Text>
              </Box>
              <IconButton
                icon={<RxArrowTopRight />}
                aria-label=""
                size={"sm"}
                backgroundColor={"#1d302b"}
                color={"green.300"}
                _hover={{ backgroundColor: "none" }}
              />
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={3} flexDir={{ base: "column", lg: "row" }}>
          <Flex w={"full"} height={"full"} flexDir={"column"}>
            <Box
              backgroundColor={"#1A1C24"}
              mt={"1rem"}
              w={"full"}
              height={"full"}
              p={"0.7rem"}
              rounded={"md"}
            >
              <Flex>
                <Text fontSize={"xl"} color={"blue.600"}>
                  Sales Report
                </Text>
              </Flex>
              <Flex w={"full"} my={"1rem"}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={BarchartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                    barSize={20}
                  >
                    <CartesianGrid
                      strokeDasharray="8 8"
                      vertical={false}
                      stroke="#3F4145"
                    />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#00b175" radius={5} />
                  </BarChart>
                </ResponsiveContainer>
              </Flex>
            </Box>

            <Box
              backgroundColor={"#1A1C24"}
              mt={"1rem"}
              w={"full"}
              height={"full"}
              p={"0.7rem"}
              rounded={"md"}
            >
              <Flex>
                <Text fontSize={"xl"} color={"blue.600"}>
                  Active Customers
                </Text>
              </Flex>
              <Flex w={"full"} my={"1rem"}>
                <ResponsiveContainer width="100%" height={465}>
                  <LineChart
                    width={500}
                    height={300}
                    data={BarchartData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#3F4145"
                    />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis axisLine={false} />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#95B3FF"
                      activeDot={{ r: 8 }}
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Flex>
            </Box>
          </Flex>

          <Flex w={"full"} height={"full"} flexDir={"column"} flex={"1"}>
            <Box
              backgroundColor={"#1A1C24"}
              pb={"1.1rem"}
              pt={"0.7rem"}
              px={"0.7rem"}
              rounded={"md"}
              w={"full"}
              height={"full"}
              mt={"1rem"}
            >
              <Flex>
                <Text fontSize={"xl"} color={"blue.600"}>
                  Client Subscription Status
                </Text>
              </Flex>
              <Flex w={"full"}>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart
                    width={800}
                    height={300}
                    // margin={{ top:0, right: 0, bottom: 0, left: 0 }}
                  >
                    <Pie
                      data={PieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={100}
                      fill="transparent"
                      paddingAngle={2}
                      dataKey="value"            
                    >
                      {PieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill}/>
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Flex>
              <Flex justifyContent={"space-evenly"}>
                {PieChartData.map((entry, index) => (
                  <Flex alignItems={"center"} gap={2}>
                    <FaSquare color={entry.fill} />
                    <Text color={"#fff"}>{entry.name}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>

            <Box
              backgroundColor={"#1A1C24"}
              p={"0.7rem"}
              rounded={"md"}
              w={"full"}
              height={"full"}
              mt={"1rem"}
            >
              {/* Leaderboard Component */}
              <Flex
                py={"2rem"}
                px={"1.5rem"}
                flex={"1"}
                mt={{ base: "1rem", lg: "0px" }}
                flexDir={"column"}
              >
                <Box mb={"2rem"}>
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

                <Box mt={2} display={"flex"} flexDir={"column"} gap={6}>
                  {leaderboardData.map((data, index) => {
                    return (
                      <LeaderBoardItem key={index} leaderboardData={data} />
                    );
                  })}
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AnalyticsPage;
