'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'

export function ChakraProviders({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <CSSReset/>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}