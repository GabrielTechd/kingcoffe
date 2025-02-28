import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Product } from '@/types/Product';
import ProductInfo from './ProductInfo';
import ProductPriceAndCart from './ProductPriceAndCart';

const ProductDetailsSection: React.FC<{ product: Product, handleAddToCart: () => void, addedToCart: boolean }> = ({ product, handleAddToCart, addedToCart }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto mt-28 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="p-8">
              <ProductInfo product={product} />
              <ProductPriceAndCart product={product} handleAddToCart={handleAddToCart} />
              {addedToCart && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-green-500 text-center font-semibold"
                >
                  Produto adicionado ao carrinho!
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetailsSection;
