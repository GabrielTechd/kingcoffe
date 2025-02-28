import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface OrderSummaryProps {
  items: {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }[];
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="lg:sticky lg:top-24 h-fit"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-coffee-dark mb-6">
          Resumo do Pedido
        </h2>
        <div className="space-y-4 mb-6">
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-coffee-dark">{item.name}</h3>
                <p className="text-gray-600">Quantidade: {item.quantity}</p>
                <p className="text-coffee-dark font-semibold">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">R$ {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Frete</span>
            <span className="font-semibold">Grátis</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold text-coffee-dark mt-4 pt-4 border-t">
            <span>Total</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;
