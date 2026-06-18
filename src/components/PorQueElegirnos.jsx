import {
  UserCheck,
  Briefcase,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function PorQueElegirnos() {
  return (
    <section
      id="porque-elegirnos"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#d4af37] font-semibold mb-4">
            ¿Por qué elegirnos?
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#0f2747] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            La diferencia está en el acompañamiento
          </h2>

          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Trabajamos para brindar soluciones claras, atención cercana y
            respuestas efectivas, acompañando a nuestros clientes en cada etapa.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>

            

            {/*<p className="text-gray-600 leading-relaxed mb-10">
              Nuestro objetivo es ofrecer un servicio profesional,
              transparente y personalizado, brindando soluciones jurídicas
              y asesoramiento en seguros con una visión integral.
            </p>*/}

            <div className="space-y-8">

              <div className="flex gap-4">
                <UserCheck
                  size={34}
                  className="text-[#D4AF37] shrink-0 mt-1"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2342]">
                    Atención Personalizada
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Cada cliente recibe asesoramiento cercano y adaptado a sus
                    necesidades específicas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Briefcase
                  size={34}
                  className="text-[#D4AF37] shrink-0 mt-1"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2342]">
                    Compromiso Profesional
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Actuamos con responsabilidad, ética y una visión orientada
                    a resultados.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck
                  size={34}
                  className="text-[#D4AF37] shrink-0 mt-1"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2342]">
                    Confianza y Transparencia
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Comunicación clara y acompañamiento permanente durante todo
                    el proceso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Handshake
                  size={34}
                  className="text-[#D4AF37] shrink-0 mt-1"
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#0A2342]">
                    Asesoramiento Integral
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Combinamos experiencia jurídica y asesoramiento en seguros
                    para brindar soluciones completas.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Imagen */}
          <div>
            <img
              src="/porque-elegirnos.jpg"
              alt="Estudio Jurídico Amilibia & Zuccaro"
              className="rounded-xl shadow-xl object-cover w-full h-[650px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}