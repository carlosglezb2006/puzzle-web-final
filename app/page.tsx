import { Hero } from "@/components/sections/hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />

      {/* Value Proposition / Compact About Preview */}
      <section className="py-20 bg-industrial-900 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Fabricantes, no intermediarios. <br />
                <span className="text-industrial-yellow">La diferencia está en el taller.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                En Puzzle Pro-Works controlamos cada paso del proceso productivo. Esto nos permite garantizar plazos, ajustar costes y resolver desafíos técnicos que otros externalizan.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Carpintería propia de metal y madera",
                  "Maquinaria CNC de última generación",
                  "Instaladores certificados",
                  "Diseño técnico industrial"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-industrial-yellow shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Button size="lg" asChild className="text-base font-bold bg-white text-industrial-900 hover:bg-gray-100">
                  <Link href="/quienes-somos">
                    Conozca Nuestra Empresa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Visual side - could be an image collage later */}
            <div className="relative h-[500px] w-full bg-industrial-800 rounded-lg overflow-hidden border border-industrial-700">
              <div className="absolute inset-0 flex items-center justify-center text-industrial-500">
                <p className="text-center p-8 border-2 border-dashed border-industrial-600 rounded-xl">
                  [Imagen: Taller en funcionamiento / CNC trabajando / Soldadura] <br />
                  <span className="text-sm mt-2 block opacity-70">Transmite: Capacidad técnica y limpieza</span>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-industrial-yellow">
        <Container className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-industrial-900 mb-6">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-xl text-industrial-900/80 mb-10 max-w-2xl mx-auto font-medium">
            Hablemos de su negocio. Le asesoramos técnicamente desde la primera llamada, sin compromiso comercial agresivo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="h-16 px-10 text-lg bg-industrial-900 text-white hover:bg-black" asChild>
              <a href="tel:665030216">Llamar al 665 030 216</a>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-industrial-900 text-industrial-900 hover:bg-industrial-900/10" asChild>
              <Link href="/contacto">Escribir Mensaje</Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
