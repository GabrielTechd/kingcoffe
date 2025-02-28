'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { products } from '@/data/products';
import Categories from '@/components/products/Categories';
import ProductsGrid from '@/components/products/ProductsGrid';
import { Product } from '@/types/Product';

const categories = ['Todos', 'Grãos', 'Moído', 'Cápsulas', 'Kits', 'Especiais'];

export default function Products() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [addedToCartId, setAddedToCartId] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    setAddedToCartId(product.id);
    setTimeout(() => setAddedToCartId(null), 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
          alt="Produtos"
          fill
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Nossos Produtos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl"
          >
            Descubra o melhor do café
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Products Grid */}
      <ProductsGrid
        products={filteredProducts}
        handleAddToCart={handleAddToCart}
        addedToCartId={addedToCartId}
      />
    </main>
  );
}