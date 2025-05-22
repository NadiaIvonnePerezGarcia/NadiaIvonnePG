'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Mí", href: "/about" },
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
];

export default function Navbar() {
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const navContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.4
        }
    }
  };

  return (
    <motion.nav 
      className="bg-primary-dark text-white p-4 shadow-lg fixed top-0 left-0 right-0 z-50"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="container mx-auto flex justify-between items-center"
        variants={navContainerVariants}
      >
        <motion.div variants={navItemVariants}>
          <Link href="/" className="text-xl font-bold hover:text-primary-light transition-colors">
            Nadia Pérez
          </Link>
        </motion.div>

        <motion.div className="space-x-1 md:space-x-4" variants={navContainerVariants}>
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={navItemVariants} className="inline-block">
              <Link
                href={link.href}
                className="hover:text-primary-light transition-colors px-2 py-2 md:px-3 rounded-md text-xs md:text-sm font-medium hover:bg-primary/10"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
