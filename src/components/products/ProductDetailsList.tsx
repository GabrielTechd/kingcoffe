import React from 'react';
import { ProductDetails } from '@/types/Product';

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

const ProductDetailsList: React.FC<{ details: ProductDetails }> = ({ details }) => {
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
};

export default ProductDetailsList;
