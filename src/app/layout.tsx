import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'thinesjs',
  description: 'thines jai shankar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
