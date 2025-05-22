'use client';

import SkillsSection from '@/components/SkillsSection';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutPage() {
  return (
    <>
      <motion.section 
        className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-primary-light/5 to-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary-dark">
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-700"> {/* Texto más oscuro */}
              Un resumen de mi trayectoria, mis aspiraciones y cómo puedo aportar valor.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {/* Perfil Profesional */}
            <motion.div className="mb-10" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-4 border-b-2 border-primary/30 pb-2">
                Perfil Profesional
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed"> {/* Texto más oscuro */}
                Soy una estudiante de Ingeniería en Sistemas Computacionales en el 8° semestre, con una especialización en Tecnologías en la Nube. Mi pasión radica en el desarrollo de software frontend y mobile, donde busco crear interfaces web y móviles que no solo sean intuitivas y funcionales, sino también estéticamente agradables.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed mt-4"> {/* Texto más oscuro */}
                Cuento con experiencia aplicando metodologías ágiles como Scrum y utilizando herramientas de gestión de proyectos como Jira. Mi objetivo es encontrar una oportunidad de residencias profesionales donde pueda aplicar y expandir mis habilidades técnicas en Flutter, Firebase y desarrollo UI/UX, contribuyendo activamente al ciclo de vida completo de proyectos innovadores y desafiantes.
              </p>
            </motion.div>

            {/* Formación Académica */}
            <motion.div className="mb-10" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-6 border-b-2 border-primary/30 pb-2">
                Formación Académica
              </h3>
              <div className="bg-primary/5 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-primary-dark">Instituto Tecnológico</h4>
                <p className="text-lg text-gray-700 mt-2">Ingeniería en Sistemas Computacionales</p>
                <p className="text-md text-gray-600 mt-1">8° semestre – Especialidad en Tecnologías en la Nube</p>
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="text-lg font-medium text-gray-700">
                    Inglés: <span className="text-primary-dark font-semibold">Nivel B2 (Intermedio-Avanzado)</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Experiencia Freelance */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary-dark mb-6 border-b-2 border-primary/30 pb-2">
                Experiencia Freelance
              </h3>
              <div className="bg-primary/5 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold text-primary-dark">Desarrollo Web Independiente</h4>
                <p className="text-sm text-gray-600 mb-2">2023 – actualidad</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-lg">
                  <li>Desarrollo de sitios web informativos, landing pages y sistemas básicos.</li>
                  <li>Aplicación de HTML, CSS, JavaScript y frameworks como Vue.js y Laravel.</li>
                  <li>Énfasis en diseño responsive, funcionalidad intuitiva y experiencia de usuario.</li>
                  <li>Gestión completa del ciclo de proyecto: requerimientos, desarrollo y entrega.</li>
                </ul>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.section>
      <SkillsSection />
    </> 
  );
}
