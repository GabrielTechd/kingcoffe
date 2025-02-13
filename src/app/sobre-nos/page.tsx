'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { FaCoffee, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';

export default function AboutUs() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const team = [
    {
      name: 'João Silva',
      role: 'Fundador & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      description: 'Apaixonado por café há mais de 20 anos, João fundou a King Coffee com o sonho de compartilhar café de qualidade.'
    },
    {
      name: 'Maria Santos',
      role: 'Mestre de Torra',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
      description: 'Com certificação Q-Grader, Maria é responsável por desenvolver nossos blends exclusivos.'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Diretor de Operações',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Pedro garante que cada xícara de café mantenha nossa qualidade em todas as unidades.'
    }
  ];

  return (
    <main className="min-h-screen bg-background-light">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Sobre Nós"
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

      {/* Mission Section */}
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

      {/* Values Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaCoffee className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p>Excelência em cada grão e em cada xícara.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaLeaf className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
              <p>Compromisso com o meio ambiente e produção responsável.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaUsers className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Comunidade</h3>
              <p>Valorizamos as pessoas e as relações que construímos.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaHandshake className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Transparência</h3>
              <p>Honestidade e clareza em todas as nossas ações.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                <div className="relative h-64">
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

      {/* Join Us CTA */}
      <section className="py-16 bg-coffee-dark text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
            <p className="text-xl mb-8">
              Estamos sempre em busca de pessoas apaixonadas por café e excelência
            </p>
            <button className="button-primary">
              Trabalhe Conosco
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 