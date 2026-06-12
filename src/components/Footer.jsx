// Footer.jsx
import logose from "../assets/logose.png";
import googleReviews from "../assets/google.jpg";
const Footer = () => {
  const address =
    "179 A, behind Tennis Court, beside HelpAge India, New Patliputra Colony, Patliputra Colony, Patna, Bihar 800013";
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const quickLinks = ["Home", "About", "Gallery", "Contact", "Book a Slot"];

  return (
    <footer className="bg-[#071C4B] text-gray-300 pt-12 pb-0 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* 4-column grid — stacks to 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* ── Col 1: Logo + Description + Social ── */}
          <div>
            <img src={logose} alt="TOKOR Logo" className="h-20 rounded-md mb-4 object-contain" />
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              Patna's most loved open kitchen, homestay &amp; party destination.
              Create memories worth sharing.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.069-4.85.069s-3.584-.011-4.849-.069c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 1.938 2.09.522 3.507.006 5.349-.079 7.205-.137 8.485-.15 8.893-.15 12c0 3.107.013 3.515.071 4.795.085 1.856.601 3.698 2.018 5.115 1.417 1.417 3.259 1.933 5.115 2.018C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.947-.072 1.856-.085 3.698-.601 5.115-2.018 1.417-1.417 1.933-3.259 2.018-5.115.058-1.28.071-1.688.071-4.795 0-3.107-.013-3.515-.071-4.795-.085-1.856-.601-3.698-2.018-5.115C20.645.673 18.803.157 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.999 3.999 3.999 0 010 7.999zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-gray-700 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">Quick Links</h4>
            <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact Info ── */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">Contact Info</h4>
            <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-orange-400">📍</span>
                <span className="text-gray-300 leading-relaxed">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-400">📞</span>
                <a href="tel:+917319942747" className="text-gray-300 hover:text-orange-400
                 transition-colors">
                  073199 42747
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-400">📩</span>
                <a href="mailto:tokor@gmail.com" className="text-gray-300  hover:text-orange-400
                 transition-colors">
                  tokorbusiness49@gmail.com
                </a>
              </li>
              
            </ul>

            {/* Google Reviews badge */}
            <a
              href="https://www.google.com/search?q=tokor+patna+reviews&sca_esv=2aa300c80f7be1f4&sxsrf=ANbL-n4ER3t-DX6d6fn7Kf81fHQNUsxXMA%3A1781273035150&ei=yxEsaorkCO3ZseMP6_2VwQw&biw=1366&bih=633&oq=tokor+patna+re&gs_lp=Egxnd3Mtd2l6LXNlcnAiDnRva29yIHBhdG5hIHJlKgIIADIEECMYJzICECYyCBAAGIAEGKIEMgUQABjvBTIFEAAY7wUyBRAAGO8FMgUQABjvBUjqGFCgAliTDHABeACQAQCYAY8CoAHeBaoBBTAuMS4yuAEByAEA-AEBmAIEoAL5BcICBxAjGLADGCfCAg4QLhiABBjHARivARiwA8ICDhAAGIAEGIoFGIYDGLADwgIIEAAY7wUYsAPCAgYQABgWGB7CAgsQABiABBiKBRiGA5gDAIgGAZAGCpIHBTEuMS4yoAfGErIHBTAuMS4yuAfzBcIHBTAuMS4zyAcTgAgB&sclient=gws-wiz-serp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5"
            >
              <img
                src={googleReviews}
                alt="Google Reviews"
                className="h-12 rounded object-contain"
              />
            </a>
          </div>

          {/* ── Col 4: Find Us (Map) ── */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-1">Find Us</h4>
            <div className="w-10 h-0.5 bg-orange-500 mb-4"></div>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700 relative">
              <iframe
                title="TOKOR Location Map"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-orange-400 text-xs hover:underline"
            >
              Open in Maps ↗
            </a>
          </div>

        </div>

        {/* ── Copyright Bar ── */}
        <div className="border-t border-gray-700 py-5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TOKOR India – Best Experience in Patna. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;