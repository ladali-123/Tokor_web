import { Send } from "lucide-react";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <section className="py-16 bg-[#FDFBF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-[#D4A017] text-sm font-semibold uppercase tracking-[0.2em]">
            WE'RE HERE FOR YOU
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-black text-[#0B2A6F]">
            Have a Question? Let's Talk
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're planning a celebration, looking for a homestay,
            exploring our open kitchen experience, or simply want to know
            more about TOKOR, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div>
            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4A017]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4A017]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4A017]"
                />

                <select className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4A017]">
                  <option>Select Experience</option>
                  <option>Open Kitchen</option>
                  <option>Homestay</option>
                  <option>Birthday Party</option>
                  <option>Kitty Party</option>
                  <option>Corporate Meetup</option>
                  <option>Wedding Function</option>
                  <option>Private Gathering</option>
                </select>
              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your plans, preferred date, number of guests, and any special requirements..."
                className="w-full px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4A017] resize-none"
              />

              <p className="text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>

              <button
                type="submit"
                className="group px-10 py-4 rounded-full bg-[#D4A017] text-[#0B2A6F] font-bold hover:bg-[#c99714] hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Send Enquiry

                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

            </form>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={contact}
              alt="Contact Us"
              className="w-full max-w-[590px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;