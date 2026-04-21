export default function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#1B365D] via-[#1a2f50] to-parchment">
      {/* Stained glass geometric pattern overlay */}
      <div className="hero-pattern absolute inset-0 opacity-80" />

      {/* Subtle light beam */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,228,160,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Cross motif */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-[0.06]">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="currentColor" className="text-gold">
          <rect x="25" y="0" width="10" height="80" />
          <rect x="5" y="20" width="50" height="10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
        {/* Decorative top accent */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-muted" />
          <span className="font-sans text-[0.7rem] tracking-[0.3em] uppercase text-gold-muted font-medium">
            Báo Cáo Nghiên Cứu Chuyên Sâu
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-muted" />
        </div>

        {/* Main title */}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#FAF8F1] leading-tight mb-6 tracking-tight">
          Vấn Đề Sự Ẩn Mình
          <br />
          <span className="text-gold">Của Thiên Chúa</span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-base sm:text-lg md:text-xl text-[#FAF8F1]/80 max-w-2xl mx-auto leading-relaxed mb-8 italic">
          Báo Cáo Nghiên Cứu Chuyên Sâu Về Đức Tin Trước Sự Tĩnh Lặng Của Thượng Đế
        </p>

      </div>

      {/* Bottom fade to parchment */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-parchment to-transparent" />
    </header>
  );
}
