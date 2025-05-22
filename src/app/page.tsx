'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importar Image de next/image

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <motion.div 
        className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left p-8 max-w-4xl mx-auto gap-8 md:gap-12"
      >
        {/* Contenedor para la imagen */}
        <motion.div
          variants={itemVariants}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-primary-light flex items-center justify-center shadow-2xl border-4 border-white relative"
        >
          <Image 
            src="/images/projects/perfil.jpg" 
            alt="Nadia Pérez" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full" // Asegura que la imagen también sea redonda si es cuadrada
          />
        </motion.div>

        {/* Contenedor para el texto */}
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
            variants={itemVariants}
          >
            Nadia Pérez
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-2"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
            variants={itemVariants}
          >
            Estudiante de Ingeniería en Sistemas Computacionales
          </motion.p>

          <motion.p 
            className="text-md sm:text-lg md:text-xl text-gray-200 mb-8"
            style={{ textShadow: '0 1px 3px rgba(0,0,0,0.4)' }}
            variants={itemVariants}
          >
            Especialidad en Tecnologías en la Nube – 8° semestre
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className="inline-block bg-primary-dark hover:bg-accent text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-75"
            >
              Ver Mis Proyectos
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
            >
              Contacto
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
