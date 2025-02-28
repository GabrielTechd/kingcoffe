import React from 'react';
import { Product } from '@/types/Product';

const ProductPriceAndCart: React.FC<{ product: Product, handleAddToCart: () => void }> = ({ product, handleAddToCart }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <span className="text-3xl font-bold text-coffee-dark">
        R$ {product.price.toFixed(2)}
      </span>
      <button
        onClick={handleAddToCart}
        className="button-primary"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductPriceAndCart;
