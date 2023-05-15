'use client'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export default function Providers({ children }: { children: React.ReactNode}) {
  return (
    <ClerkProvider>{ children }</ClerkProvider>
  )
}