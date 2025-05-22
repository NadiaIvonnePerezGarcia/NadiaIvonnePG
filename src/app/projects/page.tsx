'use client';

import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: "glucolifestyle",
    title: "GlucoLifeStyle.AI – Plataforma para Monitoreo de Diabetes",
    description: "Aplicación móvil desarrollada con Flutter para el registro y seguimiento de niveles de glucosa, estado de ánimo, alimentación, sueño y ejercicio. Como Frontend Lead & Developer, lideré la planificación y ejecución de tareas del equipo frontend utilizando Jira y Git/GitHub. Desarrollé múltiples módulos incluyendo la conectividad Bluetooth con dispositivos medidores, gestión de datos del usuario, y sistema de traducción automática.",
    technologies: ["Flutter", "Riverpod", "Firebase", "Bluetooth API", "APIs REST", "Git", "GitHub", "Jira", "Figma"],
    imageUrl: "/images/projects/s11.jpg", 
    imageUrls: [
      "/images/projects/s11.jpg",
      "/images/projects/s12.jpg",
      "/images/projects/s13.jpg",
      "/images/projects/s14.jpg",
      "/images/projects/s15.jpg",
    ],
    projectUrl: "#", // Reemplazar con URL real si existe
    repoUrl: "#", // Reemplazar con URL real si existe
    achievement: "Implementación exitosa de todas las funcionalidades clave y preparación completa para publicación en Google Play Store.",
    period: "2023 - actualidad",
  },
  {
    id: "alzia",
    title: "AlzIA – Asistente Virtual para Detección de Alzheimer",
    description: "Aplicación móvil que permite conversaciones con un asistente virtual inteligente para analizar el lenguaje del usuario en tiempo real y detectar posibles signos tempranos de Alzheimer. Se implementó procesamiento de lenguaje natural y diseño de interfaz intuitiva.",
    technologies: ["Flutter", "Firebase", "NLP", "Figma"],
    imageUrl: "/images/projects/a2.jpg", // Imagen principal solicitada
    imageUrls: [
      "/images/projects/a2.jpg",
      "/images/projects/a1.jpg",
      "/images/projects/a3.jpg",
      "/images/projects/a4.jpg",
      "/images/projects/a5.jpg",
      "/images/projects/a6.jpg",
    ],
    projectUrl: "#", // Reemplazar con URL real si existe
    repoUrl: "#", // Reemplazar con URL real si existe
    achievement: "Ganadora del evento Innovatec (fase local). Actualmente compitiendo en la etapa regional.",
    period: "2024",
  },
  {
    id: "ponylink",
    title: "PonyLink – Red Social Estudiantil",
    description: "Plataforma web inspirada en LinkedIn, diseñada específicamente para la comunidad estudiantil del Tecnológico de Morelia. PonyLink facilita la conexión entre estudiantes, permitiéndoles crear perfiles profesionales, compartir proyectos, buscar colaboradores y establecer una red de contactos dentro de la institución. Desarrollada con Vue.js para el frontend y Laravel para el backend, buscando ofrecer una experiencia de usuario fluida y herramientas útiles para el desarrollo académico y profesional de los 'ponys'.",
    technologies: ["Vue.js", "Laravel", "MySQL", "API REST", "Git", "GitHub"],
    imageUrl: "/images/projects/p1.png", 
    imageUrls: [
      "/images/projects/p1.png",
      "/images/projects/p2.png",
      "/images/projects/p3.png",
    ],
    projectUrl: "#", // Reemplazar con URL real si existe
    repoUrl: "#", // Reemplazar con URL real si existe
    // achievement: "Logro destacado si aplica", // Opcional
    period: "2023", // Ajustar si es diferente
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ProjectsPage() {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-primary-light/5 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary-dark"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Una muestra de mi experiencia en desarrollo de software y soluciones tecnológicas.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 place-items-start sm:place-items-center" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
