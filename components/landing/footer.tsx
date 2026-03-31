"use client";

import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/darwinll11?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jhonllanosfullstack", label: "LinkedIn" },
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
              <img src="/jhonllanos.png" alt="Jhon Llanos" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-bold text-lg">Jhon Darwin Llanos Narvaez</p>
                <p className="text-sm text-background/60">Coach de vida</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando vidas a través del network marketing. 
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
              <p>Email: jhondarwinllanosnarvaez@gmail.com</p>
              <p>WhatsApp: +57 316 374 6711</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Jhon Darwin Llanos Narvaez. Todos los derechos reservados.
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
