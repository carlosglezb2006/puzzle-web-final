import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Lightbulb, Store, Truck, PenTool } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "rotulos",
        title: "Rótulos e Iluminación",
        description: "Visibilidad 24/7 con tecnología LED de última generación. Cajas de luz, letras corpóreas y neón.",
        icon: Lightbulb,
        href: "/servicios#rotulos"
    },
    {
        id: "fachadas",
        title: "Fachadas y Revestimientos",
        description: "Renovación integral de la imagen exterior de su negocio mediante paneles de composite y chapa.",
        icon: Store,
        href: "/servicios#fachadas"
    },
    {
        id: "stands",
        title: "Stands y Eventos",
        description: "Arquitectura efímera para ferias. Diseño estructural y montaje llave en mano.",
        icon: Box,
        href: "/servicios#stands"
    },
    {
        id: "medida",
        title: "Elementos a Medida",
        description: "Metalistería y carpintería técnica para proyectos singulares y decoración comercial.",
        icon: PenTool,
        href: "/servicios#medida"
    },
    {
        id: "vehiculos",
        title: "Rotulación de Vehículos",
        description: "Publicidad en movimiento. Flotas comerciales y rotulación integral de furgonetas.",
        icon: Truck,
        href: "/servicios#vehiculos"
    }
];

export function ServicesPreview() {
    return (
        <section className="py-20 md:py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-industrial-900 mb-4">
                            Soluciones Integrales de Comunicación Visual
                        </h2>
                        <p className="text-lg text-gray-600">
                            Abarcamos todo el proceso: desde el diseño técnico y la fabricación en nuestro taller de Gijón hasta la instalación final.
                        </p>
                    </div>
                    <Button variant="secondary" asChild className="hidden md:flex">
                        <Link href="/servicios">Ver Todos los Servicios <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="group relative border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-lg overflow-hidden flex flex-col">
                            <div className="h-48 w-full relative overflow-hidden">
                                <PlaceholderImage text={`Foto Real: ${service.title}`} className="w-full h-full bg-industrial-200 text-industrial-800" />
                                <div className="absolute top-4 left-4 bg-industrial-yellow p-3 rounded-md text-industrial-900 shadow-md">
                                    <service.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-industrial-orange transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="text-sm font-bold text-industrial-900 flex items-center group-hover:underline decoration-industrial-yellow decoration-2 underline-offset-4">
                                        Saber más <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                            <Link href={service.href} className="absolute inset-0 z-10" aria-label={`Ver servicio ${service.title}`} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="secondary" asChild className="w-full">
                        <Link href="/servicios">Ver Todos los Servicios <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
