import { Phone, Mail, MapPin, Clock, ChevronRight, MessageSquare } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 text-slate-400 py-16 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[350px] h-[350px] bg-rose-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About/Logo Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <img
                src="https://i.ibb.co/qY9hSDT3/Gemini-Generated-Image-7954cz7954cz7954.png"
                alt="Bulkcell Trading Company"
                className="h-auto w-auto max-h-16 sm:max-h-12"
                style={{ width: '60%', maxWidth: '280px' }}
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nigeria's trusted source for foreign used Apple iPhones, Samsung Galaxy phones, HP laptops, and Dell Latitude laptops. We deliver nationwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/2347025002885"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-blue-900/30 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all duration-300"
                title="WhatsApp Support"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <span className="text-xs font-bold text-blue-400 animate-pulse flex items-center gap-1 bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-900/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Active & Ready to Chat
              </span>
            </div>
          </div>

          {/* Categories / Quick Links */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              Brands & Catalog
            </h3>
            <ul className="space-y-2.5 text-sm">
              {['Apple', 'Samsung', 'HP', 'Dell'].map((brand) => (
                <li key={brand}>
                  <button
                    onClick={() => handleNavClick('shop')}
                    className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-3 w-3 text-rose-500 group-hover:translate-x-1 transition-transform" />
                    Available {brand} Models
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('hot-deals')}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="h-3 w-3 text-rose-500 group-hover:translate-x-1 transition-transform" />
                  Hot Deals
                </button>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-rose-500 pl-3">
              Company Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home', label: 'Home Showcase' },
                { id: 'shop', label: 'Store Catalog' },
                { id: 'hot-deals', label: 'Hot Deals' },
                { id: 'about', label: 'Vision & Authenticity' },
                { id: 'contact', label: 'Location & Address' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-rose-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="h-3 w-3 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider border-l-2 border-blue-500 pl-3">
              Official Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  Suite A08 Platinum plaza, Ikeja, Lagos, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:07025002885" className="hover:text-white transition-colors text-slate-300">
                    07025002885
                  </a>
                  <a href="tel:08060125762" className="hover:text-white transition-colors text-slate-300">
                    08060125762
                  </a>
                  <a href="tel:07034403659" className="hover:text-white transition-colors text-slate-300 text-xs">
                    07034403659
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-rose-500 flex-shrink-0" />
                <a href="mailto:bulkcell@outlook.com" className="hover:text-white transition-colors text-slate-300">
                  bulkcell@outlook.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-500">
                <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Trust */}
        {/* Legal Links */}
        <div className="border-t border-slate-900 pt-6 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Bulkcell Trading Company. All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <button onClick={() => handleNavClick('privacy')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Terms & Conditions
            </button>
            <button onClick={() => handleNavClick('returns')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Returns Policy
            </button>
            <button onClick={() => handleNavClick('shipping')} className="hover:text-blue-400 transition-colors cursor-pointer">
              Shipping Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
