import { ArrowRight } from "lucide-react";
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';

const photos = [
  { id: 1, src: pic1 },
  { id: 2, src: pic2 },
  { id: 3, src: pic3},
  { id: 4, src: pic4 },
  { id: 5, src: pic5 },
  { id: 6, src: "https://images.unsplash.com/photo-1543007631-283050bb3e8c?w=800" },
];

const Customers = () => {
  return (
    <section className="py-8 bg-[#f5f7e4] overflow-hidden px-12">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">

        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#0B2A6F]">
            Our Gallery
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-black leading-tight text-[#0B2A6F]">
            Moments Worth{" "}
            <span className="text-[#D4A017]">Remembering</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Beautiful memories from birthdays, celebrations, homestays and gatherings at TOKOR.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {photos.slice(0, 5).map((photo) => (
            <div
              key={photo.id}
              className="group overflow-hidden rounded-2xl border border-[#D4A017]/20 shadow-sm"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={photo.src}
                alt="TOKOR Memory"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="/gallery"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0B2A6F] text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            See More Photos
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Customers;