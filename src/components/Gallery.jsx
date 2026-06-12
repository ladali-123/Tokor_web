import { useState, useEffect, useRef } from "react";

const images = [
  { id: 1,  src: "/images/pic1.png",  label: "Living Space" },
  { id: 2,  src: "/images/pic2.png",  label: "Valentine Decor" },
  { id: 3,  src: "/images/pic3.png",  label: "Party Hall" },
  { id: 4,  src: "/images/pic4.png",  label: "Floral Setup" },
  { id: 5,  src: "/images/pic5.png",  label: "Cozy Lounge" },
  { id: 6,  src: "/images/pic6.png",  label: "Birthday Bash" },
  { id: 7,  src: "/images/pic7.png",  label: "Open Kitchen" },
  { id: 8,  src: "/images/pic8.png",  label: "Workspace" },
  { id: 9,  src: "/images/pic9.png",  label: "Homestay Room" },
  { id: 10, src: "/images/pic10.png", label: "Outdoor Dining" },
  { id: 11, src: "/images/pic11.png", label: "Wedding Setup" },
  { id: 12, src: "/images/pic12.png", label: "Corporate Meet" },
  { id: 13, src: "/images/pic13.png", label: "Night Vibes" },
  { id: 14, src: "/images/pic14.png", label: "Terrace View" },
];

const desktopLayout = [
  [2, 2], [1, 1], [1, 1],
  [1, 2], [1, 1], [1, 1],
  [1, 1], [2, 1], [1, 1],
  [1, 1], [1, 1], [1, 2],
  [2, 1], [1, 1],
];

function GalleryCard({ img, colSpan, rowSpan, index, visible, onClick }) {
  const [hovered, setHovered] = useState(false);
  const delay = `${index * 0.07}s`;

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.96)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img.src}
        alt={img.label}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.09)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: hovered
            ? "linear-gradient(135deg,rgba(245,197,24,.18) 0%,rgba(245,197,24,.04) 60%,rgba(10,14,26,.55) 100%)"
            : "linear-gradient(180deg,transparent 40%,rgba(10,14,26,.70) 100%)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg,transparent 40%,rgba(245,197,24,.28) 50%,transparent 60%)",
          transform: hovered ? "translateX(110%)" : "translateX(-110%)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Label badge */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pointer-events-none"
        style={{
          transform: hovered ? "translateY(0)" : "translateY(10px)",
          opacity: hovered ? 1 : 0,
          transition: "all 0.35s ease",
        }}
      >
        <span className="inline-block bg-[#F5C518] text-[#0a0e1a] text-[0.7rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
          {img.label}
        </span>
      </div>

      {/* Gold dot */}
      <div
        className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#F5C518]"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1)" : "scale(0)",
          transition: "all 0.3s ease 0.1s",
          boxShadow: "0 0 8px 3px rgba(245,197,24,.55)",
        }}
      />
    </div>
  );
}

export default function Gallery() {
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setLightbox((p) => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      setLightbox((p) => diff > 0 ? (p + 1) % images.length : (p - 1 + images.length) % images.length);
    }
    touchStartX.current = null;
  };

  return (
    <section ref={sectionRef} className="bg-[#F5F0E4] py-14 sm:py-20 font-serif">

      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <p
          className="text-[#F5C518] text-[0.72rem] sm:text-[0.78rem] font-sans tracking-[0.18em] uppercase mb-3"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease" }}
        >
          — Our Space, Your Memories —
        </p>

        <h2
          className="text-[#0a0e1a] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight m-0"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          A Glimpse of{" "}
          <span className="text-[#F5C518] relative inline-block">
            TOKOR
            <span
              className="absolute left-0 right-0 -bottom-1 h-[3px] rounded bg-[#F5C518]"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.8s ease 0.6s",
              }}
            />
          </span>
        </h2>

        <p
          className="text-gray-500 mt-4 text-sm sm:text-base font-sans"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.3s" }}
        >
          Every frame tells a story of celebration, warmth &amp; togetherness.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        {isMobile ? (
          <div className="grid grid-cols-2 gap-2.5">
            {images.map((img, i) => (
              <div
                key={img.id}
                className="relative overflow-hidden rounded-xl cursor-pointer aspect-square"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                  transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
                }}
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 bg-[#F5C518] text-[#0a0e1a] text-[0.6rem] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "160px" }}
          >
            {images.map((img, i) => (
              <GalleryCard
                key={img.id}
                img={img}
                colSpan={desktopLayout[i][0]}
                rowSpan={desktopLayout[i][1]}
                index={i}
                visible={visible}
                onClick={() => setLightbox(i)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e1a]/95"
          style={{ animation: "fadeIn 0.25s ease" }}
          onClick={() => setLightbox(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev */}
          <button
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/35 text-[#F5C518] text-2xl flex items-center justify-center hover:bg-[#F5C518]/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + images.length) % images.length); }}
          >‹</button>

          {/* Image container */}
          <div
            className="relative rounded-2xl overflow-hidden border-2 border-[#F5C518]/30 mx-14 sm:mx-20"
            style={{ maxWidth: "80vw", maxHeight: "82vh", boxShadow: "0 0 60px rgba(245,197,24,0.22)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="block object-contain"
              style={{ maxWidth: "80vw", maxHeight: "78vh" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0e1a]/90 to-transparent px-4 py-4 flex justify-between items-center">
              <span className="text-[#F5C518] font-bold text-xs sm:text-sm uppercase tracking-widest">
                {images[lightbox].label}
              </span>
              <span className="text-white/40 text-xs">{lightbox + 1} / {images.length}</span>
            </div>
          </div>

          {/* Next */}
          <button
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[60] w-10 h-10 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/35 text-[#F5C518] text-2xl flex items-center justify-center hover:bg-[#F5C518]/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % images.length); }}
          >›</button>

          {/* Dot indicators */}
          <div className="fixed bottom-5 left-0 right-0 flex justify-center gap-1.5 flex-wrap px-4">
            {images.map((_, i) => (
              <button
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === lightbox ? "bg-[#F5C518] w-4 h-2" : "bg-white/25 w-2 h-2 hover:bg-white/50"
                }`}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
              />
            ))}
          </div>

          {/* Close */}
          <button
            className="fixed top-4 right-4 z-[60] w-9 h-9 rounded-full bg-[#F5C518]/15 border border-[#F5C518]/40 text-[#F5C518] text-xl flex items-center justify-center hover:bg-[#F5C518]/25 transition-colors"
            onClick={() => setLightbox(null)}
          >×</button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}