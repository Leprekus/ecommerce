'use client'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'

const Providers = ({ children }: { children: React.ReactNode}) => {
  return (
    <>{ children }</>
  )
}

export default api.withTRPC(Providers)
//export default Providers