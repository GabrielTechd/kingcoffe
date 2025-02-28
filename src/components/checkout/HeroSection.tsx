import React from 'react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
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
  );
};

export default HeroSection;
