import React from 'react';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-background-light">
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
            Nossa Paixão pelo Café
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A King Coffee nasceu de um sonho e uma paixão pelo café de qualidade. 
            Nossa jornada começou em 2010, quando abrimos nossa primeira cafeteria 
            com o objetivo de proporcionar uma experiência única aos amantes de café.
            Desde então, temos crescido mantendo sempre nosso compromisso com a 
            qualidade e a sustentabilidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
