import './globals.css';
import { Poppins } from 'next/font/google';
import { CartProvider } from '@/contexts/CartContext';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'King Coffee - Sua cafeteria de cada dia',
  description: 'Descubra o melhor café, do grão à xícara. King Coffee, sua cafeteria artesanal.',
  keywords: 'café, cafeteria, grãos de café, café moído, cápsulas de café, café especial, café artesanal',
  author: 'King Coffee',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  og: {
    title: 'King Coffee - Sua cafeteria de cada dia',
    description: 'Descubra o melhor café, do grão à xícara. King Coffee, sua cafeteria artesanal.',
    type: 'website',
    url: 'https://www.kingcoffee.com.br',
    image: 'https://www.kingcoffee.com.br/images/og-image.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kingcoffee',
    title: 'King Coffee - Sua cafeteria de cada dia',
    description: 'Descubra o melhor café, do grão à xícara. King Coffee, sua cafeteria artesanal.',
    image: 'https://www.kingcoffee.com.br/images/twitter-image.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:image" content={metadata.og.image} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={poppins.className}>
        <CartProvider>
          <Header />
          {children}
          <Cart />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
