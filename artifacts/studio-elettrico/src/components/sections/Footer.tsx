import { Zap } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <Zap className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="font-heading font-bold text-2xl tracking-tight">
                SE Impianti
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Studio Tecnico specializzato nella progettazione di impianti elettrici complessi per i settori industriale, commerciale e civile. 
              Precisione, sicurezza e innovazione dal 2004.
            </p>
            <div className="flex gap-4">
              <span className="px-3 py-1 border border-white/20 rounded-md text-xs font-bold text-slate-300">ISO 9001:2015</span>
              <span className="px-3 py-1 border border-white/20 rounded-md text-xs font-bold text-slate-300">SOA Cat. OS30</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigazione</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollTo("#about")} className="text-slate-400 hover:text-primary transition-colors text-left">
                  Chi Siamo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#projects")} className="text-slate-400 hover:text-primary transition-colors text-left">
                  Progetti
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#services")} className="text-slate-400 hover:text-primary transition-colors text-left">
                  Servizi
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#contact")} className="text-slate-400 hover:text-primary transition-colors text-left">
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Servizi</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Progettazione Elettrica</li>
              <li className="text-slate-400">Impianti Industriali</li>
              <li className="text-slate-400">Sistemi Fotovoltaici</li>
              <li className="text-slate-400">Domotica Avanzata</li>
              <li className="text-slate-400">Verifiche e Collaudi</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {currentYear} Studio Tecnico SE Impianti — P.IVA 12345678901 — Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Note Legali</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
