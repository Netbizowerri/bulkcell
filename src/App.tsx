import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HotDeals from './pages/HotDeals';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';
import QuoteEstimator, { CartItem } from './components/QuoteEstimator';
import { PRODUCTS, Product } from './data/products';
import { Phone, Bot, Award, Building, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatBot from './components/ChatBot';

const CART_STORAGE_KEY = 'bulkcell_cart_inventory_30';

export default function App() {
  // History-based client-side routing (Browser Router style)
  const [activePage, setActivePage] = useState<string>('home');
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  
  // Quote Basket state initialized from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (!savedCart) return [];

      const availableProductIds = new Set(PRODUCTS.map((product) => product.id));
      const parsedCart = JSON.parse(savedCart) as CartItem[];
      return parsedCart.filter((item) => availableProductIds.has(item.product.id));
    } catch (e) {
      return [];
    }
  });

  // Cross-page shop filter state
  const [shopBrandTab, setShopBrandTab] = useState<'All' | 'Apple' | 'Samsung' | 'HP' | 'Dell'>('All');
  const [chatOpen, setChatOpen] = useState(false);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  // Listen to browser back/forward navigation via popstate
  useEffect(() => {
    const syncPageFromPath = () => {
      const path = window.location.pathname.replace(/^\/+/, '') || 'home';
      const validPages = ['home', 'shop', 'hot-deals', 'about', 'contact', 'privacy', 'terms', 'returns', 'shipping'];
      if (validPages.includes(path)) {
        setActivePage(path);
      } else {
        window.history.replaceState({}, '', '/home');
        setActivePage('home');
      }
    };

    // Initialize from current URL path
    syncPageFromPath();

    window.addEventListener('popstate', syncPageFromPath);
    return () => window.removeEventListener('popstate', syncPageFromPath);
  }, []);

  // Helper to change page and update address bar path (Browser Router style)
  const navigateTo = (pageId: string) => {
    window.history.pushState({}, '', `/${pageId}`);
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Basket actions
  const handleAddToQuote = (product: Product, quantity: number, color: string) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedColor === color
      );

      if (existingItemIndex > -1) {
        // Merge quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // Append new item
        return [...prevCart, { product, quantity, selectedColor: color }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, color: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId && item.selectedColor === color
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string, color: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.product.id === productId && item.selectedColor === color)
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Page content selector
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home
            setActivePage={navigateTo}
            onSelectBrand={setShopBrandTab}
            onAddToQuote={handleAddToQuote}
          />
        );
      case 'shop':
        return (
          <Shop
            onAddToQuote={handleAddToQuote}
            activeTab={shopBrandTab}
            setActiveTab={setShopBrandTab}
          />
        );
      case 'hot-deals':
        return <HotDeals />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'returns':
        return <Returns />;
      case 'shipping':
        return <Shipping />;
      default:
        return <Home setActivePage={navigateTo} onSelectBrand={setShopBrandTab} onAddToQuote={handleAddToQuote} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-950 font-sans text-slate-300 selection:bg-blue-600 selection:text-white overflow-x-hidden max-w-[100vw]">
      
      {/* Main top navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={navigateTo}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Top active notice strip for business urgency */}
      <div className="bg-gradient-to-r from-blue-950 via-rose-950 to-blue-950 border-b border-slate-900 py-2 px-4 text-center text-[10px] sm:text-xs font-bold tracking-wider text-slate-300 flex items-center justify-center gap-x-6 gap-y-1 flex-wrap">
        <span className="flex items-center gap-1 text-amber-400">
          <Award className="h-3.5 w-3.5" /> All Devices Foreign Used
        </span>
        <span className="flex items-center gap-1 text-rose-500">
          <Building className="h-3.5 w-3.5" /> Suite A08 Platinum Plaza, Ikeja Outlet Open
        </span>
        <span className="flex items-center gap-1 text-blue-400">
          <MapPin className="h-3.5 w-3.5" /> Fast Dispatch & Nationwide Delivery Active
        </span>
      </div>

      {/* Page Content Area with animated wrapper */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Business Footer */}
      <Footer setActivePage={navigateTo} />

      {/* Wholesale Sidebar Quote basket */}
      <QuoteEstimator
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Persistent Floating Circular Support Widget */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-2.5">
        {/* Mini Hotline toggle */}
        <a
          href="tel:07025002885"
          className="p-3 rounded-full bg-slate-900/95 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500 shadow-xl transition-all duration-300 flex items-center justify-center group"
          title="Call Sales Desk"
        >
          <Phone className="h-5 w-5 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Floating MONDOAI Chatbot Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setChatOpen(true)}
          className="relative p-4 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer"
          title="Chat with MONDOAI"
        >
          <span className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
          <Bot className="h-6 w-6 group-hover:scale-110 transition-transform" />
          
          {/* Expanded bubble tooltip on desktop hover */}
          <span className="absolute right-14 bg-slate-950 text-[10px] font-bold uppercase tracking-wider border border-slate-800 text-slate-200 py-1.5 px-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            MONDOAI Assistant
          </span>
        </button>
      </div>

      {/* MONDOAI Chatbot Popup */}
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

    </div>
  );
}
