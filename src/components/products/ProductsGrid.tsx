import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/Product";

interface ProductsGridProps {
  products: Product[];
  handleAddToCart: (product: Product) => void;
  addedToCartId: number | null;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({
  products,
  handleAddToCart,
  addedToCartId,
}) => {
  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <Link href={`/produtos/${product.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group h-full flex flex-col">
                  <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-coffee-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>
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
  );
};

export default ProductsGrid;
