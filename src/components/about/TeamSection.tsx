import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const TeamSection: React.FC<{ team: TeamMember[] }> = ({ team }) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-coffee-dark mb-12">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-96">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-coffee-dark mb-1">
                  {member.name}
                </h3>
                <p className="text-coffee-light font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
