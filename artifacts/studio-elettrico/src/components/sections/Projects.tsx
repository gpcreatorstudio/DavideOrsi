import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import proj2 from "@/assets/images/project-2.png";
import proj3 from "@/assets/images/project-3.png";
import proj4 from "@/assets/images/project-4.png";
import proj5 from "@/assets/images/project-5.png";
import proj6 from "@/assets/images/project-6.png";
import blindTiger1 from "@assets/20260320_01_(1)_1781510852916.jpg";
import blindTiger2 from "@assets/20260320_02_1781510852915.jpg";
import blindTiger3 from "@assets/20260320_03_1781510852915.jpg";
import blindTiger4 from "@assets/20260320_04_(1)_1781510852902.jpg";

const projects = [
  {
    id: 1,
    title: 'Cocktail bar "BLIND TIGER"',
    subtitle: "Fiorenzuola d'Arda (PC)",
    category: "Locale Commerciale",
    image: blindTiger1,
    gallery: [blindTiger1, blindTiger2, blindTiger3, blindTiger4],
  },
  {
    id: 2,
    title: "Datacenter Enterprise Milano",
    category: "Infrastrutture Critiche",
    image: proj2,
    gallery: [proj2],
  },
  {
    id: 3,
    title: "Centro Commerciale Il Giardino",
    category: "Commerciale",
    image: proj3,
    gallery: [proj3],
  },
  {
    id: 4,
    title: "Ospedale Civile Bergamo — Reparto Emergenze",
    category: "Sanitario",
    image: proj4,
    gallery: [proj4],
  },
  {
    id: 5,
    title: "Palazzina Residenziale Eco Smart",
    category: "Residenziale",
    image: proj5,
    gallery: [proj5],
  },
  {
    id: 6,
    title: "Impianto Fotovoltaico Industriale 500kW",
    category: "Energie Rinnovabili",
    image: proj6,
    gallery: [proj6],
  },
];

export function Projects() {
  const [lightbox, setLightbox] = useState<{ gallery: string[]; index: number } | null>(null);

  const openLightbox = (gallery: string[], index = 0) => setLightbox({ gallery, index });
  const closeLightbox = () => setLightbox(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.gallery.length) % lightbox.gallery.length });
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightbox) return;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.gallery.length });
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-12">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">Portfolio Lavori</p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
            Portfolio Lavori
          </h2>
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
              onClick={() => openLightbox(project.gallery, 0)}
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#222]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                {project.gallery.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-sm font-medium">
                    {project.gallery.length} foto
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-[#333]">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider rounded-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  {"subtitle" in project && project.subtitle && (
                    <p className="text-sm text-[#888] mt-1">{project.subtitle}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              data-testid="button-close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>

            {lightbox.gallery.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 md:left-8 text-white/70 hover:text-white p-2 bg-black/40 rounded-full"
                  data-testid="button-lightbox-prev"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 md:right-8 text-white/70 hover:text-white p-2 bg-black/40 rounded-full"
                  data-testid="button-lightbox-next"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </>
            )}

            <motion.img
              key={lightbox.index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox.gallery[lightbox.index]}
              alt="Progetto"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[88vh] object-contain rounded cursor-default"
            />

            {lightbox.gallery.length > 1 && (
              <div className="absolute bottom-6 flex gap-2">
                {lightbox.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightbox({ ...lightbox, index: i }); }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === lightbox.index ? "bg-primary" : "bg-white/40"}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
