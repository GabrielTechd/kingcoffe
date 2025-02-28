import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SliderButton: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
  const handleClick = () => {
    const container = document.getElementById('products-slider');
    if (container) {
      container.scrollLeft += direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 z-10 bg-coffee-dark text-white p-3 rounded-full shadow-lg hover:bg-coffee-light transition-colors`}
    >
      {direction === 'left' ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
    </button>
  );
};

export default SliderButton;
