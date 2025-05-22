'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string; // Imagen principal o por defecto
    imageUrls?: string[]; // Array de URLs para el carrusel
    projectUrl?: string;
    repoUrl?: string;
    achievement?: string;
    period?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.imageUrls && project.imageUrls.length > 0 ? project.imageUrls : [project.imageUrl];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el click en el botón propague a la tarjeta
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02] border border-gray-200 flex flex-col h-full w-full max-w-sm mx-auto group"
      variants={cardVariants}
    >
      <div className="relative w-full aspect-[9/19] overflow-hidden">
        <Image
          key={currentImageIndex} // Key para forzar re-render y animación si se añade
          src={images[currentImageIndex] || "/images/placeholder-project.png"}
          alt={`Imagen ${currentImageIndex + 1} del proyecto ${project.title}`}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300 ease-in-out"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full z-10 transition-colors"
              aria-label="Imagen anterior"
            >
              <FaChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full z-10 transition-colors"
              aria-label="Siguiente imagen"
            >
              <FaChevronRight size={18} />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`block h-1.5 w-1.5 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-primary-dark mb-1">{project.title}</h3>
        
        {project.period && (
          <p className="text-xs text-primary mb-2 font-medium">{project.period}</p>
        )}
        
        <p className="text-gray-700 text-sm mb-3 leading-relaxed flex-grow line-clamp-4">{project.description}</p>
        
        {project.achievement && (
          <div className="mb-3 bg-primary/5 p-2 rounded-lg border border-primary/10">
            <p className="text-xs text-primary-dark">
              <strong className="font-semibold">🏆 Logro:</strong> {project.achievement}
            </p>
          </div>
        )}
        
        <div className="mb-4">
          <h4 className="font-semibold text-xs text-gray-700 mb-1">Tecnologías:</h4>
          <div className="flex flex-wrap gap-1">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-primary/10 text-primary-dark px-2 py-0.5 rounded-full text-[10px] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto pt-3 border-t border-gray-200 flex justify-end space-x-2">
          {project.projectUrl && project.projectUrl !== "#" && (
            <Link 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors duration-200 p-1.5 rounded-full hover:bg-primary/5"
              title="Ver proyecto en vivo"
            >
              <FaExternalLinkAlt size={18} />
            </Link>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <Link 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary transition-colors duration-200 p-1.5 rounded-full hover:bg-primary/5"
              title="Ver código en GitHub"
            >
              <FaGithub size={18} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
