"use client";

import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { label: "Mi Historia", href: "#historia" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                MC
              </div>
              <div>
                <p className="font-bold text-lg">María Carmen López</p>
                <p className="text-sm text-background/60">Líder Diamond</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando vidas a través del network marketing desde 2017. 
              Mi misión es ayudarte a alcanzar la libertad que mereces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Sígueme en Redes</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-background/70">
              <p>Email: maria@ejemplo.com</p>
              <p>WhatsApp: +52 1 234 567 8900</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} María Carmen López. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
