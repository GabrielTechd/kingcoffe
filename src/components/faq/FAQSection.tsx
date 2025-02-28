import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqSections: { [key: string]: FAQItem[] };
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqSections }) => {
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
  );
};

export default FAQSection;
