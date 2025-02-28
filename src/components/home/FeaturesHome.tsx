import React from 'react';
import { FaCoffee, FaLeaf, FaMugHot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
    return (
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
                        <FaCoffee className="text-4xl mx-auto mb-4 text-coffee-light" />
                        <h3 className="text-xl font-bold mb-2">Grãos Selecionados</h3>
                        <p>Selecionamos apenas os melhores grãos para nosso café.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-center p-6 glass-effect rounded-lg"
                    >
                        <FaLeaf className="text-4xl mx-auto mb-4 text-coffee-light" />
                        <h3 className="text-xl font-bold mb-2">Produção Sustentável</h3>
                        <p>Comprometidos com o meio ambiente e qualidade.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-center p-6 glass-effect rounded-lg"
                    >
                        <FaMugHot className="text-4xl mx-auto mb-4 text-coffee-light" />
                        <h3 className="text-xl font-bold mb-2">Preparo Artesanal</h3>
                        <p>Cada xícara preparada com dedicação e expertise.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;