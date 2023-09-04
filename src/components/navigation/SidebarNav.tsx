'use client'

import {FC} from 'react'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
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
  Image
} from '@chakra-ui/react'
import {
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import {
  PiChartLineUp,
} from 'react-icons/pi'
import {
  BsGrid,
  BsCreditCard,
} from 'react-icons/bs'
import { IconType } from 'react-icons'

interface LinkItemProps {
  name: string
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

interface SidebarNavProps {
    children: React.ReactNode
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: BsGrid },
  { name: 'Accounts', icon: BsCreditCard },
  { name: 'Reports', icon: PiChartLineUp },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={'#1F1F1F'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="/images/logo.svg" alt="logo"/>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        fontSize='20'
        color="#FFF"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#414141',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            color="#A7A7A7"
            fontSize="20"
            _groupHover={{
              color: '#A7A7A7',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={'#0C0C0C'}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
        
      <IconButton
        color={'#fff'}
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Image 
        display={{ base: 'flex', md: 'none' }}
        fontSize="10"
        fontFamily="monospace"
        fontWeight="bold" 
        alt="logo"
        src="/images/logo.svg"
        />

        <Box
        mr={{ base:"auto"}}
        hideBelow={'lg'}
        >
        <Text 
        color={'#fff'}
        fontSize={32}
        fontWeight={500}>
        Welcome back, Kemi
        </Text>
        </Box>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  borderRadius={5}
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm" color={'#fff'}>Kemi Olaniyi</Text>
                  <Text fontSize="xs" color="#A7A7A7">
                    kemi.olaniyi@greynote.app
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const SidebarNav: FC<SidebarNavProps> = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={'#0C0C0C'} fontFamily={'Rubik, sans-serif'}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
        {children}
      </Box>
    </Box>
  )
}

export default SidebarNav