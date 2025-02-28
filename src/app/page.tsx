'use client';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/FeaturesHome';
import ProductsSlide from '@/components/home/ProductsSlide';
import Presentation from '@/components/home/PresentationHome';

export default function Home() {


  return (
    <main className="min-h-screen">
      {/* home section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Nossa História Section */}
      <Presentation />

      {/* Produtos Section */}
      <ProductsSlide />
    </main>
  );
}
