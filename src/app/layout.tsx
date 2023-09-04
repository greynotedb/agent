'use client'
import { FC } from 'react'
import type { Metadata } from 'next'
import {ChakraProvider} from '@chakra-ui/react'

export const metadata: Metadata = {
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
        <ChakraProvider>
        {children}
        </ChakraProvider>
        </body>
    </html>
  )
}

export default Layout;
