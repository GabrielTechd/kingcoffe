import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../ProductsData';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

const ProductsSlide: React.FC = () => {
  return (
    <section id="produtos" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="section-title">Nossos Produtos</h2>
          <p className="text-lg text-gray-700">Descubra nossos cafés especiais</p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => {
              const container = document.getElementById('products-slider');
              if (container) {
                container.scrollLeft -= container.offsetWidth;
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-coffee-dark text-white p-3 rounded-full shadow-lg hover:bg-coffee-light transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={() => {
              const container = document.getElementById('products-slider');
              if (container) {
                container.scrollLeft += container.offsetWidth;
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-coffee-dark text-white p-3 rounded-full shadow-lg hover:bg-coffee-light transition-colors"
          >
            <FaChevronRight size={24} />
          </button>

          <div
            id="products-slider"
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="min-w-[300px] md:min-w-[400px] p-4 snap-center"
              >
                <Link href={`/produtos/${product.id}`} className="block">
                  <div className="card group h-full">
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                    <h3 className="text-xl font-bold text-coffee-dark mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-2xl font-bold text-coffee-dark">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <span className="button-primary">
                        Ver Detalhes
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlide;