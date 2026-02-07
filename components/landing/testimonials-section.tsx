"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Roberto García",
    role: "Ex-Contador | Ahora Líder Platino",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote: "Después de 20 años en un trabajo que no me llenaba, encontré en este negocio la posibilidad de ser mi propio jefe. En solo 18 meses logré igualar mi sueldo anterior y hoy gano el triple trabajando desde casa.",
    results: "Ingresos x3 en 18 meses"
  },
  {
    name: "Ana Martínez",
    role: "Madre de 3 | Líder Diamond",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote: "Como mamá, mi prioridad siempre fue estar presente para mis hijos. Este negocio me dio la flexibilidad que necesitaba. Ahora trabajo mientras ellos están en la escuela y tenemos las tardes libres juntos.",
    results: "Libertad de tiempo total"
  },
  {
    name: "Carlos Mendoza",
    role: "Ex-Ingeniero | Top Producer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    quote: "Era escéptico al principio, pero los resultados hablan por sí solos. El sistema funciona, el equipo te apoya y los productos se venden solos. Es cuestión de ser consistente y confiar en el proceso.",
    results: "Viajes pagados x5"
  },
  {
    name: "Laura Sánchez",
    role: "Ex-Maestra | Líder Esmeralda",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    quote: "Dejé mi trabajo como maestra porque este negocio me permitió ganar más ayudando a otros a crecer. Lo mejor es que sigo enseñando, pero ahora enseño a las personas a construir su libertad financiera.",
    results: "Renunció a su empleo en 1 año"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-background" id="testimonios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Testimonios Reales</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lo que dicen quienes ya lo viven
          </h2>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-card-foreground mb-6 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <p className="font-bold text-card-foreground text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
                    {testimonials[currentIndex].results}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-transparent"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-transparent"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Grid of Mini Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                index === currentIndex 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border bg-card hover:border-primary/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                "{testimonial.quote.substring(0, 80)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
