'use client'; // Necesario para AnimatePresence y usePathname

import type { Metadata } from "next"; // Metadata puede seguir usándose en Client Components
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from "react"; // Importar React

const inter = Inter({ subsets: ["latin"] });

// Metadata no se puede exportar directamente desde un client component de esta forma.
// Se debe manejar de forma diferente si es necesario, o mantener layout.tsx como server component
// y crear un componente hijo 'use client' para las animaciones.
// Por simplicidad ahora, comentaré la exportación de metadata y la pondré como un objeto.
// Para una solución más robusta, se podría usar la función generateMetadata.
/*
export const metadata: Metadata = {
  title: "Portafolio de Jonathan Serafín",
  description: "Portafolio profesional de Jonathan Serafín Contreras Malfavón, Desarrollador Full-Stack.",
};
*/
// Si se necesita metadata dinámica, se debe usar generateMetadata en un layout.js/ts (server component)
// o pasarla como props si este layout fuera un server component que importa un client component.
// Por ahora, para que funcione 'use client', la metadata estática se puede definir en el Head directamente o no usarla aquí.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Definir metadata aquí si es estática y se usa 'use client'
  // O usar el tag <Head> de next/head dentro del return si es necesario
  // O, idealmente, separar la lógica de 'use client' a un componente hijo.

  return (
    <html lang="es">
      <head> 
        {/* Metadatos básicos si no se usa la exportación `metadata` */}
        <title>Portafolio de Jonathan Serafín</title>
        <meta name="description" content="Portafolio profesional de Jonathan Serafín Contreras Malfavón, Desarrollador Full-Stack." />
      </head>
      <body className={`${inter.className} bg-gray-100`}> {/* Añadido un bg general */}
        <Navbar />
        <AnimatePresence mode="wait"> {/* mode="wait" asegura que la animación de salida termine antes de la de entrada */}
          <motion.main
            key={pathname} // Clave única para cada ruta, fuerza la re-animación
            className="pt-20" // Padding para el navbar fijo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
