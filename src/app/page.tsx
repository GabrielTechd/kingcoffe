'use client';
import Hero from '@/components/Hero';
import Features from '@/components/Features/FeaturesHome';
import ProductsSlide from '@/components/ProductsSlide';
import Presentation from '@/components/Presentation';

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
