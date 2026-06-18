import {
  Scale,
  ShieldCheck,
  Handshake,
  UserCheck,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div>
            <img
              src="/about.jpg"
              alt="Estudio Jurídico Amilibia & Zuccaro"
              className="w-full h-[550px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Contenido */}
          <div>

            <p className="uppercase tracking-[4px] text-[#d4af37] font-semibold mb-4">
              Sobre Nosotros
            </p>

            <h2
              className="text-4xl md:text-5xl text-[#0f2747] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Compromiso, experiencia y confianza
            </h2>

            <div className="w-20 h-1 bg-[#d4af37] mb-8"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              En <strong>Amilibia & Zuccaro</strong> brindamos
              asesoramiento jurídico integral con un enfoque profesional,
              cercano y personalizado.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nuestro compromiso es acompañar a cada cliente en la búsqueda
              de soluciones jurídicas eficaces, ofreciendo atención
              responsable, confidencial y orientada a resultados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
              El estudio está integrado por los abogados
              <strong> Lorena Silvana Zuccaro </strong>
              y
              <strong> Sebastián Amilibia</strong>, quien además se
              desempeña como <strong>Productor Asesor de Seguros</strong>,
              incorporando una visión complementaria para la protección
              patrimonial y la gestión de riesgos.
            </p>

            {/* Características */}

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="flex gap-4">
                <Scale className="text-[#d4af37] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0f2747]">
                    Asesoramiento Jurídico
                  </h3>
                  <p className="text-sm text-gray-600">
                    Soluciones legales adaptadas a cada caso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-[#d4af37] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0f2747]">
                    Productor Asesor de Seguros
                  </h3>
                  <p className="text-sm text-gray-600">
                    Protección para personas, familias y empresas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <UserCheck className="text-[#d4af37] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0f2747]">
                    Atención Personalizada
                  </h3>
                  <p className="text-sm text-gray-600">
                    Seguimiento cercano y profesional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Handshake className="text-[#d4af37] w-8 h-8 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#0f2747]">
                    Confianza y Compromiso
                  </h3>
                  <p className="text-sm text-gray-600">
                    Relaciones basadas en transparencia y responsabilidad.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}