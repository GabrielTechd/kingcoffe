import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

const TimelineSection: React.FC<{ milestones: Milestone[] }> = ({ milestones }) => {
  return (
    <section className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-coffee-dark mb-16">
          Nossa Linha do Tempo
        </h2>
        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:rtl' : ''
              }`}
            >
              <div className={`relative h-[400px] rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}>
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className={index % 2 === 1 ? 'md:order-1 md:text-right' : ''}>
                <span className="text-6xl font-bold text-coffee-light opacity-30">
                  {milestone.year}
                </span>
                <h3 className="text-2xl font-bold text-coffee-dark mb-4">
                  {milestone.title}
                </h3>
                <p className="text-lg text-gray-700">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
