'use client';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import HeroSection from '@/components/checkout/HeroSection';
import FormSection from '@/components/checkout/FormSection';
import OrderSummary from '@/components/checkout/OrderSummary';

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
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FormSection
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
            <OrderSummary items={items} total={total} />
          </div>
        </div>
      </section>
    </main>
  );
}