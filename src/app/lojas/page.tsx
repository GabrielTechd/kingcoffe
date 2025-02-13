'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { FaStar, FaCoffee, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const stores = [
  {
    id: 1,
    name: 'King Coffee Jardins',
    city: 'São Paulo',
    address: 'Rua Oscar Freire, 1234 - Jardins',
    phone: '(11) 3456-7890',
    hours: 'Seg-Sáb: 8h às 22h | Dom: 9h às 20h',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80',
    description: 'Nossa primeira unidade, localizada no coração dos Jardins, oferece um ambiente sofisticado e acolhedor.'
  },
  {
    id: 2,
    name: 'King Coffee Ipanema',
    city: 'Rio de Janeiro',
    address: 'Rua Visconde de Pirajá, 567 - Ipanema',
    phone: '(21) 3456-7890',
    hours: 'Seg-Dom: 8h às 23h',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    description: 'Com vista para a praia, nossa unidade carioca é o lugar perfeito para apreciar um café especial.'
  },
  {
    id: 3,
    name: 'King Coffee Savassi',
    city: 'Belo Horizonte',
    address: 'Rua Pium-í, 789 - Savassi',
    phone: '(31) 3456-7890',
    hours: 'Seg-Sáb: 9h às 21h | Dom: 9h às 19h',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    description: 'No coração da Savassi, nossa cafeteria une o charme mineiro com a qualidade King Coffee.'
  }
];

const qualityStandards = [
  {
    title: 'Seleção Premium',
    description: 'Apenas os melhores grãos são selecionados para nossas lojas.',
    icon: <FaStar className="text-4xl text-coffee-light" />
  },
  {
    title: 'Preparo Artesanal',
    description: 'Baristas altamente treinados para extrair o melhor de cada grão.',
    icon: <FaCoffee className="text-4xl text-coffee-light" />
  },
  {
    title: 'Ambiente Acolhedor',
    description: 'Espaços cuidadosamente projetados para sua comodidade.',
    icon: <FaMapMarkerAlt className="text-4xl text-coffee-light" />
  }
];

export default function Stores() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Nossas Lojas"
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
            Nossas Lojas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Encontre a King Coffee mais próxima de você
          </motion.p>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-20 bg-primary-color text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nossos Padrões de Qualidade
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 glass-effect rounded-lg"
              >
                <div className="mb-4">{standard.icon}</div>
                <h3 className="text-xl font-bold mb-2">{standard.title}</h3>
                <p>{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {stores.map((store, index) => (
              <motion.div
                key={store.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
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
            <h2 className="text-4xl font-bold mb-6">Venha nos Visitar</h2>
            <p className="text-xl mb-8">
              Descubra o prazer de um café especial em qualquer uma de nossas unidades.
              Cada visita é uma nova experiência.
            </p>
            <button className="button-primary">
              Encontrar Loja mais Próxima
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 