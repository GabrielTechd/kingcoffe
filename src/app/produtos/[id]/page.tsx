'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { products } from '@/data/products';

const translations: { [key: string]: string } = {
  origin: 'Origem',
  roast: 'Torra',
  intensity: 'Intensidade',
  notes: 'Notas',
  weight: 'Peso',
  contents: 'Conteúdo',
  totalWeight: 'Peso Total',
  process: 'Processo',
  volume: 'Volume',
  compatibility: 'Compatibilidade',
  units: 'Unidades'
};

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: { [key: string]: string | string[] | undefined };
}

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

function ProductDetailsSection({ product, handleAddToCart, addedToCart }: { product: Product, handleAddToCart: () => void, addedToCart: boolean }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
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
}

function ProductInfo({ product }: { product: Product }) {
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
}

function ProductDetailsList({ details }: { details: { [key: string]: string | string[] | undefined } }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-coffee-dark mb-4">
        Características
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className="bg-background-light p-4 rounded-lg">
            <span className="text-sm text-gray-600 capitalize">
              {translations[key] || key}:
            </span>
            <div className="font-semibold text-coffee-dark">
              {Array.isArray(value) ? value.join(', ') : value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductPriceAndCart({ product, handleAddToCart }: { product: Product, handleAddToCart: () => void }) {
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
}

function RelatedProductsSection({ relatedProducts }: { relatedProducts: Product[] }) {
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
}