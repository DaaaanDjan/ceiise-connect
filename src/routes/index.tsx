import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Calendar, MapPin, ArrowRight, Sparkles, Brain, Truck, Users, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import auditorium from "@/assets/auditorium.jpg";
import { AboutPage } from "./sobre";
import { ProgramPage } from "./programa";
import { PricingPage } from "./inscripciones";
import { PastPage } from "./ediciones";
import { ContactPage } from "./contacto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CEIISE 2026 — Liderazgo, Innovación y Logística Inteligente" },
      { name: "description", content: "Únete al Congreso Estudiantil IISE 2026. Tres días de conferencias, talleres y networking con líderes en innovación y logística inteligente." },
      { property: "og:title", content: "CEIISE 2026 — Congreso Estudiantil IISE" },
      { property: "og:description", content: "Liderazgo, Innovación y Logística Inteligente. Marzo 2026." },
    ],
  }),
  component: HomePage,
});

const EVENT_DATE = new Date("2026-08-03T08:30:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const ejes = [
  { icon: Sparkles, title: "Liderazgo Transformador", desc: "Nuevos modelos de liderazgo para entornos volátiles e inciertos." },
  { icon: Brain, title: "Innovación e Industria 4.0", desc: "IA, automatización y rediseño de procesos en la ingeniería moderna." },
  { icon: Truck, title: "Logística Inteligente", desc: "Cadenas de suministro resilientes, sostenibles y data-driven." },
  { icon: Users, title: "Gestión del Talento", desc: "Capital humano, ergonomía cognitiva y futuro del trabajo." },
];

const testimonios = [
  { name: "Dra. María Fernández", role: "PUCP — Ponente 2025", text: "CEIISE es uno de los espacios estudiantiles con mayor rigor académico del país. Una experiencia transformadora." },
  { name: "Carlos Quispe", role: "Asistente 2025", text: "Volví con contactos, ideas para mi tesis y la certeza de que la nueva generación de ingenieros viene con todo." },
  { name: "Prof. Andrés Romero", role: "U. de Chile — Ponente 2025", text: "Organización impecable y temas absolutamente vigentes. Será un placer regresar en 2026." },
];

const alianzas = ["UNI", "PUCP", "UNMSM", "USIL", "UPC", "ESAN", "U. de Chile", "Tec de Monterrey"];

function HomePage() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_DATE);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs uppercase tracking-widest mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Edición 2026 · Inscripciones abiertas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
              <span className="gradient-text">CEIISE 2026</span>
              <br />
              <span className="text-foreground">Liderazgo, Innovación &amp; Logística Inteligente</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Tres días para repensar la ingeniería industrial desde la innovación,
              la inteligencia logística y el liderazgo de la nueva generación.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> 18 — 20 Marzo 2026</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Lima, Perú</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#inscripciones" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-brand text-primary-foreground font-medium glow hover:scale-105 transition-transform animate-pulse-glow">
                Inscríbete ahora <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programa" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors">
                Ver programa
              </a>
            </div>
          </div>

          {/* Countdown */}
          <div className="glass-card rounded-2xl p-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">El congreso inicia en</p>
            <div className="grid grid-cols-4 gap-3">
              {[
                { v: days, l: "Días" },
                { v: hours, l: "Horas" },
                { v: minutes, l: "Min" },
                { v: seconds, l: "Seg" },
              ].map((b) => (
                <div key={b.l} className="text-center">
                  <div className="rounded-xl gradient-brand p-4 mb-2 glow">
                    <span className="text-3xl md:text-4xl font-bold font-display tabular-nums">
                      {String(b.v).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{b.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es? */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-sm uppercase tracking-widest text-primary mb-4">¿Qué es CEIISE?</h2>
          <p className="text-2xl md:text-3xl font-display leading-snug">
            El <span className="gradient-text font-semibold">Congreso Estudiantil IISE</span> reúne a investigadores,
            profesionales y estudiantes de Ingeniería Industrial para debatir las
            ideas que transformarán la industria de la próxima década.
          </p>
        </div>
      </section>

      {/* Ejes */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">Ejes <span className="gradient-text">temáticos</span></h2>
            <p className="text-muted-foreground">Líneas de investigación principales del congreso.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ejes.map((e) => (
              <div key={e.title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform">
                <div className="h-12 w-12 rounded-xl gradient-brand flex items-center justify-center mb-4">
                  <e.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10 opacity-30">
          <img src={auditorium} alt="" className="w-full h-full object-cover" width={1280} height={800} loading="lazy" />
          <div className="absolute inset-0 bg-background/80" />
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Lo que dicen de la <span className="gradient-text">edición 2025</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonios.map((t) => (
              <figure key={t.name} className="glass-card rounded-2xl p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-foreground/90 mb-6">"{t.text}"</blockquote>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">Con el respaldo de</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {alianzas.map((a) => (
              <span key={a} className="font-display font-semibold text-lg text-muted-foreground/70 hover:text-foreground transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative rounded-3xl gradient-hero p-12 md:p-16 text-center overflow-hidden glow">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
              <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
            </div>
            <h2 className="relative text-4xl md:text-5xl font-bold mb-4 text-white">
              Asegura tu lugar en CEIISE 2026
            </h2>
            <p className="relative text-white/80 mb-8 max-w-2xl mx-auto">
              Cupos limitados. Tarifa Early Bird disponible hasta el 31 de enero.
            </p>
            <a href="#inscripciones" className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-semibold hover:scale-105 transition-transform">
              Inscríbete ahora <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Secciones embebidas */}
      <div id="sobre" className="scroll-mt-20"><AboutPage /></div>
      <div id="programa" className="scroll-mt-20"><ProgramPage /></div>
      <div id="inscripciones" className="scroll-mt-20"><PricingPage /></div>
      <div id="ediciones" className="scroll-mt-20"><PastPage /></div>
      <div id="contacto" className="scroll-mt-20"><ContactPage /></div>
    </div>
  );
}
