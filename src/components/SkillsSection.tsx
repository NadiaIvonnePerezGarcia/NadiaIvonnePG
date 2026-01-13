'use client';

import React from 'react';
import { FaReact, FaGithub, FaAws, FaJava, FaDocker, FaCode, FaLightbulb, FaUsers, FaHeart } from 'react-icons/fa';
import { SiVuedotjs, SiFlutter, SiPython, SiFigma, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const frontendSkills: Skill[] = [
  { name: "Vue.js", icon: <SiVuedotjs />, level: 90 },
  { name: "React / Next.js", icon: <SiNextdotjs />, level: 85 },
  { name: "Flutter", icon: <SiFlutter />, level: 80 },
  { name: "React Native", icon: <FaReact />, level: 75 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
  { name: "TypeScript", icon: <SiTypescript />, level: 70 },
];

const backendSkills: Skill[] = [
  { name: "Java Spring Boot", icon: <FaJava />, level: 40 },
  { name: "Python", icon: <SiPython />, level: 45 },
  { name: "Despliegue Cloud", icon: <FaAws />, level: 35 },
  { name: "Docker", icon: <FaDocker />, level: 30 },
];

const toolsSkills: Skill[] = [
  { name: "Git / GitHub", icon: <FaGithub />, level: 85 },
  { name: "Figma", icon: <SiFigma />, level: 80 },
];

const softSkills = [
  { name: "Aprendizaje Continuo", description: "Gran disposición y rapidez para adoptar nuevas tecnologías (Cloud, Frameworks)", icon: <FaLightbulb /> },
  { name: "Trabajo en Equipo", description: "Experiencia colaborando en grupos multidisciplinarios", icon: <FaUsers /> },
  { name: "Iniciativa", description: "Enfoque práctico para buscar soluciones ante retos técnicos inesperados", icon: <FaCode /> },
  { name: "Compromiso", description: "Responsabilidad en la entrega de proyectos y atención al detalle", icon: <FaHeart /> },
];

const methodologies = ["Scrum", "Lean Healthcare", "Lean UX", "Agile", "Jira"];

function ProgressBar({ level, animate }: { level: number; animate: boolean }) {
  return (
    <div className="flex-1 h-2 bg-neutral-800 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: animate ? `${level}%` : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

function SkillRow({ skill, animate, index }: { skill: Skill; animate: boolean; index: number }) {
  return (
    <motion.div
      className="flex items-center gap-3 group"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: animate ? 1 : 0, x: animate ? 0 : -20 }}
      transition={{ delay: index * 0.1 }}
    >
      <span className="text-xl text-pink-400 group-hover:scale-110 transition-transform w-6">
        {skill.icon}
      </span>
      <span className="text-neutral-300 text-sm w-32 font-medium">{skill.name}</span>
      <ProgressBar level={skill.level} animate={animate} />
      <span className="text-neutral-500 text-xs w-8 text-right">{skill.level}%</span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">
            <FaCode className="text-pink-400" />
          </div>
          <h2
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            Habilidades Técnicas
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/30 to-transparent"></div>
        </motion.div>

        {/* Skills with Progress Bars */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Frontend & UI/UX */}
          <motion.div
            className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Frontend & UI/UX</h3>
              <span className="text-xs text-pink-400 px-3 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full font-medium">
                Avanzado
              </span>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <SkillRow key={skill.name} skill={skill} animate={isInView} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Cloud & Backend */}
          <motion.div
            className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-pink-500/30 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Cloud & Backend</h3>
              <span className="text-xs text-neutral-400 px-3 py-1 bg-neutral-800 border border-neutral-700 rounded-full font-medium">
                Conceptos Básicos
              </span>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <SkillRow key={skill.name} skill={skill} animate={isInView} index={index} />
              ))}
            </div>

            {/* Tools below */}
            <div className="mt-6 pt-6 border-t border-neutral-700/50">
              <h4 className="text-sm font-medium text-neutral-400 mb-4">Herramientas</h4>
              <div className="space-y-4">
                {toolsSkills.map((skill, index) => (
                  <SkillRow key={skill.name} skill={skill} animate={isInView} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Methodologies */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Metodologías</h3>
          <div className="flex flex-wrap gap-3">
            {methodologies.map((method, index) => (
              <motion.span
                key={method}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-pink-500/10 to-pink-600/10 border border-pink-500/20 text-pink-300 rounded-full text-sm hover:border-pink-500/40 hover:bg-pink-500/20 transition-all cursor-default"
              >
                {method}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ delay: index * 0.1 }}
                className="group p-5 bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-pink-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/30 transition-colors">
                  <span className="text-pink-400 text-lg">{skill.icon}</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                  <p className="text-neutral-500 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
