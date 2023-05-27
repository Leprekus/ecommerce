import React, { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className='w-full min-h-screen flex items-center justify-center'>
        { children }
    </main>
  )
}
