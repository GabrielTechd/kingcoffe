import React from 'react';
import { Product } from '@/types/Product';
import ProductDetailsList from './ProductDetailsList';

const ProductInfo: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <div className="mb-6">
        <span className="text-sm text-coffee-light font-semibold">
          {product.category}
        </span>
        <h1 className="text-3xl font-bold text-coffee-dark mt-2">
          {product.name}
        </h1>
      </div>
      <p className="text-gray-600 mb-6">
        {product.description}
      </p>
      <ProductDetailsList details={product.details} />
    </>
  );
};

export default ProductInfo;
