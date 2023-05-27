import React, { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      { children }
    </main>
  )
}
