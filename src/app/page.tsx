'use client';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { FaCoffee, FaLeaf, FaMugHot, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { products } from './produtos/page';
import Link from 'next/link';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Features Section */}
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

      {/* Nossa História Section */}
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

      {/* Da Roça até seu Copo Section */}
      <section id="da-roca" className="py-20 bg-coffee-dark text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="section-title text-white text-left">Da roça até seu copo</h2>
              <p className="text-lg mb-6">
                Cada grão conta uma história. Do cultivo cuidadoso nas montanhas 
                até a torra artesanal em nossa cafeteria, garantimos qualidade em 
                cada etapa para entregar o melhor café em sua xícara.
              </p>
              <a href="#saiba-mais" className="button-primary inline-block">
                Saiba mais
              </a>
            </div>
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80"
                alt="Da roça até seu copo"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Produtos Section */}
      <section id="produtos" className="py-20 bg-background-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="section-title">Nossos Produtos</h2>
            <p className="text-lg text-gray-700">Descubra nossos cafés especiais</p>
          </motion.div>

          <div className="relative">
            <button 
              onClick={() => {
                const container = document.getElementById('products-slider');
                if (container) {
                  container.scrollLeft -= container.offsetWidth;
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-coffee-dark text-white p-3 rounded-full shadow-lg hover:bg-coffee-light transition-colors"
            >
              <FaChevronLeft size={24} />
            </button>

            <button 
              onClick={() => {
                const container = document.getElementById('products-slider');
                if (container) {
                  container.scrollLeft += container.offsetWidth;
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-coffee-dark text-white p-3 rounded-full shadow-lg hover:bg-coffee-light transition-colors"
            >
              <FaChevronRight size={24} />
            </button>

            <div 
              id="products-slider"
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ 
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="min-w-[300px] md:min-w-[400px] p-4 snap-center"
                >
                  <Link href={`/produtos/${product.id}`} className="block">
                    <div className="card group h-full">
                      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="group-hover:scale-105 transition-transform duration-500"
                          priority
                        />
                      </div>
                      <h3 className="text-xl font-bold text-coffee-dark mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <span className="text-2xl font-bold text-coffee-dark">
                          R$ {product.price.toFixed(2)}
                        </span>
                        <span className="button-primary">
                          Ver Detalhes
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
