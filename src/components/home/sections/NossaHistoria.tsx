import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const NossaHistoria: React.FC = () => {
  return (
    <section id="nossa-historia" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              alt="Nossa História"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h2 className="section-title text-left">Nossa História</h2>
            <p className="text-lg mb-6 text-gray-700">
              Desde 2010, a King Coffee tem se dedicado a oferecer a melhor experiência em café. 
              Nossa jornada começou com uma simples paixão por café de qualidade e cresceu para 
              se tornar referência em excelência e sabor.
            </p>
            <a href="/nossa-historia" className="button-primary inline-block">
              Conheça nossa história
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NossaHistoria;
