import React from 'react';
import { motion } from 'framer-motion';
import { FaCreditCard, FaBarcode, FaMoneyBill } from 'react-icons/fa';

interface FormSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    cardNumber: string;
    cardName: string;
    cardExpiry: string;
    cardCvv: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
}

const FormSection: React.FC<FormSectionProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  paymentMethod,
  setPaymentMethod
}) => {
  return (
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
  );
};

export default FormSection;
