import { motion } from "framer-motion";
import aboutImg from "@/assets/images/about.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-heading font-extrabold uppercase tracking-widest text-sm mb-2">Chi Siamo</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-[#111] mb-6 leading-tight">
              Chi Siamo
            </h3>
            <p className="text-lg text-[#555] mb-6 leading-relaxed">
              Studio Tecnico Davide Orsi STP SRL è uno studio di progettazione specializzato in impianti elettrici e tecnologici per il settore civile, industriale e zootecnico.
            </p>
            <p className="text-lg text-[#555] mb-6 leading-relaxed">
              Offriamo servizi professionali di progettazione, consulenza e sviluppo di soluzioni per il risparmio energetico e l'efficientamento degli impianti, con particolare attenzione alle tecnologie innovative e alle energie rinnovabili.
            </p>
            <p className="text-lg text-[#555] leading-relaxed">
              Operiamo al servizio di privati, aziende ed enti pubblici, garantendo progetti sicuri, sostenibili e conformi alle normative vigenti. Siamo inoltre disponibili per collaborazioni con altri studi tecnici, integrando competenze e professionalità per la realizzazione di progetti complessi e multidisciplinari.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded overflow-hidden mb-8 bg-[#e0e0e0] aspect-[4/3]">
              <img
                src={aboutImg}
                alt="Ingegneri al lavoro"
                className="w-full h-full object-cover grayscale-[20%]"
                loading="lazy"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white border border-[#e0e0e0] p-4 rounded text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-1">18+</div>
                <div className="text-xs font-semibold text-[#555] uppercase tracking-wider">Anni di Esperienza</div>
              </div>
              <div className="bg-white border border-[#e0e0e0] p-4 rounded text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-1">100+</div>
                <div className="text-xs font-semibold text-[#555] uppercase tracking-wider">Progetti Completati</div>
              </div>
              <div className="bg-white border border-[#e0e0e0] p-4 rounded text-center">
                <div className="text-3xl font-heading font-bold text-primary mb-1">100%</div>
                <div className="text-xs font-semibold text-[#555] uppercase tracking-wider">Clienti Soddisfatti</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
