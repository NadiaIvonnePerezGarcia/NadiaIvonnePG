'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowRight, FaMapMarkerAlt, FaMobileAlt, FaCloud, FaPalette } from 'react-icons/fa';

export default function HomePage() {
  const services = [
    { icon: <FaPalette />, title: "UI/UX Design", desc: "Interfaces modernas y accesibles" },
    { icon: <FaMobileAlt />, title: "Desarrollo Móvil", desc: "Flutter & React Native" },
    { icon: <FaCloud />, title: "Cloud & Web", desc: "Vue.js, Next.js, Hostinger" },
  ];

  return (
    <section className="min-h-screen px-6 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="text-pink-400 text-sm uppercase tracking-[0.3em] mb-4 font-medium flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-8 h-px bg-pink-500"></span>
              Disponible para reubicación
            </motion.p>

            <motion.h1
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-3xl sm:text-4xl text-neutral-400 block mb-2">Hola, soy</span>
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Nadia Ivonne
              </span>
              <span
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white block"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Pérez García
              </span>
            </motion.h1>

            <motion.div
              className="flex items-center gap-3 my-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-lg text-white font-medium">
                Ingeniera en Sistemas Computacionales
              </span>
            </motion.div>

            <motion.p
              className="text-neutral-400 text-base lg:text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-pink-400 font-medium">Especialidad en Tecnologías en la Nube</span>.
              Perfil versátil con experiencia en todo el ciclo de desarrollo: desde diseño UI/UX hasta
              desarrollo frontend/móvil con <span className="text-white">Vue.js, React Native, Flutter</span> e
              implementación de backend con <span className="text-white">Java y Python</span>.
            </motion.p>

            <motion.p
              className="text-neutral-500 text-sm mb-8 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <FaMapMarkerAlt className="text-pink-500" />
              Guadalajara, Jalisco - Tlaquepaque
            </motion.p>

            {/* Services Mini Cards */}
            <motion.div
              className="grid grid-cols-3 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {services.map((service, i) => (
                <div key={i} className="p-3 bg-neutral-900/50 border border-neutral-800 rounded-xl text-center hover:border-pink-500/30 transition-colors">
                  <div className="text-pink-400 text-xl mb-2">{service.icon}</div>
                  <p className="text-white text-xs font-medium mb-1">{service.title}</p>
                  <p className="text-neutral-500 text-[10px]">{service.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <Link href="/projects" className="btn-primary flex items-center gap-2 group">
                Ver Proyectos
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contáctame
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="https://www.linkedin.com/in/nadia-perez-381967351"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:border-pink-500 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://github.com/NadiaPerezGarcia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:border-pink-500 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:iscnadiaivonne@gmail.com"
                className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-pink-400 hover:border-pink-500 transition-all"
                aria-label="Email"
              >
                <FaEnvelope size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-transparent blur-2xl"></div>

              {/* Animated Ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border border-pink-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full glow-accent-sm"></div>
              </motion.div>

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-accent-ring">
                <Image
                  src="/images/projects/perfil.jpg"
                  alt="Nadia Pérez"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-4 gap-6 mt-12 pt-10 border-t border-neutral-800/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>4+</p>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">Proyectos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>2+</p>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">Años Exp.</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>B2</p>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">Inglés</p>
          </div>
          <div className="text-center">
            <p className="text-3xl lg:text-4xl font-bold text-gradient mb-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>TecNM</p>
            <p className="text-neutral-500 text-xs uppercase tracking-wider">IT Morelia</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
