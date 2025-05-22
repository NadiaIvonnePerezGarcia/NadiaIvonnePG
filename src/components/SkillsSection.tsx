import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaJira } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVuedotjs, SiFlutter, SiFirebase, SiPython, SiLaravel, SiFigma, SiCanva } from 'react-icons/si';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const technicalSkills: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" />, level: 85 },
      { name: "Vue.js", icon: <SiVuedotjs className="text-emerald-500" />, level: 80 },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" />, level: 85 },
      { name: "React Native", icon: <FaReact className="text-blue-600" />, level: 75 },
    ],
  },
  {
    name: "Backend y Herramientas",
    skills: [
      { name: "Laravel", icon: <SiLaravel className="text-red-600" />, level: 85 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 85 },
      { name: "Python", icon: <SiPython className="text-blue-500" />, level: 80 },
      { name: "Firebase", icon: <SiFirebase className="text-amber-500" />, level: 85 },
    ],
  },
  {
    name: "Control de Versiones y Gestión",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" />, level: 90 },
      { name: "Jira", icon: <FaJira className="text-blue-600" />, level: 85 },
    ],
  },
  {
    name: "Diseño y UX/UI",
    skills: [
      { name: "Figma", icon: <SiFigma className="text-purple-500" />, level: 85 },
      { name: "Canva", icon: <SiCanva className="text-blue-500" />, level: 90 },
    ],
  },
];

const softSkills = [
  "Liderazgo proactivo",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Resolución de problemas",
  "Atención al detalle",
  "Creatividad",
  "Pensamiento analítico",
  "Adaptabilidad",
  "Gestión de proyectos ágiles",
  "Aprendizaje continuo"
];

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Habilidades Técnicas */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-primary-dark">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600">
            Conocimientos técnicos y competencias profesionales
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {technicalSkills.map((category) => (
            <div key={category.name} className="p-6 bg-primary/5 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary-dark mb-8 border-b-2 border-primary/20 pb-3">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">{skill.icon}</div>
                      <p className="text-md font-medium text-gray-700 group-hover:text-primary transition-colors">
                        {skill.name}
                      </p>
                    </div>
                    {typeof skill.level === 'number' && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className="bg-primary h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Habilidades Blandas */}
        <div className="p-6 bg-primary/5 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-primary-dark mb-8 border-b-2 border-primary/20 pb-3">
            Habilidades Blandas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <p className="text-primary-dark font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
