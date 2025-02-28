import StoreCard from "@/components/store/StoreCard";

const stores = [
  {
    id: 1,
    name: "King Coffee Jardins",
    city: "São Paulo",
    address: "Rua Oscar Freire, 1234 - Jardins",
    phone: "(11) 3456-7890",
    hours: "Seg-Sáb: 8h às 22h | Dom: 9h às 20h",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
    description:
      "Nossa primeira unidade, localizada no coração dos Jardins, oferece um ambiente sofisticado e acolhedor.",
  },
  {
    id: 2,
    name: "King Coffee Ipanema",
    city: "Rio de Janeiro",
    address: "Rua Visconde de Pirajá, 567 - Ipanema",
    phone: "(21) 3456-7890",
    hours: "Seg-Dom: 8h às 23h",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description:
      "Com vista para a praia, nossa unidade carioca é o lugar perfeito para apreciar um café especial.",
  },
  {
    id: 3,
    name: "King Coffee Savassi",
    city: "Belo Horizonte",
    address: "Rua Pium-í, 789 - Savassi",
    phone: "(31) 3456-7890",
    hours: "Seg-Sáb: 9h às 21h | Dom: 9h às 19h",
    image:
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
    description:
      "No coração da Savassi, nossa cafeteria une o charme mineiro com a qualidade King Coffee.",
  },
];

const StoresSection = () => (
  <section className="py-20 bg-background-light">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-12">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  </section>
);

export default StoresSection;
