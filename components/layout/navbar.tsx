"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Quiénes Somos", href: "/quienes-somos" },
    { name: "Contacto", href: "/contacto" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-10 w-10 bg-industrial-900 flex items-center justify-center rounded-sm">
                                <span className="text-industrial-yellow font-bold text-2xl">P</span>
                            </div>
                            <span className="hidden md:inline-block text-xl font-bold uppercase tracking-tight text-industrial-900">
                                Puzzle Pro-Works
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors hover:text-industrial-yellow uppercase tracking-wide"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild size="sm" className="ml-4 gap-2">
                            <a href="tel:665030216">
                                <Phone className="h-4 w-4" />
                                665 030 216
                            </a>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="flex items-center space-x-2 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium transition-colors hover:text-industrial-yellow block py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild className="w-full gap-2 mt-4">
                            <a href="tel:665030216">
                                <Phone className="h-4 w-4" />
                                Llamar Ahora
                            </a>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
