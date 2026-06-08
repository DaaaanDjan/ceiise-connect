import { createFileRoute } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/inscripciones")({
  head: () => ({
    meta: [
      { title: "Inscripciones — CEIISE 2026" },
      { name: "description", content: "Tarifas Estándar, VIP y Premium para CEIISE 2026. Inscríbete con descuento Early Bird." },
      { property: "og:title", content: "Inscripciones CEIISE 2026" },
      { property: "og:description", content: "Compara tarifas y asegura tu cupo en CEIISE 2026." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Estándar",
    price: "S/ 120",
    desc: "Acceso al congreso completo.",
    features: ["Acceso a las 3 jornadas", "Material digital", "Certificado de asistencia", "Coffee breaks"],
    cta: "Inscribirme",
    featured: false,
  },
  {
    name: "VIP",
    price: "S/ 280",
    desc: "Vive una experiencia completa con beneficios exclusivos.",
    features: [
      "Todo lo de Estándar",
      "Asientos preferenciales",
      "Acceso a workshops cerrados",
      "Almuerzo con ponentes",
      "Kit oficial CEIISE",
    ],
    cta: "Quiero VIP",
    featured: true,
  },
  {
    name: "Premium",
    price: "S/ 450",
    desc: "Para investigadores y profesionales senior.",
    features: [
      "Todo lo de VIP",
      "Publicación de paper indexado",
      "Reunión 1:1 con keynote speaker",
      "Networking dinner premium",
      "Acceso a grabaciones por 12 meses",
    ],
    cta: "Quiero Premium",
    featured: false,
  },
];

export function PricingPage() {
  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Inscripciones</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Elige tu <span className="gradient-text">experiencia</span></h1>
          <p className="text-lg text-muted-foreground">
            Tarifas Early Bird disponibles hasta el 31 de enero de 2026.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.featured
                  ? "gradient-brand text-primary-foreground glow scale-[1.02]"
                  : "glass-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-primary text-xs font-semibold">
                  <Sparkles className="h-3 w-3" /> Más popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-1">{t.name}</h3>
              <p className={`text-sm mb-6 ${t.featured ? "text-white/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <div className="text-5xl font-bold font-display mb-6">{t.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-white" : "text-primary"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-center px-5 py-3 rounded-full font-medium transition-transform hover:scale-105 ${
                  t.featured
                    ? "bg-white text-primary"
                    : "gradient-brand text-primary-foreground glow"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 px-6">
          ¿Necesitas factura institucional o inscripción grupal? Escríbenos a{" "}
          <a href="mailto:inscripciones@ceiise2026.org" className="text-primary hover:underline">
            inscripciones@ceiise2026.org
          </a>
        </p>
      </section>
    </div>
  );
}
