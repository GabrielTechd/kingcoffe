'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import Image from 'next/image';
import { FaLock, FaCreditCard, FaBarcode, FaMoneyBill } from 'react-icons/fa';

export default function Checkout() {
  const { items, total } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de processamento do pagamento
    alert('Pedido realizado com sucesso!');
  };

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary-color text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Finalizar Compra
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center text-coffee-light"
          >
            <FaLock className="mr-2" />
            <span>Pagamento 100% seguro</span>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-coffee-dark mb-6">
                Informações de Entrega
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Endereço</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Cidade</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Estado</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">CEP</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-coffee-dark mb-4">
                    Método de Pagamento
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('credit')}
                      className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                        paymentMethod === 'credit'
                          ? 'border-coffee-light bg-coffee-light/10'
                          : 'border-gray-300'
                      }`}
                    >
                      <FaCreditCard className="text-2xl mb-2 text-coffee-dark" />
                      <span className="text-sm">Cartão de Crédito</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('debit')}
                      className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                        paymentMethod === 'debit'
                          ? 'border-coffee-light bg-coffee-light/10'
                          : 'border-gray-300'
                      }`}
                    >
                      <FaCreditCard className="text-2xl mb-2 text-coffee-dark" />
                      <span className="text-sm">Cartão de Débito</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('boleto')}
                      className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                        paymentMethod === 'boleto'
                          ? 'border-coffee-light bg-coffee-light/10'
                          : 'border-gray-300'
                      }`}
                    >
                      <FaBarcode className="text-2xl mb-2 text-coffee-dark" />
                      <span className="text-sm">Boleto</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-4 border rounded-lg flex flex-col items-center justify-center transition-colors ${
                        paymentMethod === 'pix'
                          ? 'border-coffee-light bg-coffee-light/10'
                          : 'border-gray-300'
                      }`}
                    >
                      <FaMoneyBill className="text-2xl mb-2 text-coffee-dark" />
                      <span className="text-sm">PIX</span>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'credit' && (
                  <div className="space-y-6 border-t pt-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Número do Cartão</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Nome no Cartão</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Validade</label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="MM/AA"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cardCvv"
                          value={formData.cardCvv}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coffee-light focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-coffee-dark text-white py-4 rounded-lg hover:bg-coffee-light transition-colors font-bold text-lg"
                >
                  Finalizar Pedido
                </button>
              </form>
            </motion.div>

            {/* Order Summary */}
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
          </div>
        </div>
      </section>
    </main>
  );
} 