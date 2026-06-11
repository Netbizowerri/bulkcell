import { useState } from 'react';
import { Smartphone, Menu, X, ShoppingCart, Phone, Info, Flame, Zap, Bot } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount: number;
  setIsCartOpen: (open: boolean) => void;
  onOpenChat: () => void;
}

export default function Navbar({ activePage, setActivePage, cartCount, setIsCartOpen, onOpenChat }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Zap },
    { id: 'shop', label: 'Shop Pre-Owned', icon: Smartphone },
    { id: 'hot-deals', label: 'Hot Deals', icon: Flame },
    { id: 'about', label: 'Our Vision', icon: Info },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-blue-950/20">
      {/* Double Neon Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-rose-500 via-blue-600 to-blue-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img
              src="https://i.ibb.co/qY9hSDT3/Gemini-Generated-Image-7954cz7954cz7954.png"
              alt="Bulkcell Trading Company"
              className="h-auto w-auto max-h-16 sm:max-h-14"
              style={{ width: '60%', maxWidth: '300px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-900/40 shadow-inner shadow-blue-500/5'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-rose-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* MONDOAI Chatbot */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white text-xs font-extrabold px-3 py-1.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Bot className="h-3.5 w-3.5" />
              <span>MONDOAI</span>
            </button>

            {/* Cart / Quote Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-blue-900/20 to-rose-950/20 border border-blue-900/30 hover:border-rose-500/40 text-slate-200 hover:text-white transition-all duration-300 cursor-pointer group shadow-md shadow-slate-950"
              aria-label="Open Quote Basket"
            >
              <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 ? (
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-extrabold text-white shadow-md shadow-rose-500/50 animate-bounce">
                  {cartCount}
                </span>
              ) : null}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 transition-all duration-300 shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-blue-950 to-rose-950/20 border border-blue-900/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-blue-400' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
            <div className="text-xs text-slate-500 px-4">CUSTOMER SUPPORT</div>
            <div className="flex flex-col gap-2 px-4">
              <a href="tel:07025002885" className="text-slate-300 text-sm hover:text-rose-400 transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" /> 07025002885 (Sales)
              </a>
              <a href="tel:08060125762" className="text-slate-300 text-sm hover:text-rose-400 transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" /> 08060125762 (Bulk Orders)
              </a>
            </div>

            <button
              onClick={() => { setIsOpen(false); onOpenChat(); }}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-bold text-center rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Bot className="h-4 w-4" />
              Chat with MONDOAI
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
