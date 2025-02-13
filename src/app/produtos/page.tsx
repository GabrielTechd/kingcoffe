'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export const products = [
  {
    id: 1,
    name: 'Café Especial Premium',
    description: 'Blend exclusivo de grãos selecionados, torrados artesanalmente para um sabor único e marcante. Notas de chocolate amargo, caramelo e um toque sutil de frutas vermelhas.',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Blend de grãos da América do Sul',
      roast: 'Média',
      intensity: '8/10',
      notes: ['Chocolate amargo', 'Caramelo', 'Frutas vermelhas'],
      weight: '250g'
    }
  },
  {
    id: 2,
    name: 'Café Gourmet Intenso',
    description: 'Grãos 100% arábica com notas de chocolate e caramelo, ideal para momentos especiais. Torra escura que realça o sabor intenso e encorpado.',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Sul de Minas Gerais',
      roast: 'Escura',
      intensity: '9/10',
      notes: ['Chocolate', 'Caramelo', 'Nozes'],
      weight: '250g'
    }
  },
  {
    id: 3,
    name: 'Café Orgânico Natural',
    description: 'Produzido de forma sustentável, com sabor suave e aroma envolvente. Certificação orgânica e comércio justo garantidos.',
    price: 54.90,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Chapada Diamantina - Bahia',
      roast: 'Média-clara',
      intensity: '6/10',
      notes: ['Mel', 'Frutas cítricas', 'Flores'],
      weight: '250g'
    }
  },
  {
    id: 4,
    name: 'Café Moído Tradicional',
    description: 'Blend tradicional, moído na hora para preservar todo o sabor. Perfeito para o dia a dia, com sabor equilibrado e marcante.',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Moído',
    details: {
      origin: 'Blend Brasil',
      roast: 'Média',
      intensity: '7/10',
      notes: ['Chocolate ao leite', 'Amendoim', 'Caramelo'],
      weight: '250g'
    }
  },
  {
    id: 5,
    name: 'Café em Cápsulas Premium',
    description: 'Cápsulas compatíveis com Nespresso®, sabor premium. Praticidade sem abrir mão da qualidade.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    category: 'Cápsulas',
    details: {
      origin: 'Blend Premium',
      intensity: '8/10',
      notes: ['Chocolate', 'Cereais', 'Especiarias'],
      compatibility: 'Nespresso®',
      units: '10 cápsulas'
    }
  },
  {
    id: 6,
    name: 'Kit Degustação',
    description: 'Kit com 3 tipos diferentes de café para você descobrir seu favorito. Inclui nossos blends mais populares.',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'Kits',
    details: {
      contents: ['Café Especial Premium 250g', 'Café Gourmet Intenso 250g', 'Café Orgânico Natural 250g'],
      totalWeight: '750g'
    }
  },
  {
    id: 7,
    name: 'Café Cold Brew',
    description: 'Café extraído a frio por 12 horas, resultando em uma bebida suave e refrescante. Perfeito para os dias quentes.',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'Especiais',
    details: {
      process: 'Extração a frio por 12 horas',
      intensity: '5/10',
      notes: ['Chocolate', 'Frutas', 'Caramelo'],
      volume: '1L'
    }
  },
  {
    id: 8,
    name: 'Café Descafeinado Premium',
    description: 'Todo o sabor do café sem a cafeína. Processo natural de descafeinação que preserva o sabor original.',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Especiais',
    details: {
      process: 'Descafeinação natural',
      roast: 'Média',
      notes: ['Nozes', 'Cacau', 'Cereais'],
      weight: '250g'
    }
  }
];

const categories = ['Todos', 'Grãos', 'Moído', 'Cápsulas', 'Kits', 'Especiais'];

export default function Products() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [addedToCartId, setAddedToCartId] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: any) => {
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
      <Header />
      
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
      <section className="py-8 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-coffee-dark text-white'
                    : 'bg-white text-coffee-dark hover:bg-coffee-light hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-full"
              >
                <Link href={`/produtos/${product.id}`}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg group h-full flex flex-col">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-coffee-dark mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-2xl font-bold text-coffee-dark">
                          R$ {product.price.toFixed(2)}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToCart(product);
                          }}
                          className="button-primary"
                        >
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Animação de adicionado ao carrinho */}
                <AnimatePresence>
                  {addedToCartId === product.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 0, scale: 0.5 }}
                      animate={{ opacity: 1, y: -20, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full z-10"
                    >
                      Adicionado! ✓
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 