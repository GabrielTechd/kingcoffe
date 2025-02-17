import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from '@/contexts/CartContext'
import Cart from '@/components/Cart'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'King Coffee - Sua cafeteria de cada dia',
  description: 'Descubra o melhor café, do grão à xícara. King Coffee, sua cafeteria artesanal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          {children}
          <Cart />
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
