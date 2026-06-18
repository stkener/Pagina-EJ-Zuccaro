import { useState } from "react";
import { Scale, Menu, X } from "lucide-react";

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "¿Por Qué Elegirnos?", href: "#porque-elegirnos" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0B2341]">
              <Scale
                size={30}
                className="text-[#D4AF37]"
              />
            </div>

            <div className="leading-tight">
              <p
                className="
                  text-[#0B2341]
                  font-semibold
                  tracking-[0.20em]
                  text-xs
                  uppercase
                "
              >
                Estudio Jurídico
              </p>

              <h1
                className="
                  text-[#0B2341]
                  font-bold
                  text-2xl
                  md:text-3xl
                "
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Amilibia & Zuccaro
              </h1>
            </div>
          </a>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  text-[#0B2341]
                  font-medium
                  hover:text-[#D4AF37]
                  transition
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          

          {/* Mobile button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <nav className="flex flex-col py-4">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  px-6
                  py-4
                  text-[#0B2341]
                  hover:bg-gray-50
                "
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            

          </nav>
        </div>
      )}
    </header>
  );
}