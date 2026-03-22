"use client";

import { Quote } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-20 lg:py-32 bg-card" id="historia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Mi Historia</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground text-balance">
              De lo tradicional a lo extraordinario: Mi viaje de transformación personal
            </h2>
          </div>

          {/* Story Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="/equipoinnova.jpeg"
                  alt="Equipo de trabajo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Quote Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <Quote className="h-8 w-8 opacity-50 mb-2" />
                <p className="text-sm italic">
                  "El mejor momento para empezar fue ayer. El segundo mejor momento es ahora."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hace 6 años, mi vida era muy diferente. Trabajaba más de 8 horas 
                  diarias en un empleo que apenas me permitía llegar a fin de mes. 
                  No tenía tiempo para mi familia, vivía estresado y sentía que 
                  mi vida se escapaba entre las manos.
                </p>
                <p>
                  Un día, un amigo me habló de esta oportunidad. Al principio 
                  fui escéptico, pero algo en mi corazón me dijo que tenía que 
                  intentarlo. <strong className="text-card-foreground">Fue la mejor decisión de mi vida.</strong>
                </p>
                <p>
                  Hoy disfruto de los negocios digitales, me puedo permitir trabajar desde cualquier 
                  parte del mundo y, lo más importante, tengo tiempo de calidad 
                  con las personas que amo. Hemos ayudado junto con mi equipo a más de 5,000 personas 
                  a transformar sus vidas de la misma manera.
                </p>
              </div>

              {/* Timeline */}
              <div className="border-l-2 border-primary/30 pl-6 space-y-6 mt-8">
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">2024</p>
                  <p className="font-semibold text-card-foreground">Me di cuenta que lo tradicional no me iba a llevar a donde quería</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-primary/60" />
                  <p className="text-sm text-muted-foreground">2025</p>
                  <p className="font-semibold text-card-foreground">Tuve la oportunidad de unirme al equipo de INNOVA</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 w-4 h-4 rounded-full bg-accent" />
                  <p className="text-sm text-muted-foreground">2026</p>
                  <p className="font-semibold text-card-foreground"> Embajador con +5,000 vidas transformadas junto con mi equipo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
