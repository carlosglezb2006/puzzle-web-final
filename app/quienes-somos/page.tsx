import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Factory, HardHat, Phone } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white pb-20">
            <div className="bg-industrial-900 text-white py-16">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Fabricantes desde Gijón para toda Asturias</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Más de 15 años dando forma a la imagen de empresas locales. Sin intermediarios, con taller propio y un equipo técnico especializado.
                    </p>
                </Container>
            </div>

            <Container className="pt-16">
                {/* Story / Mission */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-industrial-900">La diferencia de tratar con el fabricante</h2>
                        <div className="prose text-gray-600 leading-relaxed">
                            <p>
                                En <strong>Puzzle Pro-Works</strong> creemos que la calidad de un rótulo o un stand no solo se ve, se construye. A diferencia de agencias que subcontratan, nosotros contamos con <strong>taller propio en Gijón</strong> equipado con CNC, cabina de lacado y zona de montaje.
                            </p>
                            <p>
                                Esto nos permite:
                            </p>
                            <ul className="space-y-2 mt-4">
                                {[
                                    "Controlar la calidad de cada soldadura y acabado.",
                                    "Reducir costes eliminando intermediarios.",
                                    "Cumplir plazos de entrega rigurosos.",
                                    "Ofrecer repuestos y mantenimiento rápido."
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-industrial-yellow mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <PlaceholderImage text="Taller: Corte CNC" className="aspect-square rounded-lg bg-industrial-100 text-industrial-800" />
                            <PlaceholderImage text="Equipo soldando estructura" className="aspect-square rounded-lg bg-industrial-200 text-industrial-900 translate-y-8" />
                        </div>
                    </div>
                </div>

                {/* Values / Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-industrial-yellow/10 text-industrial-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                            <Factory className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-industrial-900 mb-2">Taller Propio</h3>
                        <p className="text-gray-600">Fabricación 100% local en nuestras instalaciones de Gijón.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-industrial-yellow/10 text-industrial-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                            <HardHat className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-industrial-900 mb-2">Instaladores Certificados</h3>
                        <p className="text-gray-600">Personal formado en trabajos en altura y prevención de riesgos.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-industrial-yellow/10 text-industrial-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-industrial-900 mb-2">Garantía Real</h3>
                        <p className="text-gray-600">Rótulos y estructuras diseñados para durar en el clima de Asturias.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-gray-50 rounded-2xl p-10 border border-gray-200">
                    <h2 className="text-2xl font-bold text-industrial-900 mb-4">¿Quiere visitar nuestras instalaciones?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Estaremos encantados de recibirle para mostrarle materiales y acabados para su proyecto. Cita previa recomendada.
                    </p>
                    <Button size="lg" asChild>
                        <a href="tel:665030216">
                            <Phone className="mr-2 h-5 w-5" />
                            Agendar Visita: 665 030 216
                        </a>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
