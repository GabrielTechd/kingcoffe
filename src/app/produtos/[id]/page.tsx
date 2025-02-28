'use client';

import { useCart } from '@/contexts/CartContext';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetailsSection from '@/components/products/ProductDetailsSection';
import RelatedProductsSection from '@/components/products/RelatedProductsSection';
import { Product } from '@/types/Product';

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  const { id } = use(params);

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = products.find(p => p.id === productId) as Product;
    
    if (!foundProduct) {
      router.push('/produtos');
      return;
    }

    setProduct(foundProduct);
    setRelatedProducts(
      products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3) as Product[]
    );

    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [id, router]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1000);
  };

  return (
    <main className="min-h-screen bg-primary-color">
      <ProductDetailsSection product={product} handleAddToCart={handleAddToCart} addedToCart={addedToCart} />
      <RelatedProductsSection relatedProducts={relatedProducts} />
    </main>
  );
}