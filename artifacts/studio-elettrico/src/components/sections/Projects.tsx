import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blindTiger1 from "@assets/20260320_01_(1)_1781510852916.jpg";
import blindTiger2 from "@assets/20260320_02_1781510852915.jpg";
import blindTiger3 from "@assets/20260320_03_1781510852915.jpg";
import blindTiger4 from "@assets/20260320_04_(1)_1781510852902.jpg";
import casella1 from "@assets/20250920_084544811_iOS_1781511024576.JPG";
import casella2 from "@assets/20250906_073139177_iOS_1781511024561.jpg";
import casella3 from "@assets/20250906_073206860_iOS_1781511024575.jpg";
import casella4 from "@assets/20250920_075721336_iOS_1781511024575.jpg";
import casella5 from "@assets/20250920_081414289_iOS_1781511024575.jpg";
import casella6 from "@assets/20250920_081625189_iOS_1781511024576.jpg";
import casella7 from "@assets/IMG_1026_1781511024577.jpeg";
import casella8 from "@assets/IMG_1030_1781511024577.jpeg";
import casella9 from "@assets/IMG_1031_1781511024577.jpeg";
import casella10 from "@assets/IMG_1032_1781511024577.jpeg";
import casella11 from "@assets/IMG_1033_1781511024578.jpeg";
import casella12 from "@assets/IMG_1034_1781511024578.jpeg";
import plex1 from "@assets/23c30da6-f364-401b-b730-1feb714784b1_1781511103717.jpeg";
import plex2 from "@assets/e896ffd2-6f9c-4911-a150-5919cf5d154e_1781511103718.jpeg";
import plex3 from "@assets/1eefebb5-c602-4a17-9cfe-bbbd249e9ad4_1781511103714.jpeg";
import plex4 from "@assets/f4d63374-a890-4c50-8a9f-d334426ed21b_1781511103718.jpeg";
import plex5 from "@assets/8c0ed485-27e1-4426-9175-7db032899f70_1781511103717.jpeg";
import plex6 from "@assets/5f57c5f6-ab61-4008-a475-0b922bf0c6ea_1781511103716.jpeg";
import plex7 from "@assets/d6c6767d-d678-4a3c-9cf1-fa2a46a6e1df_1781511103718.jpeg";
import plex8 from "@assets/8d0a7e9f-73f3-4693-a3f2-345ecf009fc9_1781511103717.jpeg";
import plex9 from "@assets/IMG_9183_1781511103719.jpeg";
import ottica1 from "@assets/20260413_123043079_iOS_1781511542778.jpg";
import ottica2 from "@assets/20260413_124744926_iOS_1781511542771.jpg";
import ottica3 from "@assets/20260413_124740292_iOS_1781511542771.jpg";
import ottica4 from "@assets/20260413_124737343_iOS_1781511542771.jpg";
import ottica5 from "@assets/20260413_124734209_iOS_1781511542775.jpg";
import ottica6 from "@assets/20260413_124719629_iOS_1781511542775.jpg";
import ottica7 from "@assets/20260413_124712926_iOS_1781511542776.jpg";
import ottica8 from "@assets/20260413_124703527_iOS_1781511542776.jpg";
import ottica9 from "@assets/20260413_124701103_iOS_1781511542776.jpg";
import ottica10 from "@assets/20260413_124653785_iOS_1781511542777.jpg";
import ottica11 from "@assets/20260413_124647647_iOS_1781511542777.jpg";
import ottica12 from "@assets/20260413_124641505_iOS_1781511542777.jpg";
import ottica13 from "@assets/20260413_124638836_iOS_1781511542777.jpg";
import ottica14 from "@assets/20260413_124624276_iOS_1781511542778.jpg";
import ottica15 from "@assets/20260413_124620327_iOS_1781511542778.jpg";
import bassi1 from "@assets/20241016_074319742_iOS_1781511778599.jpg";
import bassi2 from "@assets/20241016_074325957_iOS_1781511778604.jpg";
import bassi3 from "@assets/20241016_074328061_iOS_1781511778604.jpg";
import bassi4 from "@assets/20241016_074332580_iOS_1781511778604.jpg";
import bassi5 from "@assets/20241016_074356945_iOS_1781511778604.jpg";
import bassi6 from "@assets/20241016_074413928_iOS_1781511778605.jpg";
import bassi7 from "@assets/20241016_074808814_iOS_1781511778605.jpg";
import bassi8 from "@assets/20241016_074813455_iOS_1781511778605.jpg";
import bassi9 from "@assets/20241016_074815823_iOS_1781511778605.jpg";
import bassi10 from "@assets/20241016_074825291_iOS_1781511778605.jpg";
import bassi11 from "@assets/20241016_074827436_iOS_1781511778605.jpg";
import bassi12 from "@assets/20241016_074829759_iOS_1781511778605.jpg";
import bassi13 from "@assets/20241016_074831485_iOS_1781511778606.jpg";
import bassi14 from "@assets/20241016_074850842_iOS_1781511778606.jpg";
import bassi15 from "@assets/20241016_074855191_iOS_1781511778606.jpg";
import bassi16 from "@assets/20241016_074857296_iOS_1781511778606.jpg";
import bassi17 from "@assets/20241016_074906686_iOS_1781511778606.jpg";
import bassi18 from "@assets/20241016_074908846_iOS_1781511778606.jpg";
import bassi19 from "@assets/20241016_074917394_iOS_1781511778606.jpg";
import bassi20 from "@assets/20241016_074919168_iOS_1781511778607.jpg";
import padel1 from "@assets/INAUGURAZIONE_PADEL_FIDENZA_24-4-24.mp4-2024-04-25-18-29-16_1781511956220.jpg";
import bistro1 from "@assets/unnamed_1781512016599.webp";

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
    title: "Casella Macchine Agricole Srl",
    subtitle: "Carpaneto Piacentino (PC)",
    category: "Industriale",
    image: casella1,
    gallery: [casella1, casella2, casella3, casella4, casella5, casella6, casella7, casella8, casella9, casella10, casella11, casella12],
  },
  {
    id: 3,
    title: 'Palestra "PLEX GYM"',
    subtitle: "Fiorenzuola d'Arda (PC)",
    category: "Locale Commerciale",
    image: plex1,
    gallery: [plex1, plex2, plex3, plex4, plex5, plex6, plex7, plex8, plex9],
  },
  {
    id: 4,
    title: 'Negozio "NUOVA OTTICA"',
    subtitle: "Maranello (MO)",
    category: "Locale Commerciale",
    image: ottica1,
    gallery: [ottica1, ottica2, ottica3, ottica4, ottica5, ottica6, ottica7, ottica8, ottica9, ottica10, ottica11, ottica12, ottica13, ottica14, ottica15],
  },
  {
    id: 5,
    title: 'Borgo "I Bassi"',
    subtitle: "Pellegrino Parmense (PR)",
    category: "Residenziale",
    image: bassi1,
    gallery: [bassi1, bassi2, bassi3, bassi4, bassi5, bassi6, bassi7, bassi8, bassi9, bassi10, bassi11, bassi12, bassi13, bassi14, bassi15, bassi16, bassi17, bassi18, bassi19, bassi20],
  },
  {
    id: 6,
    title: 'Campi da Padel "AREA PADEL"',
    subtitle: "Fidenza (PR)",
    category: "Sportivo",
    image: padel1,
    gallery: [padel1],
  },
  {
    id: 7,
    title: 'Ristorante e Bar "AREA BISTRÓ FOOD & DRINKS"',
    subtitle: "Fidenza (PR)",
    category: "Ristorazione",
    image: bistro1,
    gallery: [bistro1],
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
