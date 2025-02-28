import React from 'react';
import { motion } from 'framer-motion';

const JoinUsCTA: React.FC = () => {
  return (
    <section className="py-16 bg-coffee-dark text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8">
            Estamos sempre em busca de pessoas apaixonadas por café e excelência
          </p>
          <button className="button-primary">
            Trabalhe Conosco
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUsCTA;
