import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Ayuda y Contacto — CEIISE 2026" },
      { name: "description", content: "FAQ, comunidad de WhatsApp y teléfonos del comité de soporte de CEIISE 2026." },
      { property: "og:title", content: "Ayuda y Contacto — CEIISE 2026" },
      { property: "og:description", content: "Resuelve tus dudas sobre certificados, pagos y envío de trabajos." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "¿Cuándo recibiré mi certificado?", a: "Los certificados digitales se envían hasta 15 días hábiles después de finalizado el congreso al correo registrado." },
  { q: "¿Puedo solicitar factura institucional?", a: "Sí. Al momento de inscribirte, marca la casilla 'Requiero factura' e ingresa los datos fiscales de tu universidad o empresa." },
  { q: "¿Cuál es el formato para envío de trabajos?", a: "Aceptamos papers en formato IEEE (máx. 10 páginas) o resúmenes extendidos (4 páginas). Plantillas disponibles en el portal de envíos." },
  { q: "¿Hay descuento para estudiantes?", a: "Sí, los estudiantes con carné vigente acceden a un 25% de descuento sobre cualquier tarifa." },
  { q: "¿El congreso es presencial o híbrido?", a: "Es presencial en Lima, con transmisión en vivo de las conferencias magistrales para tarifa Premium." },
];

export function ContactPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div>
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Soporte</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Ayuda y <span className="gradient-text">Contacto</span></h1>
          <p className="text-lg text-muted-foreground">
            Estamos para resolver tus dudas sobre inscripciones, certificados y envío de trabajos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold mb-6">Preguntas frecuentes</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openIdx === i;
              return (
                <div key={f.q} className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-5">
          <a href="#" className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center mb-4 glow">
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Comunidad WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-3">Avisos rápidos, novedades y comunidad CEIISE.</p>
            <span className="text-sm text-primary">Unirme al grupo →</span>
          </a>

          <div className="glass-card rounded-2xl p-8">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center mb-4 glow">
              <Phone className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Comité de soporte</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Pagos: <span className="text-foreground">+51 999 111 222</span></li>
              <li>Registros: <span className="text-foreground">+51 999 333 444</span></li>
              <li>Académico: <span className="text-foreground">+51 999 555 666</span></li>
            </ul>
          </div>

          <a href="mailto:contacto@ceiise2026.org" className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform">
            <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center mb-4 glow">
              <Mail className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Correo oficial</h3>
            <p className="text-sm text-muted-foreground mb-3">Para consultas formales y prensa.</p>
            <span className="text-sm text-primary">contacto@ceiise2026.org</span>
          </a>
        </div>
      </section>
    </div>
  );
}
