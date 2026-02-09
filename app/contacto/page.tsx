import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-industrial-900 text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Contacte con Nosotros</h1>
                    <p className="text-xl text-gray-300">
                        Presupuestos sin compromiso y asesoramiento técnico directo.
                    </p>
                </Container>
            </div>

            <Container className="pt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div>
                            <h2 className="text-2xl font-bold text-industrial-900 mb-6">Datos de Contacto</h2>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-industrial-yellow/10 text-industrial-900 rounded-lg flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase">Teléfono</p>
                                        <a href="tel:665030216" className="text-xl font-bold text-industrial-900 hover:text-industrial-orange">665 030 216</a>
                                        <p className="text-xs text-gray-500 mt-1">Atención directa, sin centralitas.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-industrial-yellow/10 text-industrial-900 rounded-lg flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase">Email</p>
                                        <a href="mailto:daniel@puzzlepro.es" className="text-xl font-bold text-industrial-900 hover:text-industrial-orange">daniel@puzzlepro.es</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-industrial-yellow/10 text-industrial-900 rounded-lg flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase">Dirección</p>
                                        <p className="text-lg text-industrial-900 font-medium">Avda. Argentina 132</p>
                                        <p className="text-gray-600">33213 Gijón, Asturias</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-industrial-yellow/10 text-industrial-900 rounded-lg flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500 uppercase">Horario Taller</p>
                                        <p className="text-lg text-industrial-900 font-medium">Lunes a Viernes</p>
                                        <p className="text-gray-600">08:00 - 13:00 / 15:00 - 18:00</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46369.46738561705!2d-5.6619574!3d43.532392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367c6691c78499%3A0x676579c09c3132e0!2sGij%C3%B3n%2C%20Asturias!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-125"
                                title="Mapa de ubicación"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 lg:order-2 bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold text-industrial-900 mb-6">Solicitar Presupuesto</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                                    <input id="name" type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-yellow focus:border-transparent" placeholder="Su nombre" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Empresa (Opcional)</label>
                                    <input id="company" type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-yellow focus:border-transparent" placeholder="Nombre empresa" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Teléfono *</label>
                                <input id="phone" type="tel" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-yellow focus:border-transparent" placeholder="600 000 000" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</label>
                                <input id="email" type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-yellow focus:border-transparent" placeholder="ejemplo@correo.com" required />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Detalles del proyecto</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-industrial-yellow focus:border-transparent" placeholder="Descripción breve de lo que necesita..." required></textarea>
                            </div>

                            <Button size="lg" className="w-full text-base font-bold h-12" type="submit">
                                Enviar Consulta
                            </Button>
                            <p className="text-xs text-gray-500 text-center mt-4">
                                Al enviar este formulario acepta nuestra política de privacidad.
                            </p>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
