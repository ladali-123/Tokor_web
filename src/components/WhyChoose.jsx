import {
  ChefHat,
  Home,
  CalendarDays,
  BriefcaseBusiness,
  HandHeart,
  Users,
  Sparkles,
  Clock,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const WhatMakesUsSpecial = () => {
  const specials = [
    {
      icon: ChefHat,
      title: 'Open Kitchen Freedom',
      desc: 'Fully equipped kitchen where you cook your own meals – ideal for family gatherings, private dinners, or food workshops.',
    },
    {
      icon: Home,
      title: 'Homestay Comfort',
      desc: 'Cozy, furnished rooms for tourists, remote workers, and medical visitors. Feel at home away from home.',
    },
    {
      icon: CalendarDays,
      title: 'Celebrations & Events',
      desc: 'Birthday bashes, weddings, kitty parties, or corporate mixers – we adapt to your needs.',
    },
    {
      icon: BriefcaseBusiness,
      title: 'Workspace & Meetings',
      desc: 'Soundproof meeting rooms, high-speed WiFi, and ergonomic seating for startups and freelancers.',
    },
    {
      icon: HandHeart,
      title: 'Medical Visitor Support',
      desc: 'Affordable, comfortable stays near hospitals with special amenities for patients and families.',
    },
    {
      icon: Users,
      title: 'Artist Display Centre',
      desc: 'Zero-commission gallery space for local artists to exhibit and sell their work.',
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const observers = [];
    const headerObs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) headerObs.observe(headerRef.current);
    observers.push(headerObs);

    cardRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, idx])]);
            }, idx * 110);
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(ref);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <section className="relative py-10 px-6 md:px-12 lg:px-24 overflow-hidden bg-gray-50">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-hidden  { opacity: 0; transform: translateY(36px); }
        .card-visible { animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }
        .header-hidden  { opacity: 0; }
        .header-visible { animation: fadeDown 0.6s cubic-bezier(0.22,1,0.36,1) forwards; }

        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(10,22,40,0.08);
          transition: transform 0.32s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.32s ease,
                      border-color 0.32s ease;
        }
        .premium-card:hover {
          transform: scale(1.02);
          border-color: rgba(244,180,0,0.55);
          box-shadow: 0 8px 24px rgba(244,180,0,0.08);
        }
        .icon-ring {
          transition: transform 0.38s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
        }
        .premium-card:hover .icon-ring {
          transform: scale(1.12) rotate(-6deg);
          background: rgba(244,180,0,0.15) !important;
        }
        .premium-card:hover .icon-el {
          color: #D4970A !important;
        }
        .gold-line {
          transition: width 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s;
        }
      `}</style>

      {/* Subtle dot texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(244,180,0,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Soft gold orb */}
      <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244,180,0,0.10) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'header-visible' : 'header-hidden'}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.22em]
           uppercase text-[#0A1628] border border-[#F4B400]/40 bg-[#F4B400]/10">
            Why TOKOR
          </span>

          <h2 className="text-3xl md:text-4xl font-black text-[#0B2A6F] mt-4 leading-tight">
            What Makes Us{' '}
            <span className="text-[#F4B400]">Special</span>
          </h2>

          <div
            className="gold-line h-[2.5px] bg-[#F4B400] mx-auto mt-4 rounded-full"
            style={{ width: headerVisible ? '80px' : '0px' }}
          />

          <p
            className="text-gray-500 max-w-xl mx-auto mt-4 text-sm leading-relaxed"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'none' : 'translateY(10px)',
              transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
            }}
          >
            Not just a venue – a versatile space built around your needs. Here's why Patna loves TOKOR.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specials.map((item, idx) => {
            const Icon = item.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <div
                key={idx}
                ref={el => (cardRefs.current[idx] = el)}
                className={`premium-card card-hidden ${isVisible ? 'card-visible' : ''} flex gap-4 p-6 
                rounded-2xl cursor-default`}
              >
                <div className="shrink-0">
                  <div
                    className="icon-ring w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(244,180,0,0.10)' }}
                  >
                    <Icon size={22} className="icon-el text-[#F4B400]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0A1628] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom badges */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {[
            { icon: Sparkles, label: 'Registered Bihar Startup' },
            { icon: Clock,    label: 'Flexible hourly / daily packages' },
            { icon: Users,    label: '500+ events hosted' },
          ].map(({ icon: Icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#0A1628] transition-colors duration-300"
              style={{
                opacity: headerVisible ? 1 : 0,
                transform: headerVisible ? 'none' : 'translateY(8px)',
                transition: `opacity 0.5s ease ${0.65 + i * 0.12}s, transform 0.5s ease ${0.65 + i * 0.12}s, color 0.3s`,
              }}
            >
              <Icon size={14} className="text-[#F4B400]" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsSpecial;