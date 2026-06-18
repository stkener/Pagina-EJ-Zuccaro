import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium mb-4">
            Contacto
          </p>

          <h2 className="font-serif text-5xl text-[#0A2342] mb-6">
            Estamos para ayudarte
          </h2>

          <div className="w-14 h-[3px] bg-[#D4AF37] mx-auto mb-6"></div>

          <p className="text-gray-600 leading-relaxed">
            Si necesitás asesoramiento jurídico o información sobre coberturas
            de seguros, podés comunicarte con nosotros por cualquiera de
            nuestros canales.
          </p>
        </div>

        {/* Contenido */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Datos */}
          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="text-[#D4AF37]">
                <MapPin size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2">
                  Dirección
                </h3>

                <p className="text-gray-600">
                  Dr. Mario Bravo 272
                  <br />
                  Villa Tesei, Provincia de Buenos Aires
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#D4AF37]">
                <Phone size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2">
                  Teléfono / WhatsApp
                </h3>

                <p className="text-gray-600">
                  11 2364-2887
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#D4AF37]">
                <Mail size={28} />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0A2342] mb-2">
                  Correo Electrónico
                </h3>

                <p className="text-gray-600">
                  zuccarolegales@gmail.com
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/541123642887"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <MessageCircle size={22} />
              Enviar WhatsApp
            </a>

          </div>

          {/* Mapa */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=Dr.%20Mario%20Bravo%20272%20Villa%20Tesei&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Estudio Jurídico Amilibia & Zuccaro"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;