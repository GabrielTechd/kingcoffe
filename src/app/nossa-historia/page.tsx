'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { FaCoffee, FaHistory, FaUsers, FaAward } from 'react-icons/fa';

export default function OurHistory() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const milestones = [
    {
      year: '2010',
      title: 'O Início',
      description: 'Começamos como uma pequena cafeteria no coração de São Paulo, com um sonho de servir o melhor café.',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    },
    {
      year: '2015',
      title: 'Expansão',
      description: 'Abrimos nossa segunda unidade no Rio de Janeiro e começamos a torrar nossos próprios grãos.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      year: '2018',
      title: 'Reconhecimento',
      description: 'Recebemos o prêmio de Melhor Café do Brasil e expandimos para mais 5 cidades.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80'
    },
    {
      year: '2020',
      title: 'Inovação',
      description: 'Lançamos nossa linha de produtos para consumo em casa e nosso e-commerce.',
      image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80"
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

      {/* Intro Section */}
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

      {/* Values Section */}
      <section className="py-16 bg-primary-color text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaHistory className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Tradição</h3>
              <p>Respeitando as origens e tradições do café.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaUsers className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Comunidade</h3>
              <p>Construindo relacionamentos duradouros.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center p-6 glass-effect rounded-lg"
            >
              <FaAward className="text-4xl mx-auto mb-4 text-coffee-light" />
              <h3 className="text-xl font-bold mb-2">Excelência</h3>
              <p>Buscando sempre a melhor qualidade.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-coffee-dark text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
            <p className="text-xl mb-8">
              Venha conhecer nossas lojas e fazer parte dessa história de amor pelo café.
            </p>
            <a href="/lojas" className="button-primary">
              Encontrar Loja mais Próxima
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 