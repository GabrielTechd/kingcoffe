'use client';
import { FaCoffee } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-color text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCoffee className="text-3xl text-coffee-light" />
              <span className="text-xl font-bold">King Coffee</span>
            </div>
            <p className="text-sm text-gray-300">
              Sua cafeteria artesanal de confiança, trazendo o melhor do café para seu dia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">FAQ</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/faq">Como posso fazer um pedido?</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/faq">Métodos de pagamento</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/faq">Política de devolução</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/faq">Horários de funcionamento</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/">Início</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/nossa-historia">Nossa História</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/sobre-nos">Sobre nós</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/produtos">Produtos</Link>
              </li>
              <li className="hover:text-coffee-light transition-colors">
                <Link href="/lojas">Nossas lojas</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-coffee-light transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-coffee-light transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-coffee-light transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 King Coffee. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
} 