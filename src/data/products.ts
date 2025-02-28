export const products = [
  {
    id: 1,
    name: "Café em Grãos",
    description: "Café em grãos de alta qualidade.",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Grãos",
    details: {
      origin: "Brasil",
      roast: "Médio",
      intensity: "Forte",
      notes: ["Chocolate", "Nozes"],
      weight: "500g",
    },
  },
  {
    id: 2,
    name: "Café Moído",
    description: "Café moído fresco.",
    price: 20.00,
    image: "https://images.unsplash.com/photo-1583675655650-14f3b111164d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Moído",
    details: {
      origin: "Colômbia",
      roast: "Claro",
      intensity: "Médio",
      notes: ["Frutas", "Caramelo"],
      weight: "250g",
    },
  },
  {
    id: 3,
    name: "Cápsulas de Café",
    description: "Cápsulas compatíveis com Nespresso.",
    price: 30.00,
    image: "https://images.unsplash.com/photo-1611690464674-eb7c9c0dcc78?q=80&w=2648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Cápsulas",
    details: {
      origin: "Etiópia",
      roast: "Escuro",
      intensity: "Forte",
      notes: ["Frutas Vermelhas", "Especiarias"],
      weight: "10 cápsulas",
      compatibility: "Nespresso",
    },
  },
  {
    id: 4,
    name: 'Café Moído Tradicional',
    description: 'Blend tradicional, moído na hora para preservar todo o sabor. Perfeito para o dia a dia, com sabor equilibrado e marcante.',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1606509036992-4399d5c5afe4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Especiais',
    details: {
      process: 'Descafeinação natural',
      roast: 'Média',
      notes: ['Nozes', 'Cacau', 'Cereais'],
      weight: '250g'
    }
  }
];
