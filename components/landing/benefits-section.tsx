"use client";

import { 
  Clock, 
  DollarSign, 
  Users, 
  GraduationCap, 
  Heart, 
  Globe,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Clock,
    title: "Libertad de Tiempo",
    description: "Decide cuándo y dónde trabajar. Sin horarios fijos ni jefes que te controlen.",
    features: ["Horarios flexibles", "Trabaja desde casa", "Vacaciones cuando quieras"]
  },
  {
    icon: DollarSign,
    title: "Ingresos Sin Límite",
    description: "Tu esfuerzo determina tus ganancias. No hay techo para tu potencial de ingresos.",
    features: ["Comisiones ilimitadas", "Bonos por rendimiento", "Ingresos residuales"]
  },
  {
    icon: Users,
    title: "Comunidad de Apoyo",
    description: "Nunca estarás solo. Tendrás un equipo que te guía y celebra tus victorias.",
    features: ["Mentorías semanales", "Grupo de WhatsApp activo", "Eventos de networking"]
  },
  {
    icon: GraduationCap,
    title: "Formación Continua",
    description: "Acceso a entrenamientos exclusivos que te convertirán en un líder.",
    features: ["Cursos premium incluidos", "Conferencias internacionales", "Certificaciones"]
  },
  {
    icon: Heart,
    title: "Propósito y Significado",
    description: "Más que un negocio, es una misión de transformar vidas y crear impacto.",
    features: ["Ayudas a otros a crecer", "Impacto positivo", "Legado familiar"]
  },
  {
    icon: Globe,
    title: "Negocio Global",
    description: "Trabaja con personas de todo el mundo y expande tu negocio sin fronteras.",
    features: ["Presencia en 15+ países", "Sin límites geográficos", "Networking internacional"]
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/50" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">¿Por qué unirte?</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Beneficios que transforman vidas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un negocio, es un estilo de vida. Descubre todo lo que ganarás
            al ser parte de nuestro equipo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <ul className="space-y-2">
                {benefit.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25">
            Quiero estos beneficios
          </Button>
        </div>
      </div>
    </section>
  );
}
