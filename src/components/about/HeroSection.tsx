import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Sobre Nós"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50 h-60"
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Sobre Nós
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl"
        >
          Conheça a história por trás de cada xícara
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
