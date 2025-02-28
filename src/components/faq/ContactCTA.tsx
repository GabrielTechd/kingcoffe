import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 bg-coffee-dark text-white text-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl mb-8">
            Nossa equipe está pronta para ajudar você
          </p>
          <button className="button-primary">
            Entre em Contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
