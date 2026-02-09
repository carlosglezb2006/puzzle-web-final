import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-industrial-900 text-gray-300">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Puzzle Pro-Works</h3>
                        <p className="text-sm leading-relaxed max-w-xs text-gray-400">
                            Expertos en fabricación de rótulos, elementos singulares y carpintería técnica en Asturias. Soluciones a medida con taller propio.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Navegación</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/servicios" className="hover:text-industrial-yellow transition-colors">Servicios</Link></li>
                            <li><Link href="/portfolio" className="hover:text-industrial-yellow transition-colors">Proyectos</Link></li>
                            <li><Link href="/quienes-somos" className="hover:text-industrial-yellow transition-colors">Quiénes Somos</Link></li>
                            <li><Link href="/contacto" className="hover:text-industrial-yellow transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-industrial-yellow shrink-0" />
                                <span>Avda. Argentina 132<br />33213 Gijón, Asturias</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-industrial-yellow shrink-0" />
                                <a href="tel:665030216" className="hover:text-white">665 030 216</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-industrial-yellow shrink-0" />
                                <a href="mailto:daniel@puzzlepro.es" className="hover:text-white">daniel@puzzlepro.es</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Horario</h4>
                        <p className="text-sm text-gray-400">
                            Lunes a Viernes<br />
                            08:00 - 18:00
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            {/* Placeholders for social icons if needed */}
                            {/* <Instagram className="h-6 w-6 hover:text-industrial-yellow cursor-pointer" /> */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Puzzle Pro-Works. Todos los derechos reservados.</p>
                </div>
            </Container>
        </footer>
    );
}
