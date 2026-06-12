import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-semibold tracking-wider uppercase mb-3 text-sm">Contatti</h2>
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Parlaci del tuo prossimo progetto.
          </h3>
          <p className="text-lg text-slate-600 mb-10">
            Siamo a disposizione per consulenze preliminari, preventivi dettagliati e analisi di fattibilità per impianti elettrici industriali e civili.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Sede Operativa</h4>
                <p className="text-slate-600">Via dell'Ingegneria, 12<br />20100 Milano (MI)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Telefono</h4>
                <p className="text-slate-600">+39 02 1234567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg">Email & PEC</h4>
                <p className="text-slate-600">info@sestudio.it<br />sestudio@pec.it</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden h-64 bg-slate-300 relative">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
              Mappa Interattiva (Placeholder)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
