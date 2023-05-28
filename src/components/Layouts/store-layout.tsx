import React, { ReactNode } from 'react'
import NavbarMain from '../navbar-main'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
    <NavbarMain/>
    <main className="flex min-h-screen flex-col items-center justify-center max-w-7xl">
      { children }
    </main>
    </>
  )
}
