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
    <footer className="bg-[#071208] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 cursor-pointer inline-flex">
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded">
                <Zap className="w-5 h-5 text-primary" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                SE Impianti
              </span>
            </Link>
            <p className="text-[#a0a0a0] max-w-sm leading-relaxed mb-6 font-body text-sm">
              Studio Tecnico specializzato nella progettazione di impianti elettrici complessi per i settori industriale, commerciale e civile. 
              Precisione, sicurezza e innovazione dal 2004.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-white">Studio</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollTo("#about")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">
                  Chi Siamo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#projects")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">
                  Progetti
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#contact")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-white">Servizi</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo("#services")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">Residenziale</button></li>
              <li><button onClick={() => scrollTo("#services")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">Commerciale</button></li>
              <li><button onClick={() => scrollTo("#services")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">Industriale</button></li>
              <li><button onClick={() => scrollTo("#services")} className="text-[#a0a0a0] hover:text-primary transition-colors text-sm font-medium">Terziario</button></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-primary/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-[#777]">
          <p>© {currentYear} Studio Tecnico SE Impianti — P.IVA 12345678901</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
