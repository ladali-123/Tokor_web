import about from '../assets/about.png';
import {
  ArrowRight,
  UtensilsCrossed,
  Home,
  CalendarDays,
  BriefcaseBusiness,
} from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f5f7e4] relative overflow-hidden">
      {/* Floating Bubbles - Yellow & Light Blue (using inline styles for gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Yellow bubble 1 */}
        <div
          className="absolute rounded-full opacity-20 w-[150px] h-[150px] animate-float"
          style={{
            background: "radial-gradient(circle, #E3B87C, transparent)",
            top: "10%",
            left: "5%",
            animationDuration: "8s",
          }}
        ></div>
        {/* Blue bubble 1 */}
        <div
          className="absolute rounded-full opacity-15 w-[200px] h-[200px] animate-float"
          style={{
            background: "radial-gradient(circle, #7CB9E8, transparent)",
            bottom: "15%",
            left: "15%",
            animationDuration: "12s",
            animationDelay: "2s",
          }}
        ></div>
        {/* Yellow bubble 2 (small) */}
        <div
          className="absolute rounded-full opacity-25 w-[80px] h-[80px] animate-float"
          style={{
            background: "radial-gradient(circle, #E3B87C, transparent)",
            top: "40%",
            left: "-20px",
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        ></div>
        {/* Blue bubble 2 (large) */}
        <div
          className="absolute rounded-full opacity-10 w-[250px] h-[250px] animate-float"
          style={{
            background: "radial-gradient(circle, #5BA3D9, transparent)",
            bottom: "5%",
            left: "30%",
            animationDuration: "15s",
            animationDelay: "0.5s",
          }}
        ></div>
        {/* Yellow bubble 3 (extra small) */}
        <div
          className="absolute rounded-full opacity-30 w-[50px] h-[50px] animate-float"
          style={{
            background: "radial-gradient(circle, #F5B042, transparent)",
            top: "70%",
            left: "8%",
            animationDuration: "5s",
            animationDelay: "3s",
          }}
        ></div>
        {/* Light blue bubble (reverse float) */}
        <div
          className="absolute rounded-full opacity-20 w-[120px] h-[120px] animate-float-reverse"
          style={{
            background: "radial-gradient(circle, #A8D0E6, transparent)",
            top: "20%",
            left: "25%",
            animationDuration: "10s",
            animationDelay: "1.5s",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Side - Image with floating effect */}
          <div className="relative">
            {/* Soft glow behind image */}
            <div
              className="absolute -inset-4 rounded-full opacity-20 blur-xl -z-10"
              style={{ background: "radial-gradient(circle, #E3B87C, #7CB9E8)" }}
            ></div>
            <div className="rounded-2xl overflow-hidden shadow-xl animate-float-image">
              <img
                src={about}
                alt="TOKOR Open Kitchen Venue Patna"
                className="w-full h-[300px] md:h-[380px] lg:h-[440px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content (unchanged) */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-[#E3B87C]/20 text-[#2E3A2C]">
              🇮🇳 Bihar Startup · Registered with MSME
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2E3A2C]">
              About <span className="text-[#0A2A6B]">TOKOR</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold bg-[#e29c2b] text-white">
                AJ
              </div>
              <div>
                <p className="font-bold text-lg text-[#2E3A2C]">Akansha Jha</p>
                <p className="text-sm text-gray-500">Founder & Curator</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-justify">
              <strong className="text-[#0A2A6B]">TOKOR Patna</strong> isn't just a venue — it's Patna's
              most loved <strong>open kitchen, homestay, and party destination</strong>. Founded by{" "}
              <strong>Akansha Jha</strong>, TOKOR is a registered Bihar startup that brings together
              flexible event spaces, cozy accommodations, and a fully equipped kitchen where guests can
              cook their own meals.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Whether you're planning a{" "}
              <strong>birthday bash, wedding function, corporate meetup, or a quiet homestay</strong> —
              TOKOR offers budget-friendly, customizable packages without compromising quality. Our open
              kitchen concept lets you enjoy home-cooked food even when you're away from home.
            </p>

            {/* Features grid with Lucide icons (arrows + main icons) */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-[#C27B5C]/70" />
                <UtensilsCrossed size={20} className="text-[#C27B5C]" />
                <span className="text-sm font-medium">Open Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-[#C27B5C]/70" />
                <Home size={20} className="text-[#C27B5C]" />
                <span className="text-sm font-medium">Homestay Stay</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-[#C27B5C]/70" />
                <CalendarDays size={20} className="text-[#C27B5C]" />
                <span className="text-sm font-medium">Parties & Functions</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-[#C27B5C]/70" />
                <BriefcaseBusiness size={20} className="text-[#C27B5C]" />
                <span className="text-sm font-medium">Workspace / Meetings</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A2A6B] text-white font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
              >
                Book a Slot at TOKOR <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes for floating animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.35; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
        }
        @keyframes floatReverse {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
          50% { transform: translateY(15px) translateX(-10px); opacity: 0.3; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.15; }
        }
        @keyframes floatImage {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse ease-in-out infinite;
        }
        .animate-float-image {
          animation: floatImage 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;