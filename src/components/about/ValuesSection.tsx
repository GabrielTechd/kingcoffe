import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-color text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaCoffee className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Qualidade</h3>
            <p>Excelência em cada grão e em cada xícara.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaLeaf className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
            <p>Compromisso com o meio ambiente e produção responsável.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaUsers className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Comunidade</h3>
            <p>Valorizamos as pessoas e as relações que construímos.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaHandshake className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Transparência</h3>
            <p>Honestidade e clareza em todas as nossas ações.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
