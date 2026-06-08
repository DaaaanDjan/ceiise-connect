import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Award } from "lucide-react";
import auditorium from "@/assets/auditorium.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre el Congreso — CEIISE 2026" },
      { name: "description", content: "Conoce el comité organizador, misión y visión del Congreso Estudiantil IISE 2026." },
      { property: "og:title", content: "Sobre CEIISE 2026" },
      { property: "og:description", content: "Misión, visión y objetivos del Congreso Estudiantil IISE 2026." },
    ],
  }),
  component: AboutPage,
});

export function AboutPage() {
  return (
    <div>
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10">
          <img src={auditorium} alt="" className="w-full h-full object-cover opacity-25" width={1280} height={800} />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Institucional</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre el <span className="gradient-text">Congreso</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Un espacio académico construido desde y para los estudiantes de Ingeniería Industrial y de Sistemas.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">¿Quiénes somos?</h2>
            <p className="text-muted-foreground leading-relaxed">
              CEIISE es organizado por el Capítulo Estudiantil IISE en alianza con
              universidades e institutos de investigación de Latinoamérica.
              Desde 2019 hemos congregado a más de <strong className="text-foreground">2.000 asistentes</strong>
              y más de <strong className="text-foreground">200 ponentes</strong> en torno a los grandes desafíos
              de la ingeniería industrial moderna.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Nuestros objetivos</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" /> Promover investigación aplicada en estudiantes de pregrado y posgrado.</li>
              <li className="flex gap-3"><span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" /> Conectar a la academia con la industria y los tomadores de decisión.</li>
              <li className="flex gap-3"><span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" /> Difundir el conocimiento mediante publicaciones indexadas.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: "Misión", text: "Impulsar el desarrollo académico y profesional de la comunidad IISE a través de espacios de difusión científica de alto nivel." },
            { icon: Eye, title: "Visión", text: "Ser el congreso estudiantil de Ingeniería Industrial de referencia en Latinoamérica al 2030." },
            { icon: Award, title: "Valores", text: "Excelencia académica, integridad, colaboración interdisciplinaria y compromiso social." },
          ].map((c) => (
            <div key={c.title} className="glass-card rounded-2xl p-8 text-center">
              <div className="h-14 w-14 mx-auto rounded-2xl gradient-brand flex items-center justify-center mb-4 glow">
                <c.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
