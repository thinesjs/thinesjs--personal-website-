import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ParticlesBackground from './components/ParticlesBackground'
import { ChakraProviders } from './providers/ChakraProvider'
import Footer from './components/footer/Footer'

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
        <ChakraProviders>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <ParticlesBackground />
          <Navbar />
          {children}
          <Footer />
        </div>
          
        </ChakraProviders>
      </body>
    </html>
  )
}
