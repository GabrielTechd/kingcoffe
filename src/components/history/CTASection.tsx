import React from 'react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-coffee-dark text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8">
            Venha conhecer nossas lojas e fazer parte dessa história de amor pelo café.
          </p>
          <a href="/lojas" className="button-primary">
            Encontrar Loja mais Próxima
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
