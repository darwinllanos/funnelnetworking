"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MotivationSection() {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 text-background/80 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Tu momento es ahora
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight text-balance">
            El único fracaso es{" "}
            <span className="text-primary">no intentarlo</span>
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-background/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            <p>
              Hace años, alguien me dio la oportunidad que cambió mi vida. 
              Hoy, yo quiero darte esa misma oportunidad a ti.
            </p>
            <p>
              No importa de dónde vengas, qué edad tengas o cuántas veces 
              hayas intentado algo antes. Lo que importa es tu decisión 
              de HOY.
            </p>
            <p className="font-semibold text-background">
              La pregunta no es si esto funciona. La pregunta es: 
              ¿estás dispuesto a hacer lo que sea necesario para 
              transformar tu vida?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-background text-foreground hover:bg-background/90 shadow-xl"
            >
              Sí, quiero cambiar mi vida
            </Button>
          </div>

          {/* Quote */}
          <div className="mt-16 pt-12 border-t border-background/10">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-background/90 mb-4">
              "Tu vida no mejora por casualidad, mejora por cambio"
            </blockquote>
            <p className="text-background/60">— Jim Rohn</p>
          </div>
        </div>
      </div>
    </section>
  );
}
