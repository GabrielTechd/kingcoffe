import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/Product';

const RelatedProductsSection: React.FC<{ relatedProducts: Product[] }> = ({ relatedProducts }) => {
  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-16 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Produtos Relacionados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <motion.div
              key={relatedProduct.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <Link href={`/produtos/${relatedProduct.id}`} className="block">
                <div className="relative h-64">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-coffee-dark mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  <span className="text-2xl font-bold text-coffee-dark">
                    R$ {relatedProduct.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProductsSection;
