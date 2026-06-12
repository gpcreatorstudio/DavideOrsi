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
    description: "Stabilimento industriale portuale con distribuzione MT/BT complessa.",
    year: "2023",
    image: proj1,
  },
  {
    id: 2,
    title: "Datacenter Enterprise Milano",
    category: "Infrastrutture Critiche",
    description: "Sala server con ridondanza N+1, sistemi di continuità assoluta.",
    year: "2023",
    image: proj2,
  },
  {
    id: 3,
    title: "Centro Commerciale Il Giardino",
    category: "Commerciale",
    description: "Impianto BT/MT per grande distribuzione e illuminazione domotica.",
    year: "2022",
    image: proj3,
  },
  {
    id: 4,
    title: "Ospedale Civile Bergamo — Reparto Emergenze",
    category: "Sanitario",
    description: "Impianto critico con UPS e gruppi elettrogeni di emergenza.",
    year: "2022",
    image: proj4,
  },
  {
    id: 5,
    title: "Palazzina Residenziale Eco Smart",
    category: "Residenziale",
    description: "Domotica avanzata e impianto fotovoltaico integrato con accumulo.",
    year: "2024",
    image: proj5,
  },
  {
    id: 6,
    title: "Impianto Fotovoltaico Industriale 500kW",
    category: "Energie Rinnovabili",
    description: "Campo solare con inverter centralizzati per autoconsumo aziendale.",
    year: "2024",
    image: proj6,
  },
];

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Portfolio</h2>
          <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Progetti Recenti
          </h3>
          <p className="text-lg text-slate-600">
            Una selezione delle nostre realizzazioni più complesse e sfidanti, dove la precisione ingegneristica incontra l'innovazione tecnologica.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="glass-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-white/60 text-sm font-medium">
                    {project.year}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Project View"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
