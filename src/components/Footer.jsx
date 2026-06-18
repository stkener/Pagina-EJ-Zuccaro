import { Mail, Phone, MapPin, Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2342] text-white">
      <div className="container mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Estudio */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Scale className="text-[#D4AF37]" size={30} />

              <div>
                <p className="text-xs uppercase tracking-[4px] text-[#D4AF37]">
                  Estudio Jurídico
                </p>

                <h3 className="font-serif text-2xl">
                  Amilibia & Zuccaro
                </h3>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Asesoramiento jurídico integral y asesoramiento profesional
              en seguros, con atención personalizada, compromiso y
              acompañamiento en cada etapa.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[3px] text-sm mb-5">
              Contacto
            </h4>

            <div className="space-y-4">

              <div className="flex gap-3 items-start">
                <Phone
                  size={18}
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  11 2364-2887
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <Mail
                  size={18}
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  zuccarolegales@gmail.com
                </span>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin
                  size={18}
                  className="text-[#D4AF37] mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  Dr. Mario Bravo 272
                  <br />
                  Villa Tesei, Buenos Aires
                </span>
              </div>

            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-[#D4AF37] uppercase tracking-[3px] text-sm mb-5">
              Navegación
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#nosotros"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#porque-elegirnos"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  ¿Por Qué Elegirnos?
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Estudio Jurídico Amilibia & Zuccaro.
            Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;