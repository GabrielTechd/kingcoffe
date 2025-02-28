import { motion } from 'framer-motion';

const CtaSection = () => (
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
);

export default CtaSection;
