'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    { icon: "✉️", label: "Email", value: "iscnadiaivonne@gmail.com", href: "mailto:iscnadiaivonne@gmail.com" },
    { icon: "📱", label: "Teléfono", value: "417 104 9978", href: "tel:4171049978" },
    { icon: "🌐", label: "GitHub", value: "Nadia Ivonne Perez Garcia", href: "https://github.com/NadiaPerezGarcia" },
    { icon: "🔗", label: "LinkedIn", value: "Nadia Perez", href: "https://www.linkedin.com/in/nadia-perez-381967351" },
  ];

  return (
    <motion.section 
      className="py-16 md:py-24 bg-gradient-to-br from-primary-light/10 to-primary/10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary-dark">
            Contacto
          </h2>
          <p className="text-lg text-gray-600">
            ¿Interesado en colaborar? ¡Me encantaría conectar contigo!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'GitHub' || item.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={item.label === 'GitHub' || item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  className="flex items-center p-4 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <span className="text-3xl mr-4">{item.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="text-lg font-semibold text-primary-dark">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
