import { motion } from 'framer-motion';

import Image from 'next/image';

const HeroSection = () => (
  <section className="relative h-[60vh] flex items-center justify-center">
    <Image
      src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="Nossas Lojas"
      layout="fill"
      objectFit="cover"
      className="brightness-50"
    />
    <div className="relative z-10 text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Nossas Lojas
      </motion.h1>
      {/* Tente usando motion.div ao invés de motion.p */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl"
      >
        Encontre a King Coffee mais próxima de você
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
