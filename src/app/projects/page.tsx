'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const projectsData = [
  {
    id: "alzia",
    title: "AlzIA",
    subtitle: "Detección de Deterioro Cognitivo",
    description: "App para detección de deterioro cognitivo leve mediante un agente de IA conversacional en vivo. Análisis de biomarcadores lingüísticos usando Whisper (voz a texto) y un LLM para la detección temprana.",
    longDescription: "Lideré la integración técnica entre la app móvil (React Native) y backend de microservicios en Java Spring Boot. Visualización de datos médicos bajo estándar HL7 FHIR. Interfaces accesibles para adultos mayores con metodología Lean Healthcare.",
    technologies: ["React Native", "Java Spring Boot", "Whisper", "LLM", "HL7 FHIR", "Figma"],
    images: [
      "/images/projects/a2.jpg",
      "/images/projects/a1.jpg",
      "/images/projects/a3.jpg",
      "/images/projects/a4.jpg",
      "/images/projects/a5.jpg",
    ],
    projectUrl: "#",
    repoUrl: "#",
    period: "Ago 2024 - Dic 2025",
    company: "Smart Health Solutions",
    highlight: "IA Conversacional"
  },
  {
    id: "inmoblock",
    title: "InmoBlock",
    subtitle: "Gemelos Digitales PropTech",
    description: "Plataforma web para soluciones de Gemelos Digitales en el sector inmobiliario con tecnología inmersiva 3D.",
    longDescription: "Landing Page de alto impacto visual optimizada para conversión de clientes. Visualización de servicios tecnológicos: Cloud Streaming, IA, Analytics. Diseño responsivo y optimización de rendimiento web.",
    technologies: ["Vue.js", "CSS3", "JavaScript", "UI/UX", "Diseño Responsivo"],
    images: [
      "/images/projects/i1.png",
      "/images/projects/i2.png",
      "/images/projects/i3.png",
      "/images/projects/i4.png",
    ],
    projectUrl: "https://www.inmoblock.com",
    repoUrl: "#",
    period: "2024",
    company: "PropTech Freelance",
    highlight: "Landing Page 3D"
  },
  {
    id: "glucolifestyle",
    title: "GlucoLifeStyle.AI",
    subtitle: "Monitoreo de Diabetes",
    description: "App multiplataforma con Flutter para monitoreo de salud integrando conexión Bluetooth con glucómetros. Incluye desarrollo de página web oficial.",
    longDescription: "Refactorización de módulos clave (Diario de Estilo de Vida) para mejorar usabilidad. Gestión completa del proceso de publicación: generación de archivos APK y AAB para Google Play Console. Desarrollo de la página web del proyecto.",
    technologies: ["Flutter", "Firebase", "Bluetooth API", "Riverpod", "Web"],
    images: [
      "/images/projects/s11.jpg",
      "/images/projects/s12.jpg",
      "/images/projects/s13.jpg",
      "/images/projects/s14.jpg",
      "/images/projects/s15.jpg",
    ],
    projectUrl: "#",
    repoUrl: "#",
    period: "Feb - Jun 2025",
    company: "TecNM Campus Morelia",
    highlight: "App + Web"
  },
  {
    id: "plusjolie",
    title: "PlusJolie",
    subtitle: "Sistema POS Retail",
    description: "Sistema de Punto de Venta (POS) y catálogo en línea completo para tienda de retail.",
    longDescription: "Desarrollo con Next.js para interfaces reactivas y modernas. Ejecución del despliegue en la nube utilizando Hostinger, configuración de dominio y base de datos MySQL.",
    technologies: ["Next.js", "React", "MySQL", "Hostinger", "API REST"],
    images: [
      "/images/projects/pj1.png",
      "/images/projects/pj2.png",
      "/images/projects/pj3.png",
      "/images/projects/pj4.png",
    ],
    projectUrl: "#",
    repoUrl: "#",
    period: "2024",
    company: "Retail Freelance",
    highlight: "E-commerce"
  }
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentProject = projectsData[currentIndex];
  const images = currentProject.images;

  const nextProject = () => {
    setDirection(1);
    setCurrentImageIndex(0);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentImageIndex(0);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-pink-400 text-sm uppercase tracking-[0.3em] mb-4">Portafolio</p>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Mis Proyectos
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Experiencia en desarrollo web, aplicaciones móviles y soluciones cloud.
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center text-white hover:bg-pink-500/30 transition-all"
            aria-label="Proyecto anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30 flex items-center justify-center text-white hover:bg-pink-500/30 transition-all"
            aria-label="Siguiente proyecto"
          >
            <FaChevronRight />
          </button>

          {/* Main Project Card */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-3xl overflow-hidden">

                {/* Image Section - Carousel with Navigation */}
                <div className="relative w-full aspect-[16/9] bg-neutral-800 overflow-hidden group">
                  {/* Main Image Display */}
                  <Image
                    src={images[currentImageIndex]}
                    alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="contain"
                    className="transition-all duration-500"
                  />

                  {/* Image Navigation Arrows */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                        className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-pink-500/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10"
                        aria-label="Imagen anterior"
                      >
                        <FaChevronLeft size={14} />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-pink-500/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10"
                        aria-label="Siguiente imagen"
                      >
                        <FaChevronRight size={14} />
                      </button>
                    </>
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none"></div>

                  {/* Image Navigation Dots */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-pink-500 w-6' : 'bg-white/40 w-2 hover:bg-white/60'
                            }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* Highlight badge */}
                  {currentProject.highlight && (
                    <div className="absolute top-4 right-4 px-3 py-1.5 bg-pink-500/90 backdrop-blur-sm text-white rounded-full text-sm font-medium shadow-lg">
                      {currentProject.highlight}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-400 text-sm font-medium">{currentProject.company}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="text-neutral-500 text-sm">{currentProject.period}</span>
                      </div>
                      <h2
                        className="text-3xl lg:text-4xl font-bold text-white mb-2"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                      >
                        {currentProject.title}
                      </h2>
                      <p className="text-pink-400 font-medium text-lg">{currentProject.subtitle}</p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {currentProject.projectUrl && currentProject.projectUrl !== "#" && (
                        <a
                          href={currentProject.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2.5 flex items-center gap-2"
                        >
                          <FaExternalLinkAlt size={12} />
                          Ver Proyecto
                        </a>
                      )}
                      {currentProject.repoUrl && currentProject.repoUrl !== "#" && (
                        <a
                          href={currentProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm py-2.5 flex items-center gap-2"
                        >
                          <FaGithub size={14} />
                          Código
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-3 leading-relaxed">
                    {currentProject.description}
                  </p>
                  <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                    {currentProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-neutral-800/80 border border-neutral-700 text-neutral-300 rounded-lg text-xs font-medium hover:border-pink-500/30 hover:text-pink-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projectsData.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentImageIndex(0);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${index === currentIndex
                  ? 'bg-pink-500 w-8'
                  : 'bg-neutral-700 w-2 hover:bg-neutral-600'
                  }`}
                aria-label={`Ver proyecto ${project.title}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Project Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentImageIndex(0);
                setCurrentIndex(index);
              }}
              className={`group p-4 rounded-2xl border transition-all text-left ${index === currentIndex
                ? 'bg-pink-500/10 border-pink-500/30'
                : 'bg-neutral-900/50 border-neutral-800 hover:border-pink-500/30'
                }`}
            >
              <h3 className="font-semibold text-white mb-1 group-hover:text-pink-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-500 text-xs">{project.subtitle}</p>
              <p className="text-pink-400/70 text-xs mt-2">{project.period}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
