import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

type TabId = "residenziale" | "commerciale" | "industriale" | "terziario";

const tabsData: Record<TabId, {
  description: string;
  boxes: { title: string; items: string[] }[];
}> = {
  residenziale: {
    description:
      "La progettazione in ambito residenziale richiede precisione normativa e attenzione alle esigenze abitative. Offriamo soluzioni complete per appartamenti, ville e condomini, garantendo sicurezza, efficienza e comfort. Ogni impianto è progettato nel rispetto della norma CEI 64-8 e delle più recenti disposizioni in materia di efficienza energetica e domotica.",
    boxes: [
      {
        title: "PROGETTAZIONE ELETTRICA ABITATIVA",
        items: [
          "Impianti civili a norma CEI 64-8",
          "Quadri elettrici residenziali",
          "Impianti domotici KNX",
          "Certificazioni e collaudi",
          "Consulenza SUPERBONUS",
        ],
      },
      {
        title: "DOCUMENTAZIONE E VALUTAZIONE DEI RISCHI (D.LGS. 81/08)",
        items: [
          "Impianti fotovoltaici residenziali",
          "Sistemi di accumulo",
          "Ricarica veicoli elettrici",
          "Audit energetico",
          "Pratiche GSE/incentivi",
        ],
      },
    ],
  },
  commerciale: {
    description:
      "Per il settore commerciale progettiamo impianti elettrici in grado di supportare attività complesse, garantendo continuità operativa, sicurezza e conformità alle normative vigenti. Dalla grande distribuzione agli uffici direzionali, ogni soluzione è studiata per ottimizzare i costi energetici e massimizzare l'affidabilità dell'infrastruttura elettrica.",
    boxes: [
      {
        title: "IMPIANTI COMMERCIALI E DIREZIONALI",
        items: [
          "Centri commerciali e GDO",
          "Uffici e showroom",
          "Impianti di sicurezza",
          "Sistemi UPS e continuità",
          "Manutenzione preventiva",
        ],
      },
      {
        title: "ILLUMINAZIONE E EFFICIENZA ENERGETICA",
        items: [
          "Progettazione illuminotecnica",
          "Sistemi LED e DALI",
          "Risparmio energetico certificato",
          "Controllo BEMS",
          "Certificazione UNI EN 12464",
        ],
      },
    ],
  },
  industriale: {
    description:
      "L'industria richiede impianti robusti, sicuri e progettati per operare in condizioni estreme. Il nostro studio vanta una consolidata esperienza nella progettazione di impianti elettrici industriali ad alta complessità: dalla distribuzione in media tensione all'automazione avanzata, ogni soluzione è tarata sulle reali esigenze produttive del cliente.",
    boxes: [
      {
        title: "PROGETTAZIONE IMPIANTI INDUSTRIALI",
        items: [
          "Distribuzione MT/BT",
          "Quadri MCC e PLC",
          "Cabine di trasformazione",
          "Impianti ATEX",
          "Coordinamento interferenze",
        ],
      },
      {
        title: "AUTOMAZIONE E SUPERVISIONE INDUSTRIALE",
        items: [
          "Supervisione SCADA",
          "Reti industriali (Profibus/Modbus)",
          "Variatori di frequenza",
          "Gruppi elettrogeni",
          "Analisi del carico",
        ],
      },
    ],
  },
  terziario: {
    description:
      "Il settore terziario include strutture complesse che richiedono impianti elettrici altamente affidabili e conformi a normative specifiche. Ospedali, alberghi, istituti scolastici e data center richiedono competenze specialistiche che il nostro studio è in grado di garantire, con un approccio multidisciplinare e una profonda conoscenza delle normative di settore.",
    boxes: [
      {
        title: "STRUTTURE TERZIARIE E SANITARIE",
        items: [
          "Ospedali e strutture sanitarie",
          "Alberghi e hospitality",
          "Scuole e università",
          "Musei e beni culturali",
          "Data center",
        ],
      },
      {
        title: "IMPIANTI SPECIALI E TECNOLOGICI",
        items: [
          "Sistemi BMS/BAS",
          "TVCC e controllo accessi",
          "Impianti antincendio",
          "Rilevazione gas",
          "Sistemi di comunicazione",
        ],
      },
    ],
  },
};

const tabLabels: Record<TabId, string> = {
  residenziale: "RESIDENZIALE",
  commerciale: "COMMERCIALE",
  industriale: "INDUSTRIALE",
  terziario: "TERZIARIO",
};

export function Services() {
  const [activeTab, setActiveTab] = useState<TabId>("residenziale");
  const current = tabsData[activeTab];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-3">
            I Nostri Servizi
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#111] mb-4">
            I Nostri Servizi
          </h2>
          <p className="text-[#555] max-w-2xl">
            SE Impianti DG specializzata nella progettazione di impianti elettrici civili e
            industriali di altissima qualità. Dalla progettazione alla certificazione, ogni
            impianto è una firma di precisione e affidabilità.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 overflow-x-auto pb-1">
          <div className="flex gap-6 border-b border-[#e0e0e0] min-w-max">
            {(Object.keys(tabsData) as TabId[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                data-testid={`tab-${tab}`}
                className={`pb-3 text-xs font-bold tracking-widest uppercase transition-colors relative whitespace-nowrap ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-[#888] hover:text-[#333]"
                }`}
              >
                {tabLabels[tab]}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBar"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Description paragraph */}
            <p className="text-[#444] text-sm leading-relaxed mb-8 max-w-3xl">
              {current.description}
            </p>

            {/* Two service boxes */}
            <div className="grid md:grid-cols-2 gap-6">
              {current.boxes.map((box, idx) => (
                <div
                  key={idx}
                  className="border border-[#e0e0e0] p-7 rounded-sm bg-white"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-xs font-bold tracking-widest uppercase text-[#111]">
                      {box.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {box.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#555]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
