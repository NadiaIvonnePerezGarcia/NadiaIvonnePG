'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaGlobe, FaArrowRight } from 'react-icons/fa';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "iscnadiaivonne@gmail.com",
      href: "mailto:iscnadiaivonne@gmail.com"
    },
    {
      icon: <FaPhone size={20} />,
      label: "Teléfono",
      value: "417 104 9978",
      href: "tel:4171049978"
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: "Ubicación",
      value: "Guadalajara, Jalisco - Tlaquepaque",
      href: "#"
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      handle: "@nadia-perez",
      href: "https://www.linkedin.com/in/nadia-perez-381967351",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      handle: "@NadiaPerezGarcia",
      href: "https://github.com/NadiaPerezGarcia",
      color: "from-neutral-600 to-neutral-800"
    },
    {
      icon: <FaGlobe size={24} />,
      label: "Portfolio",
      handle: "nadia-ivonne-pg.vercel.app",
      href: "https://nadia-ivonne-pg.vercel.app",
      color: "from-pink-600 to-pink-700"
    },
  ];

  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-pink-400 text-sm uppercase tracking-[0.3em] mb-4">✦ Contacto</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            <span className="text-white">Trabajemos </span>
            <span className="text-gradient">Juntos</span>
          </h1>
          <p className="text-neutral-400 max-w-lg mx-auto">
            Disponible para reubicación inmediata. ¡Me encantaría escuchar sobre tu proyecto!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group p-6 bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl text-center hover:border-pink-500/30 transition-all hover:shadow-lg hover:shadow-pink-500/5"
            >
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center mx-auto mb-4 text-pink-400 group-hover:bg-pink-500/30 transition-colors">
                {item.icon}
              </div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="grid sm:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`group p-6 bg-gradient-to-br ${social.color} rounded-2xl text-center hover:scale-105 transition-all shadow-lg`}
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 text-white">
                {social.icon}
              </div>
              <p className="text-white font-semibold mb-1">{social.label}</p>
              <p className="text-white/70 text-sm truncate">{social.handle}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="relative bg-gradient-to-br from-pink-600/20 via-pink-600/10 to-transparent border border-pink-500/30 rounded-3xl p-8 lg:p-12 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>

          <div className="relative">
            <h2
              className="text-2xl lg:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              ¿Listo para comenzar?
            </h2>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              Estoy buscando nuevas oportunidades para contribuir en proyectos innovadores de desarrollo web, móvil y cloud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:iscnadiaivonne@gmail.com"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Enviar Email
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/nadia-perez-381967351"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FaLinkedin size={16} />
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
