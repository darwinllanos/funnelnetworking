"use client";

import { useEffect, useState, useRef } from "react";
import { Users, TrendingUp, Globe, Award } from "lucide-react";

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  {
    icon: Users,
    value: 5247,
    suffix: "+",
    label: "Vidas Impactadas",
    description: "Personas que han transformado su realidad financiera"
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Tasa de Éxito",
    description: "De nuestros socios activos logran sus metas"
  },
  {
    icon: Globe,
    value: 15,
    suffix: "",
    label: "Países",
    description: "Presencia internacional con equipos en crecimiento"
  },
  {
    icon: Award,
    value: 120,
    suffix: "+",
    label: "Líderes Formados",
    description: "Nuevos líderes que ahora impactan a otros"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary-foreground/80 font-medium mb-4">Impacto Real</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Números que cuentan historias
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/20 mb-4">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-lg font-semibold mb-1">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
