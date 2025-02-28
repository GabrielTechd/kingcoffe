export const products = [
  {
    id: 1,
    name: 'Café Especial Premium',
    description: 'Blend exclusivo de grãos selecionados, torrados artesanalmente para um sabor único e marcante. Notas de chocolate amargo, caramelo e um toque sutil de frutas vermelhas.',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Blend de grãos da América do Sul',
      roast: 'Média',
      intensity: '8/10',
      notes: ['Chocolate amargo', 'Caramelo', 'Frutas vermelhas'],
      weight: '250g'
    }
  },
  {
    id: 2,
    name: 'Café Gourmet Intenso',
    description: 'Grãos 100% arábica com notas de chocolate e caramelo, ideal para momentos especiais. Torra escura que realça o sabor intenso e encorpado.',
    price: 44.90,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Sul de Minas Gerais',
      roast: 'Escura',
      intensity: '9/10',
      notes: ['Chocolate', 'Caramelo', 'Nozes'],
      weight: '250g'
    }
  },
  {
    id: 3,
    name: 'Café Orgânico Natural',
    description: 'Produzido de forma sustentável, com sabor suave e aroma envolvente. Certificação orgânica e comércio justo garantidos.',
    price: 54.90,
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Grãos',
    details: {
      origin: 'Chapada Diamantina - Bahia',
      roast: 'Média-clara',
      intensity: '6/10',
      notes: ['Mel', 'Frutas cítricas', 'Flores'],
      weight: '250g'
    }
  },
  {
    id: 4,
    name: 'Café Moído Tradicional',
    description: 'Blend tradicional, moído na hora para preservar todo o sabor. Perfeito para o dia a dia, com sabor equilibrado e marcante.',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Moído',
    details: {
      origin: 'Blend Brasil',
      roast: 'Média',
      intensity: '7/10',
      notes: ['Chocolate ao leite', 'Amendoim', 'Caramelo'],
      weight: '250g'
    }
  },
  {
    id: 5,
    name: 'Café em Cápsulas Premium',
    description: 'Cápsulas compatíveis com Nespresso®, sabor premium. Praticidade sem abrir mão da qualidade.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    category: 'Cápsulas',
    details: {
      origin: 'Blend Premium',
      intensity: '8/10',
      notes: ['Chocolate', 'Cereais', 'Especiarias'],
      compatibility: 'Nespresso®',
      units: '10 cápsulas'
    }
  },
  {
    id: 6,
    name: 'Kit Degustação',
    description: 'Kit com 3 tipos diferentes de café para você descobrir seu favorito. Inclui nossos blends mais populares.',
    price: 89.90,
    image: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'Kits',
    details: {
      contents: ['Café Especial Premium 250g', 'Café Gourmet Intenso 250g', 'Café Orgânico Natural 250g'],
      totalWeight: '750g'
    }
  },
  {
    id: 7,
    name: 'Café Cold Brew',
    description: 'Café extraído a frio por 12 horas, resultando em uma bebida suave e refrescante. Perfeito para os dias quentes.',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    category: 'Especiais',
    details: {
      process: 'Extração a frio por 12 horas',
      intensity: '5/10',
      notes: ['Chocolate', 'Frutas', 'Caramelo'],
      volume: '1L'
    }
  },
  {
    id: 8,
    name: 'Café Descafeinado Premium',
    description: 'Todo o sabor do café sem a cafeína. Processo natural de descafeinação que preserva o sabor original.',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    category: 'Especiais',
    details: {
      process: 'Descafeinação natural',
      roast: 'Média',
      notes: ['Nozes', 'Cacau', 'Cereais'],
      weight: '250g'
    }
  }
];
