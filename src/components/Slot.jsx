import { useState } from "react";

const amenities = [
  "Open Kitchen", "Garden Seating", "Fairy Lights Decor", "DJ Setup Ready",
  "Projector Available", "Homestay Rooms", "Parking Space", "Catering Support",
  "Custom Decoration", "Birthday Parties", "Wedding Functions", "Corporate Events",
  "Workspace",
];

const packages = [
  { title: "4 Hours", note: "Base package", price: "₹4,000" },
  { title: "Extra Hour", note: "After 4 hrs", price: "+₹500" },
  { title: "12 Hours", note: "Fixed slot", price: "₹1,200" },
  { title: "24 Hours", note: "Full day", price: "₹6,000" },
  { title: "Weekly Plan", note: "Per day rate", price: "₹4,500/day" },
  { title: "Monthly Plan", note: "Best value", price: "₹4,000/day" },
];

const tabs = [
  { key: "hourly", label: "Hourly" },
  { key: "12hr", label: "12 Hours" },
  { key: "24hr", label: "24 Hours" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
];

export default function TokorBookSlot() {
  const [tab, setTab] = useState("hourly");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", date: "", guests: "", plan: "hourly", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const priceDisplay = () => {
    if (tab === "hourly") return "₹4,000";
    if (tab === "12hr") return "₹1,200";
    if (tab === "24hr") return "₹6,000";
    if (tab === "weekly") return "₹4,500/day";
    if (tab === "monthly") return "₹4,000/day";
  };

  const priceNote = () => {
    if (tab === "hourly") return "Base 4‑hour package · ₹4,000 fixed";
    if (tab === "12hr") return "Fixed 12-hour slot";
    if (tab === "24hr") return "Full day 24-hour slot";
    if (tab === "weekly") return "Weekly commitment · per day rate";
    if (tab === "monthly") return "Monthly plan · best value";
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f7f0] font-sans">
      <div className="max-w-5xl mx-auto px-4 py-8">

        {/* Pricing Calculator */}
        <div className="bg-white border border-[#e5e0d0] rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[3px] h-5 bg-[#F5C518] rounded-none flex-shrink-0" />
            <h2 className="text-[15px] font-bold text-[#0A2A6B]">Pricing Calculator</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-4 py-1.5 rounded-full text-[13px] border transition-all duration-200 cursor-pointer
                  ${tab === t.key
                    ? "bg-[#0A2A6B] text-[#F5C518] border-[#0A2A6B] font-bold"
                    : "bg-white text-gray-500 border-gray-300 hover:border-[#0A2A6B]"
                  }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Fixed base price text – slider removed */}

          <div className="bg-[#0A2A6B] rounded-xl p-4 flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="text-[12px] text-white/50 mb-1">Estimated price</div>
              <div className="text-[22px] font-bold text-[#F5C518]">{priceDisplay()}</div>
              <div className="text-[11px] text-white/40 mt-1">{priceNote()}</div>
            </div>
            <button
              onClick={() => document.getElementById("contactForm").scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2 bg-white text-[#0A2A6B] font-bold text-[13px] rounded-lg border-none cursor-pointer hover:bg-[#f5f5f5] transition-colors"
            >
              Book this →
            </button>
          </div>
        </div>

        {/* All Packages */}
        <div className="bg-white border border-[#e5e0d0] rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[3px] h-5 bg-[#F5C518] rounded-none flex-shrink-0" />
            <h2 className="text-[15px] font-bold text-[#0A2A6B]">All Packages at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {packages.map((p, i) => (
              <div key={i} className="bg-[#f5f2ea] rounded-xl p-3 border-l-[3px] border-[#F5C518]">
                <div className="text-[13px] font-bold text-[#0A2A6B]">{p.title}</div>
                <div className="text-[11px] text-gray-400 my-1">{p.note}</div>
                <div className="text-[15px] font-bold text-[#0A2A6B]">{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white border border-[#e5e0d0] rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[3px] h-5 bg-[#F5C518] rounded-none flex-shrink-0" />
            <h2 className="text-[15px] font-bold text-[#0A2A6B]">What We Offer at TOKOR</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {amenities.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e0d0] rounded-full text-[13px] text-[#0A2A6B] font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-[#F5C518] flex-shrink-0" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white border border-[#e5e0d0] rounded-2xl p-6 mb-4" id="contactForm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-[3px] h-5 bg-[#F5C518] rounded-none flex-shrink-0" />
            <h2 className="text-[15px] font-bold text-[#0A2A6B]">Send a Booking Request</h2>
          </div>
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#F5C518] flex items-center justify-center mx-auto mb-3 text-2xl text-[#0A2A6B]">✓</div>
              <p className="text-[17px] font-bold text-[#0A2A6B]">Request sent!</p>
              <p className="text-[13px] text-gray-500 mt-1.5">We'll contact you soon. Welcome to TOKOR!</p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",date:"",guests:"",plan:"hourly",message:"" }); }}
                className="mt-4 px-5 py-2 bg-[#0A2A6B] text-[#F5C518] font-bold rounded-lg border-none cursor-pointer text-[13px]"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Your name *</label>
                  <input className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B]" value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Phone number *</label>
                  <input className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B]" value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-500">Email ID</label>
                  <input className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B]" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Event date</label>
                  <input type="date" className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B]" value={form.date} onChange={(e) => setForm(f => ({ ...f, date: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Expected guests</label>
                  <input className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B]" value={form.guests} onChange={(e) => setForm(f => ({ ...f, guests: e.target.value }))} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[13px] font-semibold text-gray-600">Select plan</label>
                  <select className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] 
                  outline-none focus:border-[#0A2A6B] bg-white" value={form.plan} onChange={(e) => setForm(f => ({ ...f, plan: e.target.value }))}>
                    <option value="hourly">Hourly — 4 hrs at ₹4,000</option>
                    <option value="12hr">12 Hours — ₹1,200</option>
                    <option value="24hr">24 Hours — ₹6,000</option>
                    <option value="weekly">Weekly — ₹4,500/day</option>
                    <option value="monthly">Monthly — ₹4,000/day</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 mt-3">
                <label className="text-[13px] font-semibold text-gray-600">Any special requirements? (optional)</label>
                <textarea
                  className="px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-[#0A2A6B] outline-none focus:border-[#0A2A6B] resize-y min-h-[80px]"
                  value={form.message}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="mt-4 w-full py-3 bg-[#F5C518] text-[#0A2A6B] font-bold text-[14px] rounded-xl border-none cursor-pointer hover:bg-[#e6b800] transition-colors"
              >
                📩 Send Booking Request
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-2">We'll reach out within 2–4 hours on WhatsApp or call</p>
            </>
          )}
        </div>

        <p className="text-center text-[11px] text-gray-400 pb-2">
          © 2026 TOKOR – The Open Kitchen · Bihar Startup · MSME Registered · Founded by Akansha Jha
        </p>
      </div>
    </div>
  );
}