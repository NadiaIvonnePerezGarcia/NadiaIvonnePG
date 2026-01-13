'use client';

import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: '--font-dancing',
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} ${dancingScript.variable}`}>
      <head>
        <title>Nadia Ivonne Pérez | Full Stack & Cloud Developer</title>
        <meta name="description" content="Portafolio profesional de Nadia Ivonne Pérez, Ingeniera en Sistemas Computacionales especializada en Desarrollo Web, Móvil y Soluciones en la Nube." />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen antialiased`}>
        {/* Background Effects */}
        <div className="fixed inset-0 bg-radial-glow pointer-events-none z-0"></div>
        <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-50"></div>

        <Navbar />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            className="relative z-10 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </body>
    </html>
  );
}
