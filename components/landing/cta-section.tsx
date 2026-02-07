"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-32 bg-background" id="contacto">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <p className="text-primary font-medium mb-4">Da el primer paso</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Agenda tu llamada de descubrimiento gratuita
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  En 30 minutos te explicaré cómo funciona el negocio, 
                  responderé todas tus preguntas y juntos evaluaremos si 
                  esta oportunidad es para ti. Sin presiones, sin compromisos.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Llamada 100% gratuita y sin compromiso",
                  "Conocerás el plan de compensación completo",
                  "Resolverás todas tus dudas personalmente",
                  "Recibirás recursos exclusivos por email"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Contact Options */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Directo
                </a>
                <a 
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              {!isSubmitted ? (
                <>
                  <h3 className="text-xl font-bold text-card-foreground mb-6">
                    Reserva tu espacio ahora
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Tu nombre completo
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="María García"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Tu email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="maria@ejemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                        Tu WhatsApp
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+52 1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <Button type="submit" className="w-full h-14 text-lg rounded-xl shadow-lg shadow-primary/25">
                      Agendar mi llamada gratis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Tus datos están seguros. No compartimos tu información con terceros.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">
                    ¡Excelente decisión!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Te contactaré en las próximas 24 horas para agendar 
                    tu llamada de descubrimiento. Revisa tu email y WhatsApp.
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Mientras tanto, sígueme en redes sociales para más contenido de valor.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
