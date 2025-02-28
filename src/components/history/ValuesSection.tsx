import React from 'react';
import { motion } from 'framer-motion';
import { FaHistory, FaUsers, FaAward } from 'react-icons/fa';

const ValuesSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-color text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaHistory className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Tradição</h3>
            <p>Respeitando as origens e tradições do café.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaUsers className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Comunidade</h3>
            <p>Construindo relacionamentos duradouros.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center p-6 glass-effect rounded-lg"
          >
            <FaAward className="text-4xl mx-auto mb-4 text-coffee-light" />
            <h3 className="text-xl font-bold mb-2">Excelência</h3>
            <p>Buscando sempre a melhor qualidade.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
