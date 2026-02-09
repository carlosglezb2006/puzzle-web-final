"use client";

import { Container } from "@/components/ui/container";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Mock data for portfolio
const projects = [
    { id: 1, title: "Farmacia Central", category: "Rotulación", imageText: "Cruz Led y Letras Corpóreas" },
    { id: 2, title: "Stand FIDMA 2024", category: "Stands", imageText: "Stand madera con iluminación" },
    { id: 3, title: "Nave Industrial Alusig", category: "Fachadas", imageText: "Revestimiento composite gris" },
    { id: 4, title: "Flota Reparto Panadería", category: "Vehículos", imageText: "Furgonetas rotuladas 100%" },
    { id: 5, title: "Hotel Asturias", category: "Rotulación", imageText: "Monolito entrada y señalética" },
    { id: 6, title: "Clínica Dental", category: "Interiores", imageText: "Vinilos ácido y recepción" },
];

const categories = ["Todos", "Rotulación", "Fachadas", "Stands", "Vehículos", "Interiores"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredProjects = activeCategory === "Todos"
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-white min-h-screen pb-20">
            <div className="bg-industrial-900 text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Nuestros Proyectos</h1>
                    <p className="text-xl text-gray-300">
                        Una selección de trabajos realizados en Asturias. Calidad visible en cada detalle.
                    </p>
                </Container>
            </div>

            <Container className="pt-12">
                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "rounded-full px-6",
                                activeCategory === cat ? "bg-industrial-yellow text-industrial-900 hover:bg-industrial-orange border-transparent" : "border-gray-300 text-gray-600"
                            )}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="group cursor-pointer">
                            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                                <PlaceholderImage
                                    text={project.imageText}
                                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <span className="text-white font-medium">Ver detalle</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-industrial-900 group-hover:text-industrial-yellow transition-colors">{project.title}</h3>
                            <p className="text-sm text-gray-500">{project.category}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
