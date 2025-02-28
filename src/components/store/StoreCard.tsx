import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';
import { StoreProps } from '@/types/Store';

const StoreCard = ({ store }: StoreProps) => (
  <motion.div
    key={store.id}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-lg overflow-hidden shadow-lg"
  >
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative h-[300px] md:h-full">
        <Image
          src={store.image}
          alt={store.name}
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-coffee-dark mb-2">{store.name}</h3>
        <p className="text-lg text-gray-600 mb-6">{store.description}</p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-coffee-light" />
            <span>{store.address}</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-coffee-light" />
            <span>{store.phone}</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaClock className="text-coffee-light" />
            <span>{store.hours}</span>
          </div>
        </div>
        <button className="button-primary mt-6">
          Como Chegar
        </button>
      </div>
    </div>
  </motion.div>
);

export default StoreCard;