import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

type TabId = "residenziale" | "commerciale" | "industriale" | "terziario";

const tabsData = {
  residenziale: [
    {
      title: "Progettazione Elettrica Abitativa",
      items: [
        "Impianti civili a norma CEI 64-8",
        "Quadri elettrici residenziali",
        "Impianti domotici KNX",
        "Certificazioni e collaudi",
        "Consulenza SUPERBONUS"
      ]
    },
    {
      title: "Efficienza Energetica Residenziale",
      items: [
        "Impianti fotovoltaici residenziali",
        "Sistemi di accumulo",
        "Ricarica veicoli elettrici",
        "Audit energetico",
        "Pratiche GSE/incentivi"
      ]
    }
  ],
  commerciale: [
    {
      title: "Impianti Commerciali",
      items: [
        "Centri commerciali e GDO",
        "Uffici e showroom",
        "Impianti di sicurezza",
        "Sistemi UPS e continuità",
        "Manutenzione preventiva"
      ]
    },
    {
      title: "Illuminazione Professionale",
      items: [
        "Progettazione illuminotecnica",
        "LED e DALI",
        "Risparmio energetico certificato",
        "Controllo BEMS",
        "Certificazione UNI EN 12464"
      ]
    }
  ],
  industriale: [
    {
      title: "Progettazione Impianti Industriali",
      items: [
        "Distribuzione MT/BT",
        "Quadri MCC e PLC",
        "Cabine di trasformazione",
        "Impianti ATEX",
        "Coordinamento interferenze"
      ]
    },
    {
      title: "Automazione Industriale",
      items: [
        "Supervisione SCADA",
        "Reti industriali (Profibus/Modbus)",
        "Variatori di frequenza",
        "Gruppi elettrogeni",
        "Analisi del carico"
      ]
    }
  ],
  terziario: [
    {
      title: "Strutture Terziarie",
      items: [
        "Ospedali e strutture sanitarie",
        "Alberghi e hospitality",
        "Scuole e università",
        "Musei e beni culturali",
        "Data center"
      ]
    },
    {
      title: "Impianti Speciali",
      items: [
        "Sistemi BMS/BAS",
        "TVCC e controllo accessi",
        "Impianti antincendio",
        "Rilevazione gas",
        "Sistemi di comunicazione"
      ]
    }
  ]
};

export function Services() {
  const [activeTab, setActiveTab] = useState<TabId>("residenziale");

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-primary font-heading font-extrabold uppercase tracking-widest text-sm mb-2">I Nostri Servizi</h2>
          <h3 className="font-heading text-4xl md:text-5xl font-bold text-[#111] mb-6">
            I Nostri Servizi
          </h3>
          <p className="text-lg text-[#555] max-w-3xl">
            Soluzioni ingegneristiche su misura per ogni settore. Dalla progettazione all'efficienza energetica, garantiamo standard elevati e conformità normativa.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-8 border-b border-[#e0e0e0] min-w-max">
            {(Object.keys(tabsData) as TabId[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-base font-semibold capitalize transition-colors relative ${
                  activeTab === tab ? "text-primary" : "text-[#555] hover:text-[#111]"
                }`}
                data-testid={`tab-${tab}`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {tabsData[activeTab].map((box, idx) => (
                <div key={idx} className="border border-[#e0e0e0] p-8 rounded bg-[#f8f8f8]">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-[#111] mb-4">
                    {box.title}
                  </h4>
                  <ul className="space-y-3">
                    {box.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#555]">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
