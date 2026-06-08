import { createFileRoute } from "@tanstack/react-router";
import { Download, Clock } from "lucide-react";
import speaker1 from "@/assets/speaker1.jpg";
import panel from "@/assets/panel.jpg";
import networking from "@/assets/networking.jpg";

export const Route = createFileRoute("/programa")({
  head: () => ({
    meta: [
      { title: "Programa Académico — CEIISE 2026" },
      { name: "description", content: "Cronograma completo, conferencias magistrales, talleres y ponentes confirmados de CEIISE 2026." },
      { property: "og:title", content: "Programa Académico — CEIISE 2026" },
      { property: "og:description", content: "Conferencias, talleres y ponentes de CEIISE 2026." },
    ],
  }),
  component: ProgramPage,
});

const dias = [
  {
    fecha: "Miércoles 18 Marzo",
    titulo: "Día 1 · Liderazgo",
    items: [
      { h: "08:30", t: "Acreditación y kit oficial" },
      { h: "09:30", t: "Ceremonia inaugural" },
      { h: "10:30", t: "Keynote: Liderar en la era de la IA — Dra. María Fernández" },
      { h: "12:30", t: "Panel: Mujeres en Ingeniería Industrial" },
      { h: "15:00", t: "Taller: Toma de decisiones bajo incertidumbre" },
      { h: "18:00", t: "Cóctel de bienvenida" },
    ],
  },
  {
    fecha: "Jueves 19 Marzo",
    titulo: "Día 2 · Innovación",
    items: [
      { h: "09:00", t: "Keynote: Industria 4.0 en Latinoamérica" },
      { h: "11:00", t: "Sesiones paralelas de papers" },
      { h: "14:00", t: "Workshop: Lean Six Sigma con IA" },
      { h: "16:30", t: "Mesa redonda: Startups de ingeniería" },
      { h: "19:00", t: "Networking dinner" },
    ],
  },
  {
    fecha: "Viernes 20 Marzo",
    titulo: "Día 3 · Logística Inteligente",
    items: [
      { h: "09:00", t: "Keynote: Supply chain resiliente — Prof. Andrés Romero" },
      { h: "11:00", t: "Casos de estudio: Falabella, Backus, Alicorp" },
      { h: "14:00", t: "Hackathon de optimización logística" },
      { h: "17:30", t: "Premiación y clausura" },
    ],
  },
];

const ponentes = [
  { name: "Dra. María Fernández", role: "PUCP · Liderazgo & IA", img: speaker1 },
  { name: "Prof. Andrés Romero", role: "U. de Chile · Supply Chain", img: panel },
  { name: "Ing. Lucía Mendoza", role: "MIT Sloan · Innovación", img: networking },
  { name: "Dr. Roberto Salazar", role: "Tec de Monterrey · Industria 4.0", img: speaker1 },
];

export function ProgramPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Programa</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">El <span className="gradient-text">corazón</span> del evento</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Tres días, +30 conferencias, 12 talleres y 60 ponencias indexadas.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-brand text-primary-foreground font-medium glow hover:scale-105 transition-transform"
          >
            <Download className="h-4 w-4" /> Descargar brochure (PDF)
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-3 gap-6">
          {dias.map((d) => (
            <div key={d.fecha} className="glass-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest text-primary mb-1">{d.fecha}</p>
              <h3 className="text-2xl font-bold mb-6">{d.titulo}</h3>
              <ul className="space-y-4">
                {d.items.map((i) => (
                  <li key={i.h} className="flex gap-3 text-sm">
                    <span className="flex items-center gap-1 text-primary font-mono shrink-0 w-14">
                      <Clock className="h-3 w-3" />{i.h}
                    </span>
                    <span className="text-foreground/90">{i.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="gradient-text">Ponentes</span> confirmados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ponentes.map((p) => (
              <article key={p.name} className="group glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
