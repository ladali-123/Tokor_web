import kitchenVideo from '../assets/kitchen.mp4';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative w-full h-[90vh] min-h-[600px] md:min-h-[560px] md:h-[85vh] 
    max-h-[800px] overflow-hidden bg-[#0A1628]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src={kitchenVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/30 to-[#0A1628]/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 via-transparent to-[#0A1628]/60" />

      {/* Corner Decorations - hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute top-4 left-6 w-16 h-16 border-t border-l border-[#F4B400]/30" />
      <div className="hidden md:block absolute bottom-6 right-6 w-16 h-14 border-b border-r border-[#F4B400]/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-6 md:px-4">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="hidden sm:block w-6 sm:w-8 h-px bg-[#F4B400]/60" />
          <p className="text-[#F4B400] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em]">
            Best Open Kitchen · Patna
          </p>
          <span className="hidden sm:block w-6 sm:w-8 h-px bg-[#F4B400]/60" />
        </div>

        {/* Main Heading */}
        <h1 className="font-['Playfair_Display'] text-[#FFF8E7] text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-2 sm:mb-3">
          Experience the<br className="hidden sm:block" />Heart of{' '}
          <span className="text-[#F4B400] relative inline-block">
            TOKOR
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F4B400] to-[#ffdc70]" />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-[#FFF8E7]/60 text-sm sm:text-base md:text-lg font-semibold max-w-[90%] sm:max-w-lg mt-2 sm:mt-3 mb-5 sm:mb-6 leading-relaxed tracking-wide">
          Patna's most loved open kitchen venue — book your party slot or homestay and create memories worth sharing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
          <a
            href="/book-a-slot"
            className="px-6 sm:px-8 py-2 sm:py-2.5 bg-[#F4B400] text-[#0A1628] text-xs sm:text-sm font-bold
             uppercase tracking-widest rounded-sm hover:bg-[#ffcc30] hover:-translate-y-1 transition-all duration-300"
          >
            Book a Slot
          </a>
          <a
            href="/contact"
            className="px-6 sm:px-8 py-2 sm:py-2.5 border border-[#FFF8E7]/30 text-[#FFF8E7] text-xs sm:text-sm font-semibold uppercase tracking-widest rounded-sm hover:border-[#FFF8E7]/70 hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Stats - improved for mobile */}
        <div className="flex gap-6 sm:gap-10 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#F4B400]/15">
          {[
            ['500+', 'Events Hosted'],
            ['4.9★', 'Guest Rating'],
            ['3+', 'Years Running']
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <span className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#F4B400] block">
                {num}
              </span>
              <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-wider sm:tracking-widest text-[#FFF8E7]/40 mt-0.5 sm:mt-1 block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;