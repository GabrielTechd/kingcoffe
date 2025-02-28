import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from './ProductCard';
import SliderButton from './SliderButton';

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
          <h2 className="md:text-6xl text-4xl font-bold">Nossos Produtos</h2>
          <p className="text-lg text-gray-700">Descubra nossos cafés especiais</p>
        </motion.div>

        <div className="relative">
          <SliderButton direction="left" />
          <SliderButton direction="right" />

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
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlide;