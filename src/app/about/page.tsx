'use client';

import SkillsSection from '@/components/SkillsSection';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt, FaBriefcase, FaGraduationCap, FaRobot, FaMobileAlt, FaCode, FaStore } from 'react-icons/fa';

const experienceData = [
  {
    id: 1,
    icon: <FaRobot />,
    role: "Líder de Desarrollo e Integración",
    project: "Proyecto AlzIA",
    company: "Smart Health Solutions",
    location: "Orizaba, Ver. (Remoto)",
    period: "Ago 2024 - Dic 2025",
    highlight: "IA Conversacional",
    description: [
      "App para detección de deterioro cognitivo leve mediante un agente de IA conversacional en vivo.",
      "Análisis de biomarcadores lingüísticos para la detección temprana usando Whisper (voz a texto) y un LLM.",
      "Integración técnica entre app móvil (React Native) y backend de microservicios en Java Spring Boot.",
      "Visualización de datos médicos complejos bajo el estándar HL7 FHIR.",
      "Diseño de interfaces accesibles para adultos mayores usando metodología Lean Healthcare."
    ],
    technologies: ["React Native", "Java Spring Boot", "Whisper", "LLM", "HL7 FHIR", "Figma"]
  },
  {
    id: 2,
    icon: <FaCode />,
    role: "Desarrolladora Web Full Stack",
    project: "InmoBlock",
    company: "PropTech (Freelance)",
    location: "Remoto",
    period: "2024",
    website: "www.inmoblock.com",
    highlight: "Gemelos Digitales 3D",
    description: [
      "Plataforma web para soluciones de Gemelos Digitales en el sector inmobiliario con tecnología inmersiva 3D.",
      "Landing Page de alto impacto visual optimizada para conversión de clientes.",
      "Visualización de servicios tecnológicos: Cloud Streaming, IA, Analytics.",
      "Implementación de prácticas de diseño responsivo y optimización de rendimiento web."
    ],
    technologies: ["Vue.js", "CSS3", "JavaScript", "Diseño Responsivo"]
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    role: "Mobile Developer & UI Designer",
    project: "GlucoLifeStyle.AI",
    company: "TecNM Campus Morelia",
    location: "Morelia, Mich.",
    period: "Feb - Jun 2025",
    highlight: "App + Web",
    description: [
      "App multiplataforma con Flutter para monitoreo de salud integrando conexión Bluetooth con glucómetros.",
      "Refactorización de módulos clave (Diario de Estilo de Vida) para mejorar usabilidad y consistencia visual.",
      "Gestión completa del proceso de publicación: generación de archivos APK y AAB para Google Play Console.",
      "Desarrollo de la página web oficial del proyecto GlucoLifeStyle."
    ],
    technologies: ["Flutter", "Firebase", "Bluetooth API", "Riverpod", "Web"]
  },
  {
    id: 4,
    icon: <FaStore />,
    role: "Freelance Desarrolladora Full Stack",
    project: "PlusJolie",
    company: "Retail",
    location: "Remoto",
    period: "2024",
    highlight: "Sistema POS",
    description: [
      "Desarrollo de un sistema de Punto de Venta (POS) y catálogo en línea utilizando Next.js.",
      "Ejecución del despliegue en la nube utilizando Hostinger, configuración de dominio y base de datos MySQL."
    ],
    technologies: ["Next.js", "React", "MySQL", "Hostinger"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-pink-400 text-sm uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✦ Sobre Mí
          </motion.p>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            <span className="text-white">Perfil </span>
            <span className="text-gradient">Profesional</span>
          </motion.h1>
          <motion.p
            className="text-neutral-400 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ingeniera en Sistemas Computacionales con <span className="text-pink-400 font-medium">Especialidad en Tecnologías en la Nube</span>.
            Experiencia en todo el ciclo de desarrollo de software: desde diseño de interfaces UI/UX hasta desarrollo frontend/móvil
            con Vue.js, React Native y Flutter, e implementación de backend con Java y Python.
            <span className="text-white font-medium"> Disponible para reubicación inmediata.</span>
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
              <FaBriefcase className="text-pink-400" />
            </div>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Experiencia Laboral
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-pink-500/30 to-transparent"></div>
          </motion.div>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 lg:p-8 hover:border-pink-500/40 transition-all hover:shadow-xl hover:shadow-pink-500/5"
              >
                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="hidden sm:flex w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 items-center justify-center text-pink-400 flex-shrink-0">
                        {exp.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                          {exp.highlight && (
                            <span className="px-2 py-0.5 bg-pink-500/20 border border-pink-500/30 text-pink-400 rounded-full text-xs font-medium">
                              {exp.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-pink-400 font-medium">{exp.project}</p>
                        <p className="text-neutral-500 text-sm">{exp.company}</p>
                        {exp.website && (
                          <a
                            href={`https://${exp.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-pink-400 transition-colors mt-1"
                          >
                            <FaExternalLinkAlt size={10} />
                            {exp.website}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end gap-1 text-sm text-neutral-500 lg:text-right">
                      <div className="flex items-center gap-2">
                        <FaCalendar size={12} className="text-pink-500/50" />
                        <span className="font-medium text-white">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt size={12} className="text-pink-500/50" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-neutral-400 text-sm flex items-start gap-3">
                        <span className="text-pink-500 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-neutral-800/80 border border-neutral-700 text-neutral-300 rounded-lg text-xs font-medium hover:border-pink-500/30 hover:text-pink-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
              <FaGraduationCap className="text-pink-400" />
            </div>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Educación
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-pink-500/30 to-transparent"></div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 lg:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Ingeniería en Sistemas Computacionales</h3>
                <p className="text-neutral-400">Tecnológico Nacional de México - IT Morelia</p>
              </div>
              <span className="text-pink-400 text-sm font-medium px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full">
                2021 - 2025
              </span>
            </div>

            <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 rounded-lg mb-6">
              <span className="text-neutral-400 text-sm">Especialidad: </span>
              <span className="text-pink-400 text-sm font-medium">Tecnologías en la Nube</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-pink-500/30 transition-colors">
                <span className="text-2xl">🇲🇽</span>
                <div>
                  <p className="text-white font-medium">Español</p>
                  <p className="text-neutral-500 text-sm">Nativo</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50 hover:border-pink-500/30 transition-colors">
                <span className="text-2xl">🇺🇸</span>
                <div>
                  <p className="text-white font-medium">English</p>
                  <p className="text-neutral-500 text-sm">B2</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />
    </div>
  );
}
