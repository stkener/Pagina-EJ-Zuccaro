export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-[75vh] items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-law.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08152e]/80" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-[#d4af37]">
            Estudio Jurídico
          </p>

          <h1
            className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Amilibia & Zuccaro
          </h1>

          <div className="mb-8 h-[3px] w-24 bg-[#d4af37]" />

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Asesoramiento jurídico integral con profesionalismo,
            compromiso y atención personalizada.
          </p>

          <div className="flex gap-4">
            <a
                href="https://wa.me/541123642887"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-md transition-all duration-300 hover:bg-[#1ebe5d] hover:-translate-y-1 hover:shadow-xl"
            >
                WhatsApp
            </a>

            <button className="px-8 py-4 border border-white text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-[#08152e] hover:-translate-y-1 cursor-pointer">
                Ver Servicios
            </button>
           </div>
        </div>
      </div>

      {/* Indicador */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-white">
        ↓
      </div>
    </section>
  );
}