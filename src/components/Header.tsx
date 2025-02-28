"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-color bg-opacity-95 shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={80} // Defina a largura da imagem
                height={86} // Defina a altura da imagem
                priority // Opcional: carrega a imagem de forma otimizada
              />
              <span className="text-white text-xl font-bold">King Coffee</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="nav-link">
                Início
              </Link>
              <Link href="/lojas" className="nav-link">
                Lojas
              </Link>
              <Link href="/produtos" className="nav-link">
                Produtos
              </Link>
              <Link href="/nossa-historia" className="nav-link">
                Nossa história
              </Link>
              <Link href="/sobre-nos" className="nav-link">
                Sobre nós
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-coffee-light transition-colors relative"
                onClick={toggleCart}
              >
                <FaShoppingCart size={24} />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-color text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
              <button
                className="md:hidden text-white hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 bg-primary-color md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
              <Link
                href="/"
                className="text-2xl hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/lojas"
                className="text-2xl hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lojas
              </Link>
              <Link
                href="/produtos"
                className="text-2xl hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Produtos
              </Link>
              <Link
                href="/nossa-historia"
                className="text-2xl hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nossa história
              </Link>
              <Link
                href="/sobre-nos"
                className="text-2xl hover:text-coffee-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre nós
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
