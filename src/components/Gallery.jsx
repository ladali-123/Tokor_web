import { useState, useEffect, useRef } from "react";
import pic6  from '../assets/pic6.png';
import pic1  from '../assets/pic1.png';
import pic2  from '../assets/pic2.png';
import pic3  from '../assets/pic3.png';
import pic4  from '../assets/pic4.png';
import pic5  from '../assets/pic5.png';
import pic7  from '../assets/pic7.png';
import pic8  from '../assets/pic8.png';
import pic9  from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';
import pic11 from '../assets/pic11.png';
import pic12 from '../assets/pic12.png';
import pic13 from '../assets/pic13.png';
import pic14 from '../assets/pic14.png';
import pic15 from '../assets/pic15.png';

const images = [
  { id: 1,  src: pic6,  label: "Living Space"   },
  { id: 2,  src: pic1,  label: "Valentine Decor" },
  { id: 3,  src: pic2,  label: "Party Hall"      },
  { id: 4,  src: pic3,  label: "Floral Setup"    },
  { id: 5,  src: pic4,  label: "Cozy Lounge"     },
  { id: 6,  src: pic5,  label: "Birthday Bash"   },
  { id: 7,  src: pic7,  label: "Open Kitchen"    },
  { id: 8,  src: pic8,  label: "Workspace"       },
  { id: 9,  src: pic9,  label: "Homestay Room"   },
  { id: 10, src: pic10, label: "Outdoor Dining"  },
  { id: 11, src: pic11, label: "Wedding Setup"   },
  { id: 12, src: pic12, label: "Corporate Meet"  },
  { id: 13, src: pic13, label: "Night Vibes"     },
  { id: 14, src: pic14, label: "Terrace View"    },
  { id: 15, src: pic15, label: "Rooftop Party"   },
];

const desktopLayout = [
  [2,2],[1,1],[1,1],[1,1],[1,1],
  [1,2],[2,2],[1,2],
  [1,1],[1,1],[1,1],[1,1],
  [2,2],[1,2],[1,2],
];

