import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const MissionSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <FaCoffee className="text-5xl text-coffee-light mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark mb-6">
            Nossa Missão
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Na King Coffee, nossa missão é proporcionar momentos únicos através 
            do café de alta qualidade. Buscamos não apenas servir bebidas, mas 
            criar experiências memoráveis que conectam pessoas e celebram a rica 
            cultura do café brasileiro.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
