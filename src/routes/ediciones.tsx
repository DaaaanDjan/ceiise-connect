import { createFileRoute } from "@tanstack/react-router";
import auditorium from "@/assets/auditorium.jpg";
import speaker1 from "@/assets/speaker1.jpg";
import panel from "@/assets/panel.jpg";
import networking from "@/assets/networking.jpg";

export const Route = createFileRoute("/ediciones")({
  head: () => ({
    meta: [
      { title: "Ediciones Anteriores — CEIISE" },
      { name: "description", content: "Revive CEIISE 2025: +500 asistentes, 15 países, +80 artículos indexados. Galería y memorias." },
      { property: "og:title", content: "Ediciones Anteriores CEIISE" },
      { property: "og:description", content: "Memorias, estadísticas y galería de las ediciones pasadas de CEIISE." },
    ],
  }),
  component: PastPage,
});

const stats = [
  { v: "+500", l: "Asistentes" },
  { v: "15", l: "Países" },
  { v: "+80", l: "Artículos indexados" },
  { v: "+30", l: "Ponentes" },
];

const gallery = [auditorium, speaker1, panel, networking, auditorium, panel];

export function PastPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Ediciones anteriores</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Una <span className="gradient-text">trayectoria</span> que respalda
          </h1>
          <p className="text-lg text-muted-foreground">
            Memorias y datos de la edición CEIISE 2025.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.l} className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-2 font-display">{s.v}</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Edición 2025 */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden glow">
            <img src={auditorium} alt="Edición 2025" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">Memorias <span className="gradient-text">2025</span></h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              CEIISE 2025 superó todas las expectativas: tres días de conferencias magistrales,
              talleres aplicados y una hackathon en la que más de 80 estudiantes diseñaron
              soluciones logísticas en tiempo real. Las memorias completas, junto con la
              compilación de papers indexados, están disponibles para descarga.
            </p>
            <a href="#" className="inline-flex px-6 py-3 rounded-full gradient-brand text-primary-foreground font-medium glow hover:scale-105 transition-transform">
              Descargar memorias 2025
            </a>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold mb-10 text-center">Galería</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={src} alt={`Galería ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
