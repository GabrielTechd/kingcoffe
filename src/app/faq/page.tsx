'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqSections = {
  'Pedidos': [
    {
      question: 'Como posso fazer um pedido?',
      answer: 'Para fazer um pedido, basta navegar até a seção de produtos, selecionar os itens desejados e adicioná-los ao carrinho. Após finalizar suas escolhas, clique no ícone do carrinho e siga as instruções para completar a compra.'
    },
    {
      question: 'Qual o prazo de entrega?',
      answer: 'O prazo de entrega varia de acordo com sua localização. Após a confirmação do pagamento, o prazo médio é de 3 a 7 dias úteis.'
    }
  ],
  'Pagamento': [
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos cartões de crédito (Visa, Mastercard, American Express), PIX, boleto bancário e transferência bancária.'
    },
    {
      question: 'O pagamento é seguro?',
      answer: 'Sim, utilizamos sistemas de criptografia e proteção de dados para garantir a segurança de todas as transações.'
    }
  ],
  'Devoluções': [
    {
      question: 'Qual é a política de devolução?',
      answer: 'Aceitamos devoluções em até 7 dias após o recebimento do produto, desde que o mesmo esteja em sua embalagem original e não tenha sido aberto. Entre em contato com nosso suporte para iniciar o processo.'
    },
    {
      question: 'Como solicitar uma troca?',
      answer: 'Para solicitar uma troca, entre em contato com nosso atendimento através do e-mail suporte@kingcoffee.com.br ou pelo telefone 0800-123-4567.'
    }
  ],
  'Funcionamento': [
    {
      question: 'Quais são os horários de funcionamento?',
      answer: 'Nossas lojas físicas funcionam de segunda a sábado, das 8h às 20h, e aos domingos das 9h às 18h. Nossa loja online está disponível 24 horas por dia, 7 dias por semana.'
    },
    {
      question: 'Funcionam em feriados?',
      answer: 'Em feriados nacionais, nossas lojas físicas funcionam em horário especial, das 9h às 17h. Consulte cada unidade para confirmar o funcionamento em feriados locais.'
    }
  ]
};

export default function FAQ() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleItem = (itemKey: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  return (
    <main className="min-h-screen bg-background-light">
      
      {/* Hero Section */}
      <section className="bg-primary-color text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Perguntas Frequentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Encontre respostas para suas dúvidas mais comuns
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {Object.entries(faqSections).map(([section, items]) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-coffee-dark text-white"
                >
                  <h2 className="text-xl font-bold">{section}</h2>
                  <FaChevronDown
                    className={`transform transition-transform ${
                      openSections[section] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openSections[section] && (
                  <div className="p-6 space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleItem(`${section}-${index}`)}
                          className="w-full text-left flex justify-between items-center"
                        >
                          <h3 className="text-lg font-semibold text-coffee-dark">
                            {item.question}
                          </h3>
                          <FaChevronDown
                            className={`transform transition-transform text-coffee-light ${
                              openItems[`${section}-${index}`] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {openItems[`${section}-${index}`] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-2 text-gray-600"
                          >
                            {item.answer}
                          </motion.p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-coffee-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
          <p className="text-xl mb-8">
            Nossa equipe está pronta para ajudar você
          </p>
          <button className="button-primary">
            Entre em Contato
          </button>
        </div>
      </section>
    </main>
  );
}