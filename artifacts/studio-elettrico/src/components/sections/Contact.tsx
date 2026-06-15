import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#e0e0e0]">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-heading font-extrabold uppercase tracking-widest text-sm mb-2">Contatti</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-[#111] mb-6">
            Contatti
          </h3>
          <p className="text-lg text-[#555] mb-16 max-w-2xl mx-auto">
            Siamo a disposizione per consulenze preliminari, preventivi dettagliati e analisi di fattibilità per impianti elettrici industriali e civili.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left max-w-2xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-[#111] text-lg mb-2">Email</h4>
              <a href="mailto:info@orsiperind.it" className="text-[#555] hover:text-primary transition-colors">info@orsiperind.it</a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold text-[#111] text-lg mb-2">Sede</h4>
              <p className="text-[#555] text-center md:text-left">Piazza Patrioti n.5<br />29016 Cortemaggiore (PC) – Italia</p>
            </div>
          </div>

          <div className="rounded overflow-hidden h-80 border border-[#e0e0e0]">
            <iframe
              title="Sede Studio Tecnico Davide Orsi"
              src="https://www.google.com/maps?q=Piazza+Patrioti+5,+29016+Cortemaggiore+PC,+Italia&output=embed&hl=it"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
