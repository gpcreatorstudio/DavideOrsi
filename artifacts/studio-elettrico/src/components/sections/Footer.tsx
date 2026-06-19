import { Link } from "wouter";
import logo from "@assets/ORSI_DAVIDE_LOGO2_1781859583820.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-white from-[20%] via-[#152b17]/80 via-[40%] to-[#152b17] text-white pt-12 md:pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex mb-6 cursor-pointer">
              <img src={logo} alt="Davide Orsi Studio Tecnico STP SRL" className="h-24 md:h-[10.8rem] w-auto" />
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
          <p>© {currentYear} Davide Orsi Studio Tecnico STP SRL — P.IVA 01923900334 — Capitale i.v. 10.000,00 €</p>
          <p>Sito realizzato da <a href="https://gpcreator.it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GP Creator Studio</a></p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
