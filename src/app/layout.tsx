import { ClerkProvider } from '@clerk/nextjs'
import '../styles/globals.css'
import Providers from './components/Providers'
export const metadata = {
  title: 'Ecommerce',
  description: 'Browse and and ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' min-h-screen max-w-7xl mx-auto overflow-x-hidden flex items-center justify-center'>
          <ClerkProvider>{children}</ClerkProvider>
        </body>
    </html>
  )
}
