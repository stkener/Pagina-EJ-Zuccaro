import {
  Scale,
  Users,
  FileText,
  Briefcase,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description:
      "Asesoramiento y representación en conflictos civiles, daños y reclamos.",
  },
  {
    icon: Users,
    title: "Derecho de Familia",
    description:
      "Divorcios, alimentos, cuidado personal y cuestiones familiares.",
  },
  {
    icon: FileText,
    title: "Sucesiones",
    description:
      "Tramitación sucesoria y asesoramiento patrimonial integral.",
  },
  {
    icon: Briefcase,
    title: "Contratos y Reclamos",
    description:
      "Redacción, revisión y análisis de contratos y obligaciones.",
  },
  {
    icon: Landmark,
    title: "Asesoramiento Jurídico",
    description:
      "Consultoría legal preventiva para particulares y empresas.",
  },
  {
    icon: ShieldCheck,
    title: "Seguros",
    description:
      "Asesoramiento profesional en coberturas para personas, vehículos, hogar y comercios.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#d4af37] font-semibold mb-4">
            Nuestros Servicios
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#0f2747] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Soluciones legales y asesoramiento profesional
          </h2>

          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-6"></div>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Brindamos acompañamiento profesional, atención personalizada
            y soluciones adaptadas a las necesidades de cada cliente.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  bg-white
                  p-8
                  rounded-lg
                  shadow-sm
                  border
                  border-gray-100
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#d4af37]" />
                </div>

                <h3 className="text-xl font-semibold text-[#0f2747] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}