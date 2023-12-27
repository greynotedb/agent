'use client'
import { FC } from 'react'
import {
  Box,
  Text,
  Icon,
  Image,
  Flex,
  Wrap,
  IconButton,
  WrapItem,
} from "@chakra-ui/react"
import { RxArrowTopRight, RxArrowBottomLeft } from "react-icons/rx";
import {
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

interface AnalyticsPageProps {
  
}

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

const AnalyticsPage: FC<AnalyticsPageProps> = () => {

  return (
    <Box
      backgroundColor={"#313131"}
      h={"full"}
      p={"1rem"}
      mt={"1rem"}
      display={"flex"}
    >
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

        <Flex w={"full"} gap={3}>
          <Box
            backgroundColor={"#1A1C24"}
            mt={"1rem"}
            w={"full"}
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
            p={"0.7rem"}
            rounded={"md"}
          >
            <Flex>
              <Text fontSize={"xl"} color={"blue.600"}>
                Active Customers
              </Text>
            </Flex>
            <Flex w={"full"} my={"1rem"}>
              <ResponsiveContainer width="100%" height={300}>
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
      </Flex>

      <Flex></Flex>
    </Box>
  );
}

export default AnalyticsPage