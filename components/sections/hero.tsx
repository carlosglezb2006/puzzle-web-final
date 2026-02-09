import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-industrial-900 border-b-4 border-industrial-yellow">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                {/* <Image src="/images/hero-bg.jpg" ... />  -- Replaced with placeholder for now */}
                <PlaceholderImage
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    text="Fondo: Taller o Rótulo Luminoso de Alta Calidad"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/60 to-transparent" />
            </div>

            <Container className="relative z-10 flex flex-col items-start pt-20">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block bg-industrial-yellow/90 text-industrial-900 font-bold px-4 py-1 rounded-sm text-sm uppercase tracking-wider mb-2">
                        Fabricación Propia en Gijón
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                        Rótulos, Stands y <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-yellow to-white">
                            Elementos Singulares
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed">
                        Diseño técnico y fabricación a medida para empresas que valoran su imagen.
                        Sin intermediarios, trato directo y calidad visible.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button size="lg" className="text-base h-14 px-8" asChild>
                            <a href="tel:665030216">
                                <Phone className="mr-2 h-5 w-5" />
                                Llamar Ahora: 665 030 216
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="text-base h-14 px-8 border-white text-industrial-900 hover:bg-white/10 hover:text-white" asChild>
                            <Link href="/contacto">
                                Pedir Presupuesto
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
