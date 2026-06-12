import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import rpic1 from '../assets/rpic1.png'
import rpic2 from '../assets/rpic2.png'
import rpic3 from '../assets/rpic3.png'

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Anshuman Raj",
    image: rpic1,
    review:
      "Outstanding place to chill out with perfect ambiance and service 🙌.",
  },
  {
    id: 2,
    name: "Aman Prakash",
    image: rpic2,
    review:
      "Perfect place for birthday celebrations. Great ambience, delicious food and wonderful hospitality.",
  },
  {
    id: 3,
    name: "Rammy Tech",
    image: rpic3,
    review:
      "Also from the decor to the amenities, everything exceeded our expectations.",
  },
  {
    id: 4,
    name: "Amit Kumar",
    image: "https://i.pinimg.com/736x/70/3d/53/703d53bd9cbed9966f228de1a69de679.jpg",
    review:
      "Hosted a corporate meetup at TOKOR. The setup, service and overall experience exceeded expectations.",
  },
  {
    id: 5,
    name: "Neha Gupta",
    image: "https://i.pinimg.com/736x/bb/f4/f8/bbf4f8626c33dcedc73a58e28afe4bf2.jpg",
    review:
      "A hidden gem. Beautiful location and the open kitchen concept makes it truly unique.",
  },
];

const Reviews = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-[#D4A017] text-sm font-semibold uppercase tracking-[0.2em]">
            TESTIMONIALS
          </span>

          <h2 className=" text-3xl md:text-4xl font-black text-[#0B2A6F]">
            What Our Guests Say
          </h2>

          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Memories created at TOKOR, shared by our wonderful guests.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          loop={true}
          speed={1000}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="h-[280px] bg-[#FDFBF5] border border-[#D4A017]/15 rounded-3xl 
              p-6 hover:shadow-lg transition-all duration-300">

                {/* User */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4A017]/30"
                  />

                  <div>
                    <h4 className="font-bold text-[#0B2A6F]">
                      {review.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Verified Guest
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#D4A017"
                      color="#D4A017"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-gray-700 leading-relaxed text-base">
                  "{review.review}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .swiper {
          padding-bottom: 50px;
        }

        .swiper-pagination-bullet {
          background: #d4a017;
          opacity: 0.4;
        }

        .swiper-pagination-bullet-active {
          background: #0b2a6f;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Reviews;