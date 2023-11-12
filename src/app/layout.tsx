"use client"
import { FC } from 'react'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '@/theme/customTheme'

const metadata: Metadata = {
  title: 'Greynote-Agent',
  description: 'Greynote Agent Dashboard',
}

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={ customTheme }>
            {children}
        </ChakraProvider>
        </body>
    </html>
  )
}

export default Layout;
