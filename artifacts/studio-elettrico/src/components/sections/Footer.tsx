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
    <footer className="text-white pt-12 md:pt-20 pb-8" style={{ background: 'linear-gradient(30deg, white 45%, rgba(21,43,23,0.85) 65%, #152b17 100%)' }}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="block mb-6 cursor-pointer">
              <img src={logo} alt="Davide Orsi Studio Tecnico STP SRL" className="h-[9.66rem] md:h-[17.39rem] w-auto" />
            </Link>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-[#152b17]">Studio</h4>
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
