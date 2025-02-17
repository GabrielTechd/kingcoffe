import { motion } from 'framer-motion';
import { FaStar, FaCoffee, FaMapMarkerAlt } from 'react-icons/fa';

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

const QualityStandardsSection = () => (
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
);

export default QualityStandardsSection;
