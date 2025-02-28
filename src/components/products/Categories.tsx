import React from 'react';

interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <section className="py-8 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-coffee-dark text-white'
                  : 'bg-white text-coffee-dark hover:bg-coffee-light hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
