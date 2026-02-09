import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";

const detailedServices = [
    {
        id: "rotulos",
        title: "Rótulos Corporativos e Iluminación",
        description: "La primera impresión de su negocio. Fabricamos rótulos que destacan día y noche.",
        details: [
            "Letras Corpóreas (Aluminio, Acero, Metacrilato)",
            "Cajas de luz con frontal textil o rígido",
            "Neón LED flexible de alta durabilidad",
            "Banderolas y tótems informativos"
        ],
        idealFor: "Comercios, Hoteles, Restaurantes, Clínicas",
        imageText: "Ejemplo: Rótulo luminoso farmacia o hotel de lujo"
    },
    {
        id: "fachadas",
        title: "Revestimiento de Fachadas",
        description: "Modernice su nave o local comercial sin obra civil compleja using composite de aluminio.",
        details: [
            "Panel Composite (Dibond/Alucobond)",
            "Fachadas ventiladas",
            "Recubrimientos de pilares y marquetería",
            "Lacados a color corporativo (RAL exacto)"
        ],
        idealFor: "Naves industriales, Concesionarios, Franquicias",
        imageText: "Ejemplo: Antes/Después de una fachada de concesionario"
    },
    {
        id: "stands",
        title: "Stands para Ferias y Eventos",
        description: "Espacios efímeros que comunican marca. Diseño, fabricación y montaje integral.",
        details: [
            "Stands de diseño a medida (carpintería)",
            "Stands modulares reutilizables",
            "Mostradores y mobiliario corporativo",
            "Impresión de gran formato y lonas"
        ],
        idealFor: "Ferias de muestras (FIDMA), Congresos, Pop-up stores",
        imageText: "Ejemplo: Stand de diseño en feria tecnológica"
    },
    {
        id: "medida",
        title: "Elementos Singulares y Metalistería",
        description: "Si se puede dibujar, lo podemos fabricar. Soluciones técnicas complejas.",
        details: [
            "Estructuras metálicas decorativas",
            "Trofeos y señalética interior personalizada",
            "Mobiliario comercial a medida",
            "Prototipos y piezas únicas"
        ],
        idealFor: "Estudios de arquitectura, Interioristas, Marcas exclusivas",
        imageText: "Ejemplo: Escultura corpórea o mueble recepción único"
    },
    {
        id: "vehiculos",
        title: "Rotulación de Flotas",
        description: "Convierta sus vehículos en vallas publicitarias móviles.",
        details: [
            "Rotulación integral (Car wrapping)",
            "Vinilo de corte de alta duración",
            "Laminados protectores UV",
            "Imanes y marcaje temporal"
        ],
        idealFor: "Empresas de reparto, Servicios técnicos, Comerciales",
        imageText: "Ejemplo: Flota de furgonetas rotulada"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white pb-20">
            {/* Header */}
            <div className="bg-industrial-900 text-white py-16 md:py-24">
                <Container>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Soluciones de fabricación propia para cubrir todas las necesidades de imagen física de su empresa.
                    </p>
                </Container>
            </div>

            <Container className="pt-16">
                <div className="space-y-24">
                    {detailedServices.map((service, idx) => (
                        <div key={service.id} id={service.id} className={`flex flex-col gap-10 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                            {/* Visual */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-100">
                                    <PlaceholderImage text={service.imageText} className="w-full h-full bg-industrial-100 text-industrial-800" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 space-y-6">
                                <h2 className="text-3xl font-bold text-industrial-900">{service.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h3 className="font-semibold text-industrial-900 mb-4 uppercase text-sm tracking-wide">Qué incluimos:</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {service.details.map((detail) => (
                                            <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                                                <Check className="w-4 h-4 text-industrial-yellow mt-1 shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button asChild>
                                        <Link href="/contacto">Pedir Presupuesto <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                    </Button>
                                    <div className="text-sm text-gray-500 py-2 px-3 bg-gray-50 rounded italic border border-gray-100">
                                        Ideal para: <span className="font-medium text-industrial-800">{service.idealFor}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Band */}
                <div className="mt-24 bg-industrial-yellow rounded-xl p-8 md:p-12 text-center shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-industrial-900 mb-4">¿No encuentra lo que busca?</h2>
                    <p className="text-industrial-900/80 mb-8 max-w-2xl mx-auto font-medium">
                        Al ser fabricantes, podemos adaptarnos a proyectos especiales fuera de catálogo. Cuéntenos su idea.
                    </p>
                    <Button size="lg" className="bg-industrial-900 text-white hover:bg-black" asChild>
                        <a href="tel:665030216">
                            <Phone className="mr-2 h-5 w-5" />
                            Consultar con Taller: 665 030 216
                        </a>
                    </Button>
                </div>

            </Container>
        </div>
    );
}