function GalleryCard({ img, colSpan, rowSpan, index, visible, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer"
      style={{
        gridColumn : `span ${colSpan}`,
        gridRow    : `span ${rowSpan}`,
        opacity    : visible ? 1 : 0,
        transform  : visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.95)",
        transition : `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.06}s`,
        minHeight  : "160px",
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
          transform  : hovered ? "scale(1.08)" : "scale(1)",
          transition : "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background : "linear-gradient(135deg,rgba(245,197,24,.15) 0%,transparent 60%)",
          opacity    : hovered ? 1 : 0,
          transition : "opacity 0.4s ease",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background : "linear-gradient(110deg,transparent 35%,rgba(245,197,24,.22) 50%,transparent 65%)",
          transform  : hovered ? "translateX(120%)" : "translateX(-120%)",
          transition : "transform 0.65s ease",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-3 pointer-events-none"
        style={{
          transform  : hovered ? "translateY(0)" : "translateY(5px)",
          transition : "transform 0.3s ease",
        }}
      >
        <span
          className="inline-block text-[#0a0e1a] text-[0.62rem] font-extrabold uppercase tracking-[0.15em] px-2.5 py-1 rounded-sm transition-all duration-300"
          style={{
            background : hovered ? "#F5C518" : "rgba(245,197,24,0.82)",
            boxShadow  : hovered ? "0 2px 14px rgba(245,197,24,0.55)" : "none",
          }}
        >
          {img.label}
        </span>
      </div>
      <div
        className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-[#F5C518] transition-all duration-300"
        style={{
          opacity   : hovered ? 1 : 0,
          transform : hovered ? "scale(1)" : "scale(0)",
          boxShadow : "0 0 10px 4px rgba(245,197,24,.6)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          opacity   : hovered ? 0.9 : 0,
          transform : hovered ? "translate(-50%,-50%) scale(1)" : "translate(-50%,-50%) scale(0.7)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#F5C518] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            <line x1="11" y1="8"  x2="11"    y2="14"/>
            <line x1="8"  y1="11" x2="14"    y2="11"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [visible,     setVisible]     = useState(false);
  const [lightbox,    setLightbox]    = useState(null);
  const [isMobile,    setIsMobile]    = useState(false);
  const sectionRef  = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape")     setLightbox(null);
      if (e.key === "ArrowRight") setLightbox(p => (p + 1) % images.length);
      if (e.key === "ArrowLeft")  setLightbox(p => (p - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40)
      setLightbox(p => diff > 0 ? (p + 1) % images.length : (p - 1 + images.length) % images.length);
    touchStartX.current = null;
  };

  return (
    <section ref={sectionRef} className="bg-[#F5F0E4] py-6 sm:py-8 font-serif px-16">

      <div className="text-center mb-10 sm:mb-8 px-2">
        <p
          className="text-[#F5C518] text-[0.72rem] sm:text-[0.78rem] font-sans tracking-[0.22em] 
          uppercase mb-2"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.9s ease" }}
        >
          — Our Space, Your Memories —
        </p>
        <h2
          className="text-[#0a0e1a] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight m-0"
          style={{
            opacity   : visible ? 1 : 0,
            transform : visible ? "translateY(0)" : "translateY(22px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          A Glimpse of{" "}
          <span className="text-[#F5C518] relative inline-block">
            TOKOR
            <span
              className="absolute left-0 right-0 -bottom-1 h-[3px] rounded bg-[#F5C518]"
              style={{
                transform      : visible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition     : "transform 0.9s cubic-bezier(0.22,1,0.36,1) 0.6s",
              }}
            />
          </span>
        </h2>
        <p
          className="text-gray-500 mt-2 text-sm sm:text-base font-sans"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.3s" }}
        >
          Every frame tells a story of celebration, warmth &amp; togetherness.
        </p>
      </div>

      <div className="w-full px-2 sm:px-2">
        {isMobile ? (
          <div className="grid grid-cols-2 gap-2">
            {images.map((img, i) => (
              <div
                key={img.id}
                className="relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  aspectRatio: "4/3",
                  opacity    : visible ? 1 : 0,
                  transform  : visible ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                  transition : `opacity 0.55s ease ${i * 0.05}s, transform 0.55s ease ${i * 0.05}s`,
                }}
                onClick={() => setLightbox(i)}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 bg-[#F5C518] text-[#0a0e1a] text-[0.58rem] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-sm">
                  {img.label}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid gap-3.5"
            style={{ gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "200px" }}
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

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e1a]/95"
          style={{ animation: "fadeIn 0.2s ease" }}
          onClick={() => setLightbox(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/40 text-[#F5C518] text-3xl flex items-center justify-center hover:bg-[#F5C518]/25 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p - 1 + images.length) % images.length); }}
          >‹</button>

          <div
            className="relative rounded-2xl overflow-hidden border border-[#F5C518]/25 mx-16 sm:mx-24"
            style={{
              maxWidth  : "85vw",
              maxHeight : "85vh",
              boxShadow : "0 0 80px rgba(245,197,24,.2), 0 0 0 1px rgba(245,197,24,.1)",
              animation : "zoomIn 0.25s cubic-bezier(0.22,1,0.36,1)",
            }}
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[lightbox].src}
              alt={images[lightbox].label}
              className="block object-contain"
              style={{ maxWidth: "85vw", maxHeight: "80vh" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent px-5 py-4 flex justify-between items-center">
              <span className="text-[#F5C518] font-bold text-xs sm:text-sm uppercase tracking-[0.18em]">
                {images[lightbox].label}
              </span>
              <span className="text-white/40 text-xs font-sans">{lightbox + 1} / {images.length}</span>
            </div>
          </div>

          <button
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/40 text-[#F5C518] text-3xl flex items-center justify-center hover:bg-[#F5C518]/25 transition-colors"
            onClick={e => { e.stopPropagation(); setLightbox(p => (p + 1) % images.length); }}
          >›</button>

          <div className="fixed bottom-5 left-0 right-0 flex justify-center gap-2 flex-wrap px-4">
            {images.map((_, i) => (
              <button
                key={i}
                className={`rounded-full transition-all duration-300 ${
                  i === lightbox ? "bg-[#F5C518] w-5 h-2" : "bg-white/20 w-2 h-2 hover:bg-white/45"
                }`}
                onClick={e => { e.stopPropagation(); setLightbox(i); }}
              />
            ))}
          </div>

          <button
            className="fixed top-4 right-4 z-[60] w-9 h-9 rounded-full bg-[#F5C518]/10 border border-[#F5C518]/35 text-[#F5C518] text-xl flex items-center justify-center hover:bg-[#F5C518]/25 transition-colors"
            onClick={() => setLightbox(null)}
          >×</button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes zoomIn { from { opacity:0; transform:scale(0.93) } to { opacity:1; transform:scale(1) } }
      `}</style>
    </section>
  );
}