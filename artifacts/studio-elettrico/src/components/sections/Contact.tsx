import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Richiesta inviata con successo",
        description: "Il nostro team ti contatterà al più presto.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
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

            {/* Map Placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden h-64 bg-slate-300 relative">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                Mappa Interattiva (Placeholder)
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card bg-white p-8 md:p-10 shadow-2xl">
              <h4 className="text-2xl font-bold font-heading text-foreground mb-6">Richiedi un Preventivo</h4>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome e Cognome *</label>
                    <Input id="name" required placeholder="Mario Rossi" className="bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Azienda</label>
                    <Input id="company" placeholder="Nome Azienda SpA" className="bg-slate-50/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email *</label>
                    <Input id="email" type="email" required placeholder="mario@azienda.it" className="bg-slate-50/50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Telefono</label>
                    <Input id="phone" type="tel" placeholder="+39 333 1234567" className="bg-slate-50/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">Servizio di Interesse</label>
                  <select 
                    id="service" 
                    className="flex h-10 w-full rounded-md border border-input bg-slate-50/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Seleziona un servizio...</option>
                    <option value="progettazione">Progettazione Elettrica</option>
                    <option value="industriale">Impianti Industriali</option>
                    <option value="fotovoltaico">Sistemi Fotovoltaici</option>
                    <option value="domotica">Domotica</option>
                    <option value="collaudi">Verifiche e Collaudi</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Messaggio *</label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Descrivi brevemente le tue esigenze..." 
                    className="min-h-[120px] bg-slate-50/50" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg"
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      Invia Richiesta
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Inviando il modulo, acconsenti al trattamento dei dati personali in conformità con la nostra Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
