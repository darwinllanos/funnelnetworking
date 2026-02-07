"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Oportunidad de negocio disponible
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance">
              Transforma tu vida y{" "}
              <span className="text-primary">alcanza la libertad</span> que mereces
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Descubre cómo miles de personas han cambiado su destino financiero 
              construyendo un negocio desde casa con un sistema probado y el 
              acompañamiento de un equipo ganador.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                Quiero saber más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full bg-transparent"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-5 w-5" />
                Ver mi historia
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">5,000+</p>
                <p className="text-sm text-muted-foreground">Vidas transformadas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">8 años</p>
                <p className="text-sm text-muted-foreground">De experiencia</p>
              </div>
              <div className="text-3xl font-bold text-foreground text-center">
                <p>Top 1%</p>
                <p className="text-sm text-muted-foreground font-normal">De la compañía</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-secondary relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Emprendedora exitosa"
                  className="w-full h-full object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      MC
                    </div>
                    <div>
                      <p className="font-semibold text-card-foreground">María Carmen López</p>
                      <p className="text-sm text-muted-foreground">Líder Diamond | Coach de Vida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="bg-card rounded-2xl p-2 max-w-4xl w-full shadow-2xl">
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">Video de presentación</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
