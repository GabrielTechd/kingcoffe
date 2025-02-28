import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Nossa História"
        fill
        style={{ objectFit: 'cover' }}
        className="brightness-50"
      />
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Nossa História
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl"
        >
          Uma jornada de paixão pelo café
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
