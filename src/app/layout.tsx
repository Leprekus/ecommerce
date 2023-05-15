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
      <body className='max-w-7xl mx-auto overflow-x-hidden'>
          <Providers>{children}</Providers>
        </body>
    </html>
  )
}
