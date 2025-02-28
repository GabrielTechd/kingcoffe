import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/Product';

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => {
  return (
    <motion.div
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
  );
};

export default ProductCard;
