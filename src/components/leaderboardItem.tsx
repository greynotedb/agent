import { FC } from "react";
import { Flex, Text, Avatar, Box, Icon } from "@chakra-ui/react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FaEquals } from "react-icons/fa";

interface leaderBoardItemProps {
  leaderboardData: {
    position: number;
    profileUrl: string;
    firstName: string;
    lastName: string;
    email: string;
    positionChange: string;
  };
}

const LeaderBoardItem: FC<leaderBoardItemProps> = ({ leaderboardData }) => {
  return (
    <Box backgroundColor={"#3E3E3E"} rounded={"md"} px={"1rem"} py={"0.7rem"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} gap={8}>
        <Flex gap={3} alignItems={"center"}>
          <Text
            fontSize={{base:"lg", lg:"2rem"}}
            fontWeight={"700"}
            color={"#fff"}
            _hover={{
              color: "#fff",
            }}
          >
            {leaderboardData.position}
          </Text>
          <Box display={"flex"} gap={3} alignItems={"center"}>
            <Avatar
              borderRadius={5}
              size={{base:"sm", lg:"md"}}
              src={leaderboardData.profileUrl}
            />
            <Box>
              <Text fontSize={{base:"sm", lg:"md"}} color={"#fff"}>
                {leaderboardData.firstName + " " + leaderboardData.lastName}
              </Text>
              <Text
                fontSize="md"
                color="#A7A7A7"
                _groupHover={{ color: "#fff" }}
                display={{ base: "none", md: "block" }}
              >
                {leaderboardData.email}
              </Text>
            </Box>
          </Box>
        </Flex>
        <Box display="flex">
          {leaderboardData.positionChange == "up" ? (
            <Icon
              as={BiSolidUpArrow}
              color="green"
              boxSize={{ base: "3", md:"5", lg: "6" }}
            />
          ) : leaderboardData.positionChange == "down" ? (
            <Icon
              as={BiSolidDownArrow}
              color="red"
              boxSize={{ base: "3", md:"5", lg: "6" }}
            />
          ) : leaderboardData.positionChange == "same" ? (
            <Icon
              as={FaEquals}
              color="#9D9D9D"
              boxSize={{ base: "3", md:"5", lg: "6" }}
            />
          ) : (
            <></>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default LeaderBoardItem;
