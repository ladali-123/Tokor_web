const AnnouncementTicker = () => {
  const messages = [
    "Affordable open kitchen experience in Patna's most beautiful outdoor setting",
    "Book your party slot now — weekends filling fast!",
    "Homestay available — wake up to nature, cook your own meal",
    "Open kitchen · Garden seating · Fairy lights · Perfect for birthdays & kitty parties",
    "Starting at prices you'll love — contact us to know more",
  ];

  const doubled = [...messages, ...messages];

  return (
    <div className="w-full h-[34px] bg-[#F4B400] flex items-center overflow-hidden">
      {/* Badge */}
      <div className="flex-shrink-0 h-full flex items-center gap-1.5 bg-[#0A1628] text-[#F4B400]
       text-[10px] font-bold uppercase tracking-[0.18em] px-4">
        📢 Announce
      </div>

      {/* Scrolling Track */}
      <div className="flex-1 overflow-hidden h-full flex items-center">
        <div
          className="flex items-center whitespace-nowrap"
          style={{ animation: 'ticker 28s linear infinite' }}
          onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
        >
          {doubled.map((msg, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="text-[#0A1628] text-[13px] font-medium tracking-wide">{msg}</span>
              <span className="inline-block w-1 h-1 bg-[#0A1628]/40 rounded-full mx-6" />
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
};

export default AnnouncementTicker;