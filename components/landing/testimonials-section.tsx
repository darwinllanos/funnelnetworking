"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Paula Sarmiento",
    role: "Empleada McDonald's | modelo UGC INNOVA",
    image: "/testimonio-1.png",
    quote: "Trabajaba en un call-center con horarios agotadores y poco reconocimiento. Desde que me uní a este negocio, no solo tripliqué mis ingresos en 18 meses, sino que también encontré una comunidad de apoyo que me ha ayudado a crecer personal y profesionalmente.",
    results: "Ingresos x3"
  },
  {
    name: "Thomas Vargas",
    role: "Universitario | Networker top 100",
    image: "/testimonio-2.png",
    quote: "Empecé este negocio mientras estudiaba, buscando una forma de generar ingresos sin sacrificar mis estudios. En menos de 2 años, no solo logré pagar mi carrera, sino que también alcancé la libertad financiera que siempre soñé.",
    results: "Libertad de tiempo total"
  },
  {
    name: "Cata Castiblanco",
    role: "Emprendedora | Co fundadora de su equipo",
    image: "/testimonio-3.png",
    quote: "Con 19 años, me uní a este negocio buscando una oportunidad de crecimiento. En solo 12 meses, no solo dupliqué mis ingresos, sino que también tuve la oportunidad de viajar por el mundo gracias a los resultados que obtuve con mi equipo.",
    results: "Viajes pagados x5"
  },
  {
    name: "Sebastian Salas",
    role: "Tatuador | Lider de su equipo",
    image: "/testimonio-4.png",
    quote: "Después de años trabajando como tatuador, me uní a este negocio buscando una forma de diversificar mis ingresos. En menos de 6 meses, no solo logré renunciar a mi empleo, sino que también construí un equipo sólido que me ha permitido alcanzar la libertad financiera.",
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
