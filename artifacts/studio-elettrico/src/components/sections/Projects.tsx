import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import proj1 from "@/assets/images/project-1.png";
import proj2 from "@/assets/images/project-2.png";
import proj3 from "@/assets/images/project-3.png";
import proj4 from "@/assets/images/project-4.png";
import proj5 from "@/assets/images/project-5.png";
import proj6 from "@/assets/images/project-6.png";

const projects = [
  {
    id: 1,
    title: "Impianto Industriale Zona Portuale",
    category: "Industriale",
    image: proj1,
  },
  {
    id: 2,
    title: "Datacenter Enterprise Milano",
    category: "Infrastrutture Critiche",
    image: proj2,
  },
  {
    id: 3,
    title: "Centro Commerciale Il Giardino",
    category: "Commerciale",
    image: proj3,
  },
  {
    id: 4,
    title: "Ospedale Civile Bergamo — Reparto Emergenze",
    category: "Sanitario",
    image: proj4,
  },
  {
    id: 5,
    title: "Palazzina Residenziale Eco Smart",
    category: "Residenziale",
    image: proj5,
  },
  {
    id: 6,
    title: "Impianto Fotovoltaico Industriale 500kW",
    category: "Energie Rinnovabili",
    image: proj6,
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-primary font-heading font-extrabold uppercase tracking-widest text-sm mb-2">Portfolio Lavori</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-[#111] mb-6">
            Portfolio Lavori
          </h3>
          <p className="text-lg text-[#555] max-w-3xl">
            Una selezione delle nostre realizzazioni. Progetti complessi sviluppati con massima precisione e attenzione al dettaglio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111] rounded overflow-hidden group cursor-pointer flex flex-col"
              onClick={() => setSelectedImage(project.image)}
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#222]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-[#333]">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white leading-tight">
                    {project.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              data-testid="button-close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Project View"
              className="max-w-full max-h-[90vh] object-contain rounded"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
