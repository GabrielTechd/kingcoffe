'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useRouter } from 'next/navigation';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total, isCartOpen, toggleCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    toggleCart();
    router.push('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />
          
          {/* Cart Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50"
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-coffee-dark">Carrinho</h2>
                <button
                  onClick={toggleCart}
                  className="text-gray-500 hover:text-coffee-dark"
                >
                  ✕
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {items.length === 0 ? (
                  <p className="text-gray-500 text-center">Seu carrinho está vazio</p>
                ) : (
                  <div className="space-y-4">
                    {items.map(item => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-coffee-dark">{item.name}</h3>
                          <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                              className="text-coffee-dark hover:bg-gray-200 w-6 h-6 rounded"
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-coffee-dark hover:bg-gray-200 w-6 h-6 rounded"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-coffee-dark">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
                <button
                  className="w-full bg-coffee-dark text-white py-3 rounded-lg hover:bg-coffee-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={items.length === 0}
                  onClick={handleCheckout}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 