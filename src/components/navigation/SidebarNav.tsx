"use client";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Button,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Grid,
} from "@chakra-ui/react";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import { BsGrid } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { PiChartLineUp } from "react-icons/pi";
import { IconType } from "react-icons";
import { GoQuestion } from "react-icons/go";
import { format } from "date-fns";

interface LinkItemProps {
  name: string;
  icon: IconType;
  url: string;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  link: string;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
  profileData: {
    firstName: string;
    lastName: string;
    email: string;
    referralNumber: number;
    dateOfCreation: string;
    referralCode: string;
    profileUrl: string;
  };
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface SidebarNavProps {
  children: React.ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: BsGrid, url: "/dashboard" },
  { name: "Analytics", icon: PiChartLineUp, url: "/analytics" },
  { name: "Clients", icon: GoPerson, url: "/clients" },
];

const LegendBadge = () => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      px={'0.8rem'}
      py={'0.1rem'}
      border={"1px solid #9FA300"}
      rounded={"4px"}
      backgroundColor={"#FEFFCF"}
    >
      <Text color={"#9FA300"} fontSize={'xs'} fontWeight={'lighter'}>Legend</Text>
    </Flex>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={"#1F1F1F"}
      w={{ base: "100%", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h={"20"} alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/images/logo.svg" alt="logo" />
        <CloseButton
          color={"#fff"}
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        />
      </Flex>
      <Grid mt={{ base: "0", md: "10" }}>
        {LinkItems.map((item, index) => {
          return (
            <NavItem
              my={2}
              icon={item.icon}
              bg={
                usePathname() === `/${item.name.toLowerCase()}` ? "#414141" : ""
              }
              link={item.url}
              key={index}
            >
              {item.name}
            </NavItem>
          );
        })}
      </Grid>
    </Box>
  );
};

const NavItem = ({ icon, children, link, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href={`${link}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        fontSize="lg"
        color="#FFF"
        py={"1"}
        px={"2"}
        mx="4"
        rounded={"sm"}
        role="group"
        cursor="pointer"
        _hover={{
          bg: "#414141",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            color="#A7A7A7"
            fontSize="20"
            _groupHover={{
              color: "#A7A7A7",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, profileData, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={"#0C0C0C"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        color={"#fff"}
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Box mr={{ base: "auto" }} hideBelow={"lg"}>
        <Text color={"#EAEAEA"} fontSize={24} fontWeight={500}>
          Welcome back, {profileData.firstName}
        </Text>
      </Box>

      <HStack spacing={{ base: "0", md: "6" }}>
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar
                  borderRadius={5}
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" color={"#fff"}>
                    {`${profileData.firstName} ${profileData.lastName}`}
                  </Text>
                  <Text fontSize="xs" color="#A7A7A7">
                    {profileData.email}
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              backgroundColor={"#fff"}
              w={"280px"}
              p={"0.5rem"}
              rounded={"xl"}
            >
              <MenuItem
                justifyContent={"center"}
                border={"1px solid #E2E2E2"}
                rounded={"lg"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDir={"column"}
                  gap={10}
                >
                  <Box
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Avatar
                      src="https://janeylous.com/wp-content/uploads/2023/01/Dayna-Jackson.jpg"
                      size={"lg"}
                    />
                    <Text
                      fontSize={"sm"}
                      fontWeight={"600"}
                    >{`${profileData.firstName} ${profileData.lastName}`}</Text>
                    <Text color={"#A7A7A7"} fontSize={"sm"} fontWeight={"300"}>
                      {profileData.email}
                    </Text>
                  </Box>
                  <Flex gap={3} justifyContent={"center"} alignItems={"center"}>
                    <Text color={"#A7A7A7"} fontSize={"sm"} fontWeight={"400"}>
                      {profileData.referralNumber} Refferals
                    </Text>
                    <LegendBadge />
                  </Flex>
                </Flex>
              </MenuItem>
              <MenuItem
                justifyContent={"center"}
                _hover={{ backgroundColor: "#fff" }}
                mt={"0.5rem"}
              >
                <Flex
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Text color={"#A7A7A7"} fontSize={"xs"} fontWeight={"100"}>
                    Created at: {profileData.dateOfCreation}
                  </Text>
                  <Text
                    color={"#007C7B"}
                    fontSize={"2.5rem"}
                    letterSpacing={"3px"}
                    mt={"0.5rem"}
                  >
                    {profileData.referralCode}
                  </Text>
                  <Text fontSize={"xs"} fontWeight={"bold"}>
                    My Refferal Code
                  </Text>
                </Flex>
              </MenuItem>
              <MenuDivider />
              <MenuItem>
                <Flex alignItems={"center"} gap={3}>
                  <Icon as={GoQuestion} color={"#747474"} />
                  <Text color={"#747474"} fontSize={"sm"}>
                    Get Help
                  </Text>
                </Flex>
              </MenuItem>
              <Flex justifyContent={"center"}>
                <Button
                  backgroundColor={"#FFC5C5"}
                  rounded={"md"}
                  py={"0.3rem"}
                  w={"90%"}
                  mt={"10px"}
                  color={"#E03F3F"}
                  _hover={{ backgroundColor: "#712626", color: "#fff" }}
                  mb={"1rem"}
                >
                  <Text fontSize={"sm"} fontWeight={"500"}>
                    Logout
                  </Text>
                </Button>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const SidebarNav: FC<SidebarNavProps> = ({ children }) => {
  const date = new Date();
  const formattedDate = format(date, "EEEE, do MMMM yyyy");
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profile, setProfile] = useState({
    firstName: "Kemi",
    lastName:'Olaniyi',
    email: "kemi.olaniyi@greynote.app",
    referralNumber: 231,
    dateOfCreation: "21st January 2022",
    referralCode: "A5VW68",
    profileUrl:
      "https://janeylous.com/wp-content/uploads/2023/01/Dayna-Jackson.jpg",
  });

  return (
    <Box minH="100vh" bg={"#0C0C0C"} fontFamily={"Rubik, sans-serif"}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} profileData={profile} />
      <Box ml={{ base: 0, md: 60 }} py="4">
        <Grid maxW={"520px"} px={'4'} mb={'1rem'}>
          <Text color={"#EAEAEA"} fontSize={24} fontWeight={600}>
            {`Today is ${formattedDate}.`}
          </Text>

          <Text color={"#EAEAEA"} mt={{ base: "4" }} fontSize={'sm'}>
            Momentum Builder: Keep the referrals coming to keep the momentum
            growing!
          </Text>
        </Grid>
        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default SidebarNav;
